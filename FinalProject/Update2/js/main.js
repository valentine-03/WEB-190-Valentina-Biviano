// Boccone — minimal interactivity

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Highlight current nav link based on filename
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Footer year
  var y = document.getElementById('current-year');
  if (y) y.textContent = new Date().getFullYear();

  // Menu tabs
  var tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length) {
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.tab-pane').forEach(function (p) { p.classList.remove('active'); });
        var pane = document.getElementById('tab-' + target);
        if (pane) pane.classList.add('active');
      });
    });
  }

  // Reservation form (demo only)
  var form = document.getElementById('reservation-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your reservation request has been received. We will contact you to confirm.');
      form.reset();
    });
  }
});
