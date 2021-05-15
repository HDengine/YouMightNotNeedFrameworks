function runTheme() {
  if (localStorage.theme) {
    if (localStorage.theme.startsWith('dark')) document.documentElement.setAttribute('data-color-mode', 'dark');
    document.documentElement.setAttribute('data-dark-theme', localStorage.theme);
  }
}

function setTheme(theme) {
  localStorage.theme = theme
}
