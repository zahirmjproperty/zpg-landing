'use strict';

const config = window.ZENTRA_CONFIG;
const dialog = document.querySelector('#product-dialog');

/* Only accept absolute HTTPS destinations; anything else is treated as not-yet-connected. */
function safeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

function showInfo(title, description, message) {
  document.querySelector('#dialog-title').textContent = title;
  document.querySelector('#dialog-description').textContent = description;
  document.querySelector('#dialog-status').textContent = message;
  dialog.showModal();
}

/* ---- Product cards: 12 products; Zentra ID gets the full-width panel instead ---- */
const grid = document.querySelector('#product-grid');
const cards = config.products.filter(function (p) { return p.id !== 'id'; });

cards.forEach(function (product) {
  const article = document.createElement('article');
  article.className = 'product';
  article.id = 'product-' + product.id;

  const img = document.createElement('img');
  img.src = 'assets/modules/' + product.id + '.webp';
  img.width = 226;
  img.height = 140;
  img.loading = 'lazy';
  img.alt = '';
  img.addEventListener('error', function () { img.classList.add('is-missing'); });

  const body = document.createElement('div');
  body.className = 'card-body';

  const h3 = document.createElement('h3');
  h3.textContent = product.name;

  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = product.description;

  if (product.comingSoon) {
    article.classList.add('is-coming-soon');
    const badge = document.createElement('span');
    badge.className = 'badge-soon';
    badge.textContent = 'Coming Soon';
    body.append(h3, badge, desc);
    article.append(img, body);
    grid.appendChild(article);
    return;
  }

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'text-button product-open';
  btn.dataset.product = product.id;
  btn.innerHTML = 'Explore <span aria-hidden="true">&#8599;</span>';
  const sr = document.createElement('span');
  sr.className = 'sr-only';
  sr.textContent = ' ' + product.name;
  btn.appendChild(sr);

  body.append(h3, desc, btn);
  article.append(img, body);
  grid.appendChild(article);
});

/* ---- Product navigation: real URL, or an honest in-page notice ---- */
document.querySelectorAll('.product-open').forEach(function (button) {
  button.addEventListener('click', function () {
    const product = config.products.find(function (item) { return item.id === button.dataset.product; });
    const url = safeUrl(product.url);
    if (url) { window.location.assign(url); return; }
    showInfo(
      product.name,
      product.description,
      'This product is not connected on this page yet. Its access details will be published once the system is live.'
    );
  });
});

/* ---- ZENTRA ID / login ---- */
document.querySelectorAll('.login').forEach(function (button) {
  button.addEventListener('click', function () {
    const url = safeUrl(config.loginUrl);
    if (url) { window.location.assign(url); return; }
    showInfo(
      'Zentra ID',
      'One account. Access by role.',
      'Sign-in is not connected on this page yet.'
    );
  });
});

document.querySelectorAll('.dialog-close, .dialog-done').forEach(function (button) {
  button.addEventListener('click', function () { dialog.close(); });
});

/* ---- Accessible menu ---- */
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
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
