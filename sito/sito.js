// Sito di presentazione di Beelancio: menu sul telefono, icone, pagina «Guida».
// Le icone e i testi della guida sono gli stessi dell'app (../js/ui.js e ../js/guide-testi.js).
import { icon } from './js/ui.js';
import { GUIDE, ORDINE_GUIDE } from './js/guide-testi.js';

// Menu sul telefono
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
}

// Pagina attuale evidenziata nel menu (in locale i link sono «prezzi.html», online «/prezzi»)
const pageOf = (s) => String(s).split('#')[0].split('?')[0].replace(/^.*\//, '').replace(/\.html$/, '').replace(/^index$/, '');
const here = pageOf(location.pathname);
for (const a of document.querySelectorAll('.menu a:not(.btn)')) {
  if (pageOf(a.getAttribute('href')) === here) a.setAttribute('aria-current', 'page');
}

// Icone: <span data-icon="nome" data-size="20"></span>
for (const el of document.querySelectorAll('[data-icon]')) {
  el.replaceWith(icon(el.dataset.icon, Number(el.dataset.size) || 20));
}

// Domande frequenti: se ne apri una, si chiude quella aperta prima (la pagina non diventa lunghissima)
for (const faq of document.querySelectorAll('.faq')) {
  faq.addEventListener('toggle', (e) => {
    const opened = e.target;
    if (!(opened instanceof HTMLDetailsElement) || !opened.open) return;
    for (const d of faq.querySelectorAll('details[open]')) if (d !== opened) d.open = false;
  }, true); // «toggle» non risale: si ascolta in fase di cattura
}

// Api fondatrici: posti rimasti (il numero sta in fondatrici.json, aggiornato all'apertura degli abbonamenti)
const founders = document.querySelector('[data-fondatrici]');
if (founders) {
  fetch('fondatrici.json', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : null)).then((d) => {
    if (!d || !Number.isInteger(d.totale) || !Number.isInteger(d.presi)) return;
    const liberi = Math.max(0, d.totale - d.presi);
    founders.querySelector('[data-liberi]').textContent = String(liberi);
    founders.querySelector('[data-totale]').textContent = String(d.totale);
    founders.querySelector('[data-presi]').style.width = Math.round((d.presi / d.totale) * 100) + '%';
    founders.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', String(d.presi));
  }).catch(() => {});
}

// Galleria «Com'è fatta»: i pulsanti cambiano la schermata grande
const gallery = document.querySelector('[data-gallery]');
if (gallery) {
  const ALT = {
    bilancio: 'Il Bilancio di Beelancio: saldi dei conti e guadagni e spese del mese per attività',
    movimenti: 'I Movimenti: entrate, uscite e trasferimenti con ricerca e filtri',
    assistente: 'L\'assistente: una frase diventa un movimento già compilato da confermare',
    riparazioni: 'Le Riparazioni: oggetti ricevuti, stato del lavoro e soldi da incassare',
    agenda: 'L\'Agenda degli appuntamenti con i clienti',
    profilo: 'Il profilo: distintivi, gocce di miele e invita un collega',
  };
  const main = gallery.querySelector('[data-main]');
  for (const b of gallery.querySelectorAll('[data-shot]')) {
    b.addEventListener('click', () => {
      for (const x of gallery.querySelectorAll('[data-shot]')) x.setAttribute('aria-selected', String(x === b));
      main.src = `img/app-${b.dataset.shot}.webp`;
      main.alt = ALT[b.dataset.shot] || '';
    });
  }
}

// Anno nel piè di pagina
for (const el of document.querySelectorAll('[data-anno]')) el.textContent = String(new Date().getFullYear());

