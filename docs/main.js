/* Template 02 Master v2.4.1 – E-Mail-Platzhalter & kleine UX-Helfer */
(function(){
  const qs = new URLSearchParams(location.search);
  const emailFromUrl = (qs.get('email') || '').trim();
  const configUrl = 'manifest/config.json' + (location.search ? '&' + location.search.slice(1) : '');

  // Set nav active by hash
  function setActivePills(){
    const items = document.querySelectorAll('.nav .pill');
    items.forEach(a => a.classList.remove('active'));
    // Default: first pill
    if(location.hash){
      const target = document.querySelector('.nav .pill[href="' + location.hash + '"]');
      if(target) target.classList.add('active');
    } else {
      items[0]?.classList.add('active');
    }
  }
  window.addEventListener('hashchange', setActivePills);
  setActivePills();

  const applyEmail = (email) => {
    const safe = (email || '').trim();
    const fallback = 'mentor@example.com';
    const target = safe || fallback;

    // Mailto targets
    const mailto = 'mailto:' + target + '?subject=' + encodeURIComponent('Grundkurs – Ich will starten');
    document.querySelectorAll('[data-email-link]').forEach(el => el.setAttribute('href', mailto));
    document.querySelectorAll('[data-email-cta]').forEach(el => el.setAttribute('href', mailto));

    // Optional pill tooltip
    const pill = document.querySelector('[data-email-pill]');
    if(pill) pill.title = target;

    // Also reflect in CTA if present
    const ctaStart = document.getElementById('cta-start');
    if(ctaStart && ctaStart.getAttribute('href')?.startsWith('#')){
      // leave anchor as-is
    }
  };

  // 1) URL param wins
  if(emailFromUrl){
    applyEmail(emailFromUrl);
    return;
  }

  // 2) Else try config.json
  fetch(configUrl).then(r => r.json()).then(cfg => {
    applyEmail(cfg.defaultEmail || '');
  }).catch(() => {
    applyEmail('');
  });
})();
