document.getElementById('nav-toggle-btn').addEventListener('click', function(ev) {
  showNav();
});

document.getElementById('nav-close-btn').addEventListener('click', function(ev) {
  hideNav();
});

document.querySelectorAll('.sidenav-list li a').forEach(elem => {
  elem.addEventListener('click', (ev) => {
    hideNav();
  })
});

function showNav() {
  document.getElementById('mobile-nav').classList.add('expanded');
}

function hideNav() {
  document.getElementById('mobile-nav').classList.remove('expanded');
}