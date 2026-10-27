/* Bamboo Avenger Research Archive — shared behaviour */
(function () {
  'use strict';
  const A = window.ARCHIVE || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- navigation ---------- */
  const toggle = $('.nav-toggle');
  const nav = $('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------- lightbox ---------- */
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Enlarged plate');
  lb.innerHTML = '<button class="lb-close" type="button">Close</button><img alt=""><p class="lb-cap"></p>';
  document.body.appendChild(lb);
  let lastFocus = null;
  function openLB(src, alt, cap) {
    lastFocus = document.activeElement;
    $('img', lb).src = src; $('img', lb).alt = alt || '';
    $('.lb-cap', lb).textContent = cap || '';
    lb.classList.add('open');
    $('.lb-close', lb).focus();
  }
  function closeLB() { lb.classList.remove('open'); $('img', lb).src = ''; if (lastFocus) lastFocus.focus(); }
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-close')) closeLB(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) closeLB(); });
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-zoom]');
    if (!t) return;
    e.preventDefault();
    const img = t.tagName === 'IMG' ? t : $('img', t);
    openLB(t.getAttribute('data-zoom') || (img && img.src), img && img.alt, t.getAttribute('data-caption') || (img && img.alt));
  });
  $$('[data-zoom]').forEach((el) => {
    if (el.tagName !== 'A' && el.tagName !== 'BUTTON') {
      el.setAttribute('tabindex', '0'); el.setAttribute('role', 'button');
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
    }
  });

  if (!A.incidents) return;
  const byDate = A.incidents.slice().sort((a, b) => b.date.localeCompare(a.date));

  function badge(cls) {
    const c = A.classes[cls];
    return `<span class="class-badge ${c.css}" title="${esc(c.note)}">${c.label}</span>`;
  }

  /* ---------- home: latest incidents ---------- */
  const latest = $('#latest-incidents');
  if (latest) {
    latest.innerHTML = byDate.slice(0, 3).map((i) => `
      <article class="case-card">
        <div class="case-no">${i.id}</div>
        <div class="case-meta"><span>${A.fmtDate(i.date)}</span><span>${A.locations[i.loc].name}</span></div>
        <h3>${esc(i.title)}</h3>
        <p>${esc(i.summary)}</p>
        <div class="case-foot">${badge(i.cls)}<a class="more" href="incidents.html#${i.id}">Open file</a></div>
      </article>`).join('');
  }

  /* ---------- home: map preview pins ---------- */
  const prev = $('#map-preview');
  if (prev) {
    Object.keys(A.locations).forEach((k) => {
      const l = A.locations[k];
      const p = document.createElement('span');
      p.className = 'pin';
      p.style.left = (l.x / 1000 * 100) + '%';
      p.style.top = (l.y / 1300 * 100) + '%';
      p.title = l.name;
      prev.appendChild(p);
    });
  }

  /* ---------- incident archive ---------- */
  const list = $('#incident-list');
  if (list) {
    const fLoc = $('#f-loc'), fCls = $('#f-cls'), fq = $('#f-q'), count = $('#f-count');
    Object.keys(A.locations).forEach((k) => fLoc.insertAdjacentHTML('beforeend', `<option value="${k}">${A.locations[k].name}</option>`));
    Object.keys(A.classes).forEach((k) => fCls.insertAdjacentHTML('beforeend', `<option value="${k}">${A.classes[k].label}</option>`));
    const chron = A.incidents.slice().sort((a, b) => a.date.localeCompare(b.date));
    function xrefLabel(h) {
      const map = { 'green-vein.html': 'Green Vein Tradition', 'whispering-monks.html': 'Whispering Monks', 'phrase.html': 'Phrase 001', 'symbol.html': 'Symbol 001', 'subject.html': 'Subject Profile' };
      if (map[h]) return map[h];
      const m = h.match(/#(.+)$/); return m ? 'Artifact ' + m[1] : h;
    }
    function render() {
      const L = fLoc.value, C = fCls.value, q = fq.value.trim().toLowerCase();
      const rows = chron.filter((i) => (!L || i.loc === L) && (!C || i.cls === C) &&
        (!q || (i.id + i.title + i.summary + i.notes + i.witness).toLowerCase().includes(q)));
      count.textContent = `${rows.length} of ${A.incidents.length} reports`;
      list.innerHTML = rows.length ? rows.map((i) => `
        <article class="report" id="${i.id}">
          <div class="report-side">
            <dl>
              <div><dt>Case number</dt><dd>${i.id}</dd></div>
              <div><dt>Date</dt><dd>${A.fmtDate(i.date)}</dd></div>
              <div><dt>Location</dt><dd>${A.locations[i.loc].name}</dd></div>
              <div><dt>Grid</dt><dd>${A.locations[i.loc].grid}</dd></div>
              <div><dt>Reporting party</dt><dd>${esc(i.witness)}</dd></div>
              <div><dt>Classification</dt><dd>${badge(i.cls)}</dd></div>
            </dl>
          </div>
          <div class="report-body">
            <h3>${esc(i.title)}</h3>
            <h4>Summary</h4>
            <p>${esc(i.summary)}</p>
            <h4>Research notes</h4>
            <p class="notes">${esc(i.notes)}</p>
            <p class="xref">Cross-reference: <a href="map.html?loc=${i.loc}">Plate M-1</a>${i.xref.map((h) => ` · <a href="${h}">${xrefLabel(h)}</a>`).join('')}</p>
          </div>
        </article>`).join('') : '<p class="disclaimer">No reports match these terms.</p>';
    }
    [fLoc, fCls].forEach((el) => el.addEventListener('change', render));
    fq.addEventListener('input', render);
    const params = new URLSearchParams(location.search);
    if (params.get('loc') && A.locations[params.get('loc')]) fLoc.value = params.get('loc');
    render();
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) { setTimeout(() => { el.scrollIntoView({ block: 'start' }); el.classList.add('flash'); }, 60); }
    }
  }

  /* ---------- incident map ---------- */
  const svg = $('#field-map svg');
  if (svg) {
    const NS = 'http://www.w3.org/2000/svg';
    const layer = document.createElementNS(NS, 'g');
    layer.setAttribute('class', 'fm-markers');
    svg.appendChild(layer);
    const panel = $('#map-panel');
    let activeCls = '';
    const markers = {};
    Object.keys(A.locations).forEach((k, idx) => {
      const l = A.locations[k];
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'map-marker');
      g.setAttribute('transform', `translate(${l.x} ${l.y})`);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', `${l.name}: show reports`);
      const right = !l.labelLeft && l.x < 700;
      g.innerHTML = `<circle class="pulse" r="14"/><circle class="ring" r="14"/><circle class="dot" r="5"/>
        <text x="${right ? 22 : -22}" y="5" text-anchor="${right ? 'start' : 'end'}">${String.fromCharCode(65 + idx)} · ${l.name.toUpperCase()}</text>`;
      g.addEventListener('click', () => select(k));
      g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(k); } });
      layer.appendChild(g);
      markers[k] = g;
    });
    function countFor(k) { return A.incidents.filter((i) => i.loc === k && (!activeCls || i.cls === activeCls)).length; }
    function refreshMarkers() {
      Object.keys(markers).forEach((k) => {
        const n = countFor(k);
        markers[k].style.opacity = n ? 1 : .28;
      });
    }
    function select(k) {
      Object.values(markers).forEach((m) => m.classList.remove('active'));
      markers[k].classList.add('active');
      const l = A.locations[k];
      const rows = A.incidents.filter((i) => i.loc === k && (!activeCls || i.cls === activeCls)).sort((a, b) => a.date.localeCompare(b.date));
      panel.innerHTML = `
        <span class="eyebrow">Location record · Grid ${l.grid}</span>
        <h3 class="label-title">${l.name}</h3>
        <p>${esc(l.note)}</p>
        <p class="mono muted">${A.incidents.filter((i) => i.loc === k).length} report(s) on file${activeCls ? ` · ${rows.length} shown (${A.classes[activeCls].label})` : ''}</p>
        <ul>${rows.map((i) => `<li><a href="incidents.html#${i.id}"><span class="mono">${i.id} · ${A.fmtDate(i.date)}</span>${esc(i.title)}</a> ${badge(i.cls)}</li>`).join('') || '<li class="disclaimer">No reports in this classification.</li>'}</ul>
        <p class="mt1"><a class="text-link" href="incidents.html?loc=${k}">All reports for this location</a></p>`;
      history.replaceState(null, '', '?loc=' + k);
    }
    $$('.legend button').forEach((b) => b.addEventListener('click', () => {
      $$('.legend button').forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      activeCls = b.dataset.cls || '';
      refreshMarkers();
      const act = Object.keys(markers).find((k) => markers[k].classList.contains('active'));
      if (act) select(act);
    }));
    refreshMarkers();
    const q = new URLSearchParams(location.search).get('loc');
    select(A.locations[q] ? q : 'bridge');
  }
})();
