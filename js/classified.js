/* Classified Access — folios are stored enciphered against their access term. */
(function () {
  'use strict';
  const FOLIOS = window.FOLIOS || [];
  const form = document.getElementById('vault-form');
  if (!form) return;
  const input = document.getElementById('vault-term');
  const msg = document.getElementById('vault-msg');
  const out = document.getElementById('folio-out');
  const tabs = Array.from(document.querySelectorAll('.folio-tabs span'));

  function fnv(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return ('00000000' + h.toString(16)).slice(-8);
  }
  function decipher(b64, key) {
    const bin = atob(b64);
    const k = new TextEncoder().encode(key);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i) ^ k[i % k.length];
    return new TextDecoder().decode(bytes);
  }
  function markOpen(n) {
    tabs.forEach((t) => { if (t.dataset.folio === String(n)) t.classList.add('open'); });
    try {
      const s = JSON.parse(sessionStorage.getItem('rvfa-folios') || '[]');
      if (!s.includes(n)) { s.push(n); sessionStorage.setItem('rvfa-folios', JSON.stringify(s)); }
    } catch (e) { /* storage unavailable */ }
  }
  try { JSON.parse(sessionStorage.getItem('rvfa-folios') || '[]').forEach((n) => markOpen(n)); } catch (e) { /* ignore */ }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const term = input.value.trim().toLowerCase().replace(/[\s\-_]+/g, '');
    const h = fnv(term);
    const f = FOLIOS.find((x) => x.h === h);
    out.classList.remove('show');
    if (!term) { msg.textContent = 'Enter an access term.'; msg.className = 'vault-msg err'; return; }
    if (!f) {
      msg.textContent = 'No record is filed under that term.';
      msg.className = 'vault-msg err';
      input.select();
      return;
    }
    const html = decipher(f.d, term);
    if (html.indexOf('<!--folio-->') !== 0) { msg.textContent = 'Record damaged.'; msg.className = 'vault-msg err'; return; }
    msg.textContent = 'Folio ' + ['I', 'II', 'III', 'IV'][f.n - 1] + ' released for reading-room use.';
    msg.className = 'vault-msg';
    out.innerHTML = html;
    void out.offsetWidth;
    out.classList.add('show');
    markOpen(f.n);
    input.value = '';
    setTimeout(() => out.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
  });
})();
