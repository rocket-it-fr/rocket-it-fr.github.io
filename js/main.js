/* ROCKET IT - Main JS */
document.addEventListener('DOMContentLoaded', () => {

  // === Mobile burger ===
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      burger.classList.remove('active'); navLinks.classList.remove('open');
    }));
  }

  // === KPI counters ===
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const start = performance.now();
          const duration = 1800;
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => obs.observe(c));
  }

  // === Year footer ===
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === SalesIQ chargé d'office (sauf si désactivé manuellement par l'utilisateur) ===
  loadSalesIQ();
});

// === SALESIQ ===
function loadSalesIQ() {
  // Respecter le choix explicite de désactivation
  if (localStorage.getItem('rocketit_salesiq_disabled') === 'true') return;
  if (window.$zoho && window.$zoho.salesiq && document.getElementById('zsiqscript')) return;
  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    widgetcode: "siq8555576954171dd06d9d2b71f74e165891ea1e734a38740064f4ea3ed0609cf7",
    values: {},
    ready: function() {}
  };
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.id = "zsiqscript";
  s.defer = true;
  s.src = "https://salesiq.zohopublic.eu/widget";
  document.head.appendChild(s);
}

// === Désactiver / Réactiver SalesIQ (utilisé depuis la politique de confidentialité) ===
function disableSalesIQ() {
  localStorage.setItem('rocketit_salesiq_disabled', 'true');
  alert('Le chat SalesIQ a été désactivé sur ce navigateur. La page va se recharger.');
  location.reload();
}

function enableSalesIQ() {
  localStorage.removeItem('rocketit_salesiq_disabled');
  alert('Le chat SalesIQ a été réactivé. La page va se recharger.');
  location.reload();
}
