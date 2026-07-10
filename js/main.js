document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('nav-links-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('nav-links-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
