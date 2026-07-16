(() => {
    const storageKey = 'hoblevelup-theme';
    let savedTheme = null;

    try {
      savedTheme = localStorage.getItem(storageKey);
    } catch (error) {
      savedTheme = null;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : prefersDark ? 'dark' : 'light';

    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
  })();
