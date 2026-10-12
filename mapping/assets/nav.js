'use strict';
/* ZENTRA Finance landing — navigation only.
   No forms, no analytics, no user-data collection on this page. */
(function () {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  if (!menu || !nav) return;

  menu.addEventListener('click', function () {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
})();
