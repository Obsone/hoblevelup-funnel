const siteHeader = document.querySelector('[data-site-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const heroVisual = document.querySelector('[data-hero-visual]');
  const problemSection = document.querySelector('[data-problem-section]');
  const solutionOrbit = document.querySelector('[data-solution-orbit]');
  const processSection = document.querySelector('[data-process-section]');
  const projectTabs = [...document.querySelectorAll('[data-project-tab]')];
  const projectPanels = [...document.querySelectorAll('[data-project-panel]')];
  const caseStudyDialogs = [...document.querySelectorAll('[data-case-study-dialog]')];
  const caseStudyTriggers = [...document.querySelectorAll('[data-case-study-open]')];
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const setTheme = (theme, persist = true) => {
    const isDark = theme === 'dark';

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';

    const nextThemeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle?.setAttribute('aria-label', nextThemeLabel);
    themeToggle?.setAttribute('title', nextThemeLabel);

    if (!persist) return;

    try {
      localStorage.setItem('hoblevelup-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // The selected theme still applies when browser storage is unavailable.
    }
  };

  setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light', false);

  themeToggle?.addEventListener('click', () => {
    setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  });

  const setMenuOpen = (isOpen) => {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    mobileMenu.dataset.open = String(isOpen);
  };

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) setMenuOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!siteHeader?.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      menuToggle?.focus();
    }
  });

  const updateHeader = () => {
    siteHeader?.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (heroVisual && !reducedMotion.matches && window.matchMedia('(pointer: fine)').matches) {
    heroVisual.addEventListener('pointermove', (event) => {
      const bounds = heroVisual.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

      heroVisual.style.setProperty('--hero-rotate-x', `${vertical * -3}deg`);
      heroVisual.style.setProperty('--hero-rotate-y', `${horizontal * 4}deg`);
    });

    heroVisual.addEventListener('pointerleave', () => {
      heroVisual.style.setProperty('--hero-rotate-x', '0deg');
      heroVisual.style.setProperty('--hero-rotate-y', '0deg');
    });
  }

  if (problemSection) {
    const revealProblemSection = () => problemSection.classList.add('is-visible');

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealProblemSection();
    } else {
      problemSection.classList.add('is-motion-ready');

      const problemObserver = new IntersectionObserver((entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        revealProblemSection();
        observer.disconnect();
      }, { rootMargin: '0px 0px -14% 0px', threshold: 0.18 });

      problemObserver.observe(problemSection);
    }
  }

  if (processSection) {
    const revealProcessSection = () => processSection.classList.add('is-visible');

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealProcessSection();
    } else {
      processSection.classList.add('is-motion-ready');

      const processObserver = new IntersectionObserver((entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        revealProcessSection();
        observer.disconnect();
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.2 });

      processObserver.observe(processSection);
    }
  }

  if (projectTabs.length && projectPanels.length) {
    const activateProject = (activeTab, moveFocus = false) => {
      const activePanelId = activeTab.getAttribute('aria-controls');

      projectTabs.forEach((tab) => {
        const isActive = tab === activeTab;
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });

      projectPanels.forEach((panel) => {
        const isActive = panel.id === activePanelId;
        panel.hidden = !isActive;
        panel.classList.toggle('is-active', isActive);
      });

      if (moveFocus) activeTab.focus();
    };

    projectTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateProject(tab));
      tab.addEventListener('keydown', (event) => {
        let nextIndex = null;

        if (event.key === 'ArrowRight') nextIndex = (index + 1) % projectTabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + projectTabs.length) % projectTabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = projectTabs.length - 1;
        if (nextIndex === null) return;

        event.preventDefault();
        activateProject(projectTabs[nextIndex], true);
      });
    });
  }

  if (caseStudyDialogs.length && caseStudyTriggers.length) {
    let lastCaseStudyTrigger = null;

    const setCaseStudyScrollLock = () => {
      document.documentElement.classList.toggle(
        'case-study-open',
        caseStudyDialogs.some((dialog) => dialog.open)
      );
    };

    caseStudyDialogs.forEach((dialog) => {
      const closeButton = dialog.querySelector('[data-case-study-close]');
      const gallery = dialog.querySelector('[data-case-study-gallery]');
      const slides = gallery ? [...gallery.querySelectorAll('.case-study-slide')] : [];
      const previousButton = dialog.querySelector('[data-gallery-previous]');
      const nextButton = dialog.querySelector('[data-gallery-next]');
      const counter = dialog.querySelector('[data-gallery-counter]');
      let activeSlide = 0;
      let galleryFramePending = false;

      const updateGallery = () => {
        galleryFramePending = false;
        if (!gallery || !slides.length) return;

        activeSlide = Math.min(
          slides.length - 1,
          Math.max(0, Math.round(gallery.scrollLeft / Math.max(1, gallery.clientWidth)))
        );

        if (counter) counter.textContent = `${activeSlide + 1} / ${slides.length}`;
        if (previousButton) previousButton.disabled = activeSlide === 0;
        if (nextButton) nextButton.disabled = activeSlide === slides.length - 1;
      };

      const requestGalleryUpdate = () => {
        if (galleryFramePending) return;
        galleryFramePending = true;
        window.requestAnimationFrame(updateGallery);
      };

      const showSlide = (index) => {
        if (!gallery || !slides.length) return;

        activeSlide = Math.min(slides.length - 1, Math.max(0, index));
        gallery.scrollTo({
          left: activeSlide * gallery.clientWidth,
          behavior: reducedMotion.matches ? 'auto' : 'smooth'
        });
        updateGallery();
      };

      previousButton?.addEventListener('click', () => showSlide(activeSlide - 1));
      nextButton?.addEventListener('click', () => showSlide(activeSlide + 1));
      gallery?.addEventListener('scroll', requestGalleryUpdate, { passive: true });
      gallery?.addEventListener('keydown', (event) => {
        let nextSlide = null;

        if (event.key === 'ArrowRight') nextSlide = activeSlide + 1;
        if (event.key === 'ArrowLeft') nextSlide = activeSlide - 1;
        if (event.key === 'Home') nextSlide = 0;
        if (event.key === 'End') nextSlide = slides.length - 1;
        if (nextSlide === null) return;

        event.preventDefault();
        showSlide(nextSlide);
      });

      closeButton?.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener('close', () => {
        setCaseStudyScrollLock();
        lastCaseStudyTrigger?.focus();
        lastCaseStudyTrigger = null;
      });

      const galleryResizeObserver = 'ResizeObserver' in window
        ? new ResizeObserver(() => {
          if (!gallery) return;
          gallery.scrollLeft = activeSlide * gallery.clientWidth;
          updateGallery();
        })
        : null;

      if (gallery) galleryResizeObserver?.observe(gallery);
      updateGallery();

      dialog.resetCaseStudyGallery = () => {
        if (!gallery) return;
        activeSlide = 0;
        gallery.scrollLeft = 0;
        updateGallery();
      };
    });

    caseStudyTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const dialog = document.getElementById(trigger.dataset.caseStudyOpen);
        if (!(dialog instanceof HTMLDialogElement)) return;

        lastCaseStudyTrigger = trigger;
        dialog.resetCaseStudyGallery?.();
        dialog.showModal();
        setCaseStudyScrollLock();

        window.requestAnimationFrame(() => {
          dialog.querySelector('[data-case-study-close]')?.focus();
        });
      });
    });
  }

  if (solutionOrbit) {
    const solutionScroll = solutionOrbit.querySelector('[data-solution-scroll]');
    const solutionScene = solutionOrbit.querySelector('.solution-orbit-scene');
    const solutionSteps = [...solutionOrbit.querySelectorAll('[data-solution-step]')];
    const solutionDetails = [...solutionOrbit.querySelectorAll('[data-solution-detail]')];
    const solutionCards = [...solutionOrbit.querySelectorAll('[data-solution-card]')];
    const hubStatus = solutionOrbit.querySelector('[data-solution-hub-status]');
    const hubMeta = solutionOrbit.querySelector('[data-solution-hub-meta]');
    const desktopOrbit = window.matchMedia('(min-width: 1100px)');
    const baseAngles = [-90, 0, 90, 180];
    let activeSolutionStage = 0;
    let solutionFramePending = false;

    const setActiveSolutionStage = (index, isDesktop = desktopOrbit.matches) => {
      activeSolutionStage = index;

      solutionSteps.forEach((step, stepIndex) => {
        const isActive = stepIndex === index;
        step.classList.toggle('is-active', isActive);
        step.setAttribute('aria-pressed', String(isActive));
      });

      solutionDetails.forEach((detail, detailIndex) => {
        const isActive = detailIndex === index;
        detail.classList.toggle('is-active', isActive);
        detail.setAttribute('aria-hidden', String(isDesktop && !isActive));
      });

      solutionCards.forEach((card, cardIndex) => {
        card.classList.toggle('is-active', cardIndex === index);
      });

      const activeDetail = solutionDetails[index];
      if (activeDetail && hubStatus && hubMeta) {
        hubStatus.textContent = activeDetail.dataset.hubStatus;
        hubMeta.textContent = activeDetail.dataset.hubMeta;
      }
    };

    const updateSolutionOrbit = () => {
      solutionFramePending = false;

      if (!solutionScroll || !solutionScene || !desktopOrbit.matches || reducedMotion.matches) {
        setActiveSolutionStage(activeSolutionStage, false);
        return;
      }

      const bounds = solutionScroll.getBoundingClientRect();
      const stickyOffset = 76;
      const stickyHeight = window.innerHeight - stickyOffset;
      const scrollableDistance = Math.max(1, bounds.height - stickyHeight);
      const progress = Math.min(1, Math.max(0, (stickyOffset - bounds.top) / scrollableDistance));
      const activeIndex = Math.min(3, Math.round(progress * 3));
      const rotation = progress * -270;
      const radius = Math.min(220, solutionScene.clientWidth * 0.33, solutionScene.clientHeight * 0.36);

      solutionOrbit.style.setProperty('--solution-progress', `${progress * 100}%`);

      solutionCards.forEach((card, index) => {
        const angle = (baseAngles[index] + rotation) * (Math.PI / 180);
        card.style.setProperty('--orbit-x', `${Math.cos(angle) * radius}px`);
        card.style.setProperty('--orbit-y', `${Math.sin(angle) * radius}px`);
      });

      const activeAngle = baseAngles[activeIndex] + rotation;
      solutionOrbit.style.setProperty('--solution-signal-angle', `${activeAngle + 90}deg`);

      if (activeIndex !== activeSolutionStage) {
        setActiveSolutionStage(activeIndex);
      }
    };

    const requestSolutionUpdate = () => {
      if (solutionFramePending) return;
      solutionFramePending = true;
      window.requestAnimationFrame(updateSolutionOrbit);
    };

    solutionSteps.forEach((step, index) => {
      step.addEventListener('click', () => {
        if (!solutionScroll || !desktopOrbit.matches || reducedMotion.matches) return;

        const bounds = solutionScroll.getBoundingClientRect();
        const start = window.scrollY + bounds.top - 76;
        const distance = Math.max(1, bounds.height - (window.innerHeight - 76));
        window.scrollTo({ top: start + distance * (index / 3), behavior: 'smooth' });
      });
    });

    setActiveSolutionStage(0, desktopOrbit.matches && !reducedMotion.matches);
    updateSolutionOrbit();
    window.addEventListener('scroll', requestSolutionUpdate, { passive: true });
    window.addEventListener('resize', requestSolutionUpdate);
    desktopOrbit.addEventListener?.('change', requestSolutionUpdate);
  }

  document.querySelectorAll('[data-offer-system]').forEach((offerSystem) => {
    const tabs = [...offerSystem.querySelectorAll('[data-offer-tab]')];
    const panel = offerSystem.querySelector('[data-offer-panel]');
    const icon = offerSystem.querySelector('[data-offer-icon]');
    const kicker = offerSystem.querySelector('[data-offer-kicker]');
    const title = offerSystem.querySelector('[data-offer-title]');
    const summary = offerSystem.querySelector('[data-offer-summary]');
    const input = offerSystem.querySelector('[data-offer-input]');
    const process = offerSystem.querySelector('[data-offer-process]');
    const output = offerSystem.querySelector('[data-offer-output]');
    const handles = offerSystem.querySelector('[data-offer-handles]');
    const impact = offerSystem.querySelector('[data-offer-impact]');

    if (!panel || !tabs.length) return;

    const selectOfferTab = (tab, moveFocus = false) => {
      tabs.forEach((candidate) => {
        const isSelected = candidate === tab;
        candidate.setAttribute('aria-selected', String(isSelected));
        candidate.tabIndex = isSelected ? 0 : -1;
      });

      panel.setAttribute('aria-labelledby', tab.id);
      if (icon) icon.textContent = tab.dataset.icon;
      if (kicker) kicker.textContent = tab.dataset.kicker;
      if (title) title.textContent = tab.dataset.title;
      if (summary) summary.textContent = tab.dataset.summary;
      if (input) input.textContent = tab.dataset.input;
      if (process) process.textContent = tab.dataset.process;
      if (output) output.textContent = tab.dataset.output;
      if (impact) impact.textContent = tab.dataset.impact;

      if (handles) {
        handles.replaceChildren(...tab.dataset.handles.split('|').map((label) => {
          const tag = document.createElement('span');
          tag.textContent = label;
          return tag;
        }));
      }

      if (!reducedMotion.matches) {
        panel.animate([
          { opacity: 0.72, transform: 'translateY(5px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 220, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
      }

      if (moveFocus) tab.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => selectOfferTab(tab));
      tab.addEventListener('keydown', (event) => {
        let nextIndex = index;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        if (nextIndex === index) return;

        event.preventDefault();
        selectOfferTab(tabs[nextIndex], true);
      });
    });
  });

  document.querySelectorAll('[data-faq-list]').forEach((faqList) => {
    const items = faqList.querySelectorAll('details');

    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      });
    });
  });
