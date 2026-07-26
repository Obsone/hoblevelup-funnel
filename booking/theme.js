(() => {
  const themeToggle = document.querySelector('[data-theme-toggle]');

  if (!themeToggle) return;

  const setTheme = (theme, persist = true) => {
    const isDark = theme === 'dark';
    const nextThemeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    themeToggle.setAttribute('aria-label', nextThemeLabel);
    themeToggle.setAttribute('title', nextThemeLabel);

    if (!persist) return;

    try {
      localStorage.setItem('hoblevelup-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // The selected theme still applies when browser storage is unavailable.
    }
  };

  setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light', false);

  themeToggle.addEventListener('click', () => {
    setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  });
})();