// Apertura delle iscrizioni: 1° gennaio 2027 alle 00:00, ora italiana. Prima: conto alla rovescia e «Avvisami»;
// dopo (anche senza ricaricare la pagina): i pulsanti portano all'iscrizione. Il server apre da solo alla stessa ora.
const LAUNCH = new Date('2027-01-01T00:00:00+01:00').getTime();
const LOCAL = ['localhost', '127.0.0.1'].includes(location.hostname);
const APP = LOCAL ? '' : 'https://app.beelancio.it';
function showOpen() {
  for (const el of document.querySelectorAll('[data-prima]')) el.hidden = true;
  for (const el of document.querySelectorAll('[data-dopo]')) el.hidden = false;
  // nella copia pubblica i pulsanti «Avvisami all'apertura» diventano «Iscriviti»
  for (const a of document.querySelectorAll('a[data-iscriviti]')) {
    a.href = APP || '../';
    a.textContent = a.classList.contains('small') ? 'Iscriviti' : 'Iscriviti gratis';
  }
}
if (Date.now() >= LAUNCH) showOpen();
else {
  const cd = document.querySelector('[data-countdown]');
  const part = (k) => cd && cd.querySelector(`[data-cd="${k}"]`);
  let timer = null;
  const tick = () => {
    const ms = LAUNCH - Date.now();
    if (ms <= 0) { clearInterval(timer); showOpen(); return; }
    if (!cd) return;
    const s = Math.floor(ms / 1000);
    part('giorni').textContent = String(Math.floor(s / 86400));
    part('ore').textContent = String(Math.floor(s / 3600) % 24).padStart(2, '0');
    part('minuti').textContent = String(Math.floor(s / 60) % 60).padStart(2, '0');
    part('secondi').textContent = String(s % 60).padStart(2, '0');
  };
  tick();
  timer = setInterval(tick, 1000);
}

// «Avvisami all'apertura»: l'email va al server di Beelancio, che manda subito un'email di conferma.
const notifyForm = document.querySelector('form[data-avvisami]');
if (notifyForm) {
  const msg = notifyForm.querySelector('.notify-msg');
  const say = (text, kind = '') => { msg.textContent = text; msg.className = 'notify-msg ' + kind; };
  notifyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const field = notifyForm.elements.email;
    const email = field.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say('Scrivi un indirizzo email valido.', 'err'); field.focus(); return; }
    const button = notifyForm.querySelector('button');
    button.disabled = true;
    say('Un momento…');
    try {
      const r = await fetch(APP + '/api/avvisami', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sito_web: notifyForm.elements.sito_web.value }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error((data.error && data.error.message) || 'Qualcosa non ha funzionato: riprova più tardi.');
      notifyForm.reset();
      say('Fatto! Ti abbiamo mandato un\'email: apri il link e premi «Sì, avvisatemi» (se non la trovi, guarda nello spam).', 'ok');
    } catch (err) {
      say(err instanceof TypeError ? 'Non riusciamo a raggiungere Beelancio in questo momento: riprova tra poco.' : err.message, 'err');
    } finally { button.disabled = false; }
  });
}

// Pagina «Guida»: indice e una sezione per ogni guida
const box = document.getElementById('guide');
const toc = document.getElementById('toc');
// (nella copia pubblicata le sezioni sono già scritte nella pagina: qui si costruiscono solo se mancano)
if (box && toc && !box.children.length) {
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; };
  for (const key of ORDINE_GUIDE) {
    const g = GUIDE[key];
    if (!g) continue;
    const id = 'g-' + key.replace(/_/g, '-');
    const link = el('a', '', g.titolo); link.href = '#' + id; toc.append(link);
    const sec = el('section', 'guide-sec'); sec.id = id;
    sec.append(el('h2', '', g.titolo));
    if (g.intro) sec.append(el('p', 'lead', g.intro));
    const video = el('div', 'video-soon'); video.append(icon('video', 18), el('span', '', 'Video di questa sezione: in arrivo.'));
    sec.append(video);
    for (const p of g.parti) {
      sec.append(el('h3', '', p.titolo));
      const ul = el('ul');
      for (const t of p.punti) ul.append(el('li', '', t));
      sec.append(ul);
    }
    if (g.consiglio) { const tip = el('div', 'tip'); tip.append(icon('info', 18), el('div', '', g.consiglio)); sec.append(tip); }
    box.append(sec);
  }
  // un link come guida.html#g-assistente: le sezioni nascono adesso, quindi si scorre qui
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) target.scrollIntoView();
}
