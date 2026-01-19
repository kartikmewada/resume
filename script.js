// Small script: theme toggle + print button
(function(){
  const root = document.documentElement;
  const THEME_KEY = 'resume_theme';
  const btn = document.getElementById('themeToggle');
  const printBtn = document.getElementById('printBtn');

  function setTheme(t){
    if(t === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem(THEME_KEY, t);
  }

  // initialize
  const saved = localStorage.getItem(THEME_KEY) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved);

  btn && btn.addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    setTheme(next);
    btn.blur();
  });

  printBtn && printBtn.addEventListener('click', () => {
    window.print();
  });

  // Keyboard: "t" toggles theme, "p" prints
  window.addEventListener('keydown', (e) => {
    if(e.target && /input|textarea/i.test(e.target.tagName)) return;
    if(e.key === 't') btn && btn.click();
    if(e.key === 'p') printBtn && printBtn.click();
  });
})();
