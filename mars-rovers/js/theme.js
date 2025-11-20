// theme.js - small script to toggle dark mode and persist preference
(function(){
  function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
    var pressed = (theme === 'dark');
    document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3').forEach(btn=>{
      btn.setAttribute('aria-pressed', pressed);
    });
  }
  var saved = localStorage.getItem('site-theme') || 'light';
  setTheme(saved);
  document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3').forEach(btn=>{
    btn.addEventListener('click', function(){
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  });
})();
