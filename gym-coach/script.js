(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuIcon = document.querySelector('[data-menu-icon]');
  const headerBrand = header?.querySelector('.brand');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const form = document.querySelector('[data-assessment-form]');
  const formMessage = document.querySelector('[data-form-message]');
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  const setMenuOpen = (isOpen, restoreFocus = false) => {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Close navigation' : 'Open navigation';
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    mobileMenu.classList.toggle('is-open', isOpen);
    menuIcon?.classList.toggle('icon-menu', !isOpen);
    menuIcon?.classList.toggle('icon-x', isOpen);
    document.body.classList.toggle('menu-open', isOpen);

    if (main) main.inert = isOpen;
    if (footer) footer.inert = isOpen;
    if (headerBrand) headerBrand.tabIndex = isOpen ? -1 : 0;

    if (isOpen) {
      mobileMenu.querySelector('a')?.focus();
    } else if (restoreFocus) {
      menuToggle.focus();
    }
  };

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false, true);
    }
  });

  mobileQuery.addEventListener('change', (event) => {
    if (!event.matches) setMenuOpen(false);
  });

  const updateHeader = () => header?.classList.toggle('is-stuck', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  if (!form) return;

  const detailsStep = form.querySelector('[data-booking-step="details"]');
  const scheduleStep = form.querySelector('[data-booking-step="schedule"]');
  const successStep = form.querySelector('[data-booking-success]');
  const dateOptions = form.querySelector('[data-date-options]');
  const bookingError = form.querySelector('[data-booking-error]');
  const bookingSummary = form.querySelector('[data-booking-summary]');
  const stepIndicator = form.querySelector('[data-step-indicator]');
  const backButton = form.querySelector('[data-booking-back]');
  const confirmButton = form.querySelector('[data-booking-confirm]');
  const resetButton = form.querySelector('[data-booking-reset]');
  const nameField = form.elements.namedItem('name');

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  const getUpcomingWeekdays = () => {
    const dates = [];
    const cursor = new Date();
    cursor.setHours(12, 0, 0, 0);

    while (dates.length < 3) {
      cursor.setDate(cursor.getDate() + 1);
      const day = cursor.getDay();
      if (day !== 0 && day !== 6) dates.push(new Date(cursor));
    }

    return dates;
  };

  const toLocalDateValue = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const renderDateOptions = () => {
    if (!dateOptions) return;
    dateOptions.replaceChildren();

    getUpcomingWeekdays().forEach((date) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const text = document.createElement('span');
      const formatted = dateFormatter.format(date);

      input.type = 'radio';
      input.name = 'assessment-date';
      input.value = toLocalDateValue(date);
      input.dataset.dateLabel = formatted;
      text.textContent = formatted;
      label.append(input, text);
      dateOptions.append(label);
    });
  };

  const fieldMessages = {
    name: 'Enter your first name.',
    email: 'Enter a valid email address.',
    goal: 'Choose a training focus.'
  };

  const clearFieldError = (field) => {
    field.removeAttribute('aria-invalid');
    const error = form.querySelector(`[data-error-for="${field.name}"]`);
    if (error) error.textContent = '';
  };

  const setFieldError = (field) => {
    field.setAttribute('aria-invalid', 'true');
    const error = form.querySelector(`[data-error-for="${field.name}"]`);
    if (error) error.textContent = fieldMessages[field.name] || 'Complete this field.';
  };

  const requiredFields = [...form.querySelectorAll('[data-booking-step="details"] [required]')];
  requiredFields.forEach((field) => {
    field.addEventListener('input', () => {
      if (field.checkValidity() && field.value.trim()) clearFieldError(field);
    });
    field.addEventListener('change', () => {
      if (field.checkValidity() && field.value.trim()) clearFieldError(field);
    });
  });

  const showDetailsStep = () => {
    detailsStep.hidden = false;
    scheduleStep.hidden = true;
    successStep.hidden = true;
    stepIndicator.textContent = 'STEP 01 / 02';
    formMessage.textContent = '';
    bookingError.textContent = '';
  };

  const showScheduleStep = () => {
    detailsStep.hidden = true;
    scheduleStep.hidden = false;
    successStep.hidden = true;
    stepIndicator.textContent = 'STEP 02 / 02';
    formMessage.textContent = '';
    scheduleStep.querySelector('h3')?.focus();
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let firstInvalid = null;

    requiredFields.forEach((field) => {
      clearFieldError(field);
      if (!field.value.trim() || !field.checkValidity()) {
        setFieldError(field);
        firstInvalid ||= field;
      }
    });

    if (firstInvalid) {
      formMessage.textContent = 'Please complete the highlighted details to continue.';
      firstInvalid.focus();
      return;
    }

    showScheduleStep();
  });

  backButton?.addEventListener('click', () => {
    showDetailsStep();
    if (nameField instanceof HTMLInputElement) nameField.focus();
  });

  confirmButton?.addEventListener('click', () => {
    const selectedDate = form.querySelector('input[name="assessment-date"]:checked');
    const selectedTime = form.querySelector('input[name="assessment-time"]:checked');

    if (!(selectedDate instanceof HTMLInputElement) || !(selectedTime instanceof HTMLInputElement)) {
      bookingError.textContent = 'Choose both a sample date and time to continue.';
      const firstChoice = !selectedDate
        ? form.querySelector('input[name="assessment-date"]')
        : form.querySelector('input[name="assessment-time"]');
      firstChoice?.focus();
      return;
    }

    bookingError.textContent = '';
    detailsStep.hidden = true;
    scheduleStep.hidden = true;
    successStep.hidden = false;
    stepIndicator.textContent = 'COMPLETE';
    bookingSummary.textContent = `Your demo assessment is reserved for ${selectedDate.dataset.dateLabel} at ${selectedTime.value}. No information was sent or stored.`;
    successStep.querySelector('h3')?.focus();
  });

  resetButton?.addEventListener('click', () => {
    form.reset();
    requiredFields.forEach(clearFieldError);
    renderDateOptions();
    showDetailsStep();
    if (nameField instanceof HTMLInputElement) nameField.focus();
  });

  renderDateOptions();
  showDetailsStep();
})();
