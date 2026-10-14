document.documentElement.classList.add('js');

// Menu na mobilu
(function () {
  var b = document.querySelector('.burger'), m = document.getElementById('menu');
  if (!b || !m) return;
  b.addEventListener('click', function () {
    var o = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', String(!o));
    m.classList.toggle('otevreno', !o);
  });
  m.addEventListener('click', function (e) {
    if (e.target.closest('a')) { b.setAttribute('aria-expanded', 'false'); m.classList.remove('otevreno'); }
  });
})();

// Vzorník materiálů (záložky)
(function () {
  document.querySelectorAll('[data-vzornik]').forEach(function (v) {
    var tabs = Array.prototype.slice.call(v.querySelectorAll('[role="tab"]'));
    function vyber(t, fokus) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      if (fokus) t.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { vyber(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); vyber(n, true); }
      });
    });
  });
})();

// Zvětšení fotek
(function () {
  var d = document.querySelector('.lightbox');
  if (!d || !d.showModal) return;
  var im = d.querySelector('img'), p = d.querySelector('.lightbox-popis');
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.foto-odkaz');
    if (!a) return;
    e.preventDefault();
    var mal = a.querySelector('img');
    im.src = a.getAttribute('href');
    im.alt = mal ? mal.alt : '';
    p.textContent = (mal && mal.alt ? mal.alt + ' · ' : '') + (a.getAttribute('data-popis') || '');
    d.showModal();
  });
  d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('.lightbox-zavrit')) d.close(); });
})();

// Formulář: demo režim neodesílá nic, ostrý režim posílá na endpoint ze site.json (data-endpoint).
(function () {
  document.querySelectorAll('form.formular').forEach(function (f) {
    var stav = f.querySelector('.formular-stav');
    f.addEventListener('submit', function (e) {
      var endpoint = f.getAttribute('data-endpoint');
      var demo = f.getAttribute('data-demo') === '1';
      if (f.querySelector('.past input').value) { e.preventDefault(); return; }
      if (demo || !endpoint) {
        e.preventDefault();
        stav.textContent = 'Ukázka formuláře: nic se neodesílá. Po spuštění webu přijde poptávka rovnou na info@pokladkypodlah.cz.';
        return;
      }
      e.preventDefault();
      stav.textContent = 'Odesílám…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); stav.textContent = 'Děkujeme, poptávka odešla. Brzy se ozveme.'; })
        .catch(function () { stav.textContent = 'Odeslání se nepodařilo. Napište nám prosím na info@pokladkypodlah.cz.'; });
    });
  });
})();
