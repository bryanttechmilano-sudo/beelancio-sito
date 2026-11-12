// Componenti e utilità dell'interfaccia.
// DOM sicuro: i testi entrano sempre come testo (mai come HTML), quindi i dati inseriti non possono eseguire codice.

export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'value') el.value = v;
    else if (k === 'checked') el.checked = Boolean(v);
    else if (k === 'disabled') el.disabled = Boolean(v);
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k === 'color') el.style.setProperty('--att', v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  append(el, children);
  return el;
}
function append(el, children) {
  for (const c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}
export function clear(el, ...children) { el.replaceChildren(); append(el, children); return el; }

// ---- Icone (tratto semplice, disegnate qui) ----
const ICONS = {
  home: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  chart: 'M3 3v18h18M7 16v-4M12 16V7M17 16v-6',
  swap: 'M7 4 3 8l4 4M3 8h14M17 12l4 4-4 4M21 16H7',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  folder: 'M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  calendar: 'M7 3v4M17 3v4M4 10h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z',
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z',
  settings: 'M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2M16 4v4M10 10v4M16 16v4',
  plus: 'M12 5v14M5 12h14',
  x: 'M18 6 6 18M6 6l12 12',
  check: 'M20 6 9 17l-5-5',
  alert: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.5h.01',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  back: 'M15 18l-6-6 6-6',
  next: 'M9 6l6 6-6 6',
  down: 'M6 9l6 6 6-6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  more: 'M12 5h.01M12 12h.01M12 19h.01',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  lock: 'M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM8 11V7a4 4 0 0 1 8 0v4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  edit: 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4',
  trash: 'M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3',
  in: 'M17 7 7 17M17 17H7V7',
  out: 'M7 17 17 7M7 7h10v10',
  link: 'M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  video: 'M3 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 10l5-3v10l-5-3',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  call: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  download: 'M12 3v12M7 10l5 5 5-5M4 21h16',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  repeat: 'M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3',
  file: 'M6 3h8l5 5v13H6zM14 3v5h5',
  euro: 'M18 7a7 7 0 1 0 0 10M4 10h10M4 14h9',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
  eyeOff: 'M3 3l18 18M10.6 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2',
  circle: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16',
  // icone per attività e conti
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  phone: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01',
  laptop: 'M5 5h14v10H5zM2 19h20',
  briefcase: 'M3 8h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M3 13h18',
  heart: 'M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  cart: 'M3 4h2l2.4 11h10.2L20 7H6M9 20a1 1 0 1 0 0-.01M17 20a1 1 0 1 0 0-.01',
  book: 'M6 3h13v18H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 3v18',
  camera: 'M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  car: 'M5 16H3v-4l2-5h14l2 5v4h-2M9 16h6M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3 12h18',
  flame: 'M12 22a7 7 0 0 0 7-7c0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-9 0 4-4 6-4 12a7 7 0 0 0 7 8z',
  bug: 'M9 9a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0zM9 5 7 3M15 5l2-2M9 11H4M15 11h5M9 15l-4 3M15 15l4 3',
  hexagon: 'M12 2.5 20.5 7.5v9L12 21.5 3.5 16.5v-9z',
  gift: 'M4 11h16v10H4zM3 7h18v4H3zM12 7v14M12 7C10.5 4 7 3 7 5.5S10 7 12 7c1.5-3 5-4 5-1.5S14 7 12 7',
  wallet: 'M3 7a2 2 0 0 1 2-2h13v4M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2zM17 14.5h.01',
  bank: 'M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18',
  card: 'M3 6h18v12H3zM3 10h18M7 15h3',
  cash: 'M2 7h20v10H2zM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM6 10v4M18 10v4',
  palette: 'M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.3-4-7.7-9-7.7zM7.5 11.5h.01M10 7.5h.01M15 7.5h.01',
  hammer: 'M14 6l4 4M3 21l9.5-9.5M10.5 4.5 13 2l6 6-2.5 2.5zM12.5 11.5 9 8',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
  drop: 'M12 2.7s-6 6.6-6 11.3a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z',
  scissors: 'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12',
  school: 'M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  music: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  food: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zM18 15v7',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.4 5.1-6',
  truck: 'M1 4h14v12H1zM15 8h4l3 3v5h-7zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  paw: 'M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM20 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 11c-3 0-6 4-6 7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3c0-3-3-7-6-7z',
  dumbbell: 'M6 5v14M18 5v14M3 8v8M21 8v8M6 12h12',
};
// Icone che l'utente può scegliere per le attività.
export const ACTIVITY_ICONS = ['briefcase', 'code', 'laptop', 'phone', 'wrench', 'hammer', 'bolt', 'drop', 'palette', 'camera', 'music', 'scissors',
  'school', 'chat', 'cart', 'food', 'truck', 'leaf', 'paw', 'dumbbell', 'car', 'home', 'user', 'heart', 'star', 'book', 'gift', 'flame', 'bug', 'hexagon', 'euro'];
export const WALLET_ICONS = { contanti: 'cash', conto: 'bank', carta: 'card', credito: 'card', altro: 'wallet' };

export function icon(name, size = 18) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', name === 'more' ? '2.6' : '1.9'); svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('width', String(size)); svg.setAttribute('height', String(size));
  const p = document.createElementNS(ns, 'path'); p.setAttribute('d', ICONS[name] || ICONS.hexagon); svg.append(p);
  return svg;
}

// ---- Soldi (sempre centesimi interi) ----
const eurFmt = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', useGrouping: 'always' });
export const eur = (cents) => (cents === null || cents === undefined ? '—' : eurFmt.format(Number(cents) / 100));
export const eurSigned = (cents) => (cents > 0 ? '+' : '') + eur(cents);
export const centsToInput = (cents) => (cents === null || cents === undefined ? '' : (Number(cents) / 100).toFixed(2).replace('.', ','));
// "12,50" | "12.5" | "1.200,00" -> 1250 ; null se vuoto, NaN se non valido. Nessun calcolo con decimali.
export function parseEuro(s) {
  let t = String(s ?? '').trim().replace(/\s|€/g, '');
  if (!t) return null;
  if (t.includes(',')) t = t.replace(/\./g, '').replace(',', '.');
  const m = /^(\d{1,9})(?:\.(\d{1,2}))?$/.exec(t);
  if (!m) return NaN;
  return Number(m[1]) * 100 + Number((m[2] || '').padEnd(2, '0'));
}

// ---- Date (sempre nel fuso del dispositivo) ----
const pad = (n) => String(n).padStart(2, '0');
export const isoDate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const todayISO = () => isoDate(new Date());
export const parseISO = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
export const addDays = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return isoDate(d); };
export function fmtDate(iso, opts) {
  if (!iso) return '—';
  const d = iso.length === 10 ? parseISO(iso) : new Date(iso);
  return d.toLocaleDateString('it-IT', opts || { day: 'numeric', month: 'short', year: 'numeric' });
}
export const fmtDay = (iso) => fmtDate(iso, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
export const fmtTime = (iso) => new Date(iso).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
export const fmtDateTime = (iso) => (iso ? `${fmtDate(iso)}, ${fmtTime(iso)}` : '—');
// valore per <input type="datetime-local"> a partire da una data ISO
export const toLocalInput = (iso) => { const d = new Date(iso); return `${isoDate(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}`; };

// ---- Avvisi e finestre ----
export function toast(msg, kind = '') {
  const t = h('div', { class: 'toast ' + kind, role: 'status' }, msg);
  document.getElementById('toasts').append(t);
  setTimeout(() => t.remove(), kind === 'err' ? 7000 : 3500);
}
export function errorText(e) { return (e && e.message) || 'Errore imprevisto'; }

export function modal(title, body, { wide = false, onClose } = {}) {
  const box = h('div', { class: 'modal' + (wide ? ' wide' : ''), role: 'dialog', 'aria-modal': 'true', 'aria-label': title });
  const back = h('div', { class: 'modal-back' }, box);
  const previous = document.activeElement;
  const close = () => {
    if (!back.isConnected) return;
    back.remove(); document.removeEventListener('keydown', onKey);
    if (onClose) onClose();
    if (previous && previous.isConnected && previous.focus) previous.focus();
  };
  const onKey = (e) => { if (e.key === 'Escape' && back === [...document.querySelectorAll('.modal-back')].pop()) close(); };
  document.addEventListener('keydown', onKey);
  let downOnBack = false;
  back.addEventListener('mousedown', (e) => { downOnBack = e.target === back; });
  back.addEventListener('mouseup', (e) => { if (downOnBack && e.target === back) close(); });
  box.append(h('div', { class: 'row between' }, h('h2', {}, title), h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Chiudi', onclick: close }, icon('x'))));
  box.append(typeof body === 'function' ? body(close) : body);
  document.body.append(back);
  const first = box.querySelector('input:not([type=hidden]), textarea, select');
  if (first) setTimeout(() => first.focus(), 30);
  return close;
}
export function closeAllModals() { for (const m of document.querySelectorAll('.modal-back')) m.remove(); }

export function confirmDialog(title, message, { confirmLabel = 'Conferma', danger = false } = {}) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (v, close) => { if (done) return; done = true; if (close) close(); resolve(v); };
    modal(title, (close) => h('div', { class: 'stack' }, h('p', {}, message),
      h('div', { class: 'modal-foot' },
        h('button', { class: 'btn', type: 'button', onclick: () => finish(false, close) }, 'Annulla'),
        h('button', { class: 'btn ' + (danger ? 'danger' : 'primary'), type: 'button', onclick: () => finish(true, close) }, confirmLabel))),
    { onClose: () => finish(false) });
  });
}

// Pulsante che esegue un'azione una volta sola alla volta (niente doppio clic).
export function actionButton(label, fn, cls = 'btn primary') {
  const b = h('button', { class: cls, type: 'button' }, label);
  b.addEventListener('click', async () => {
    if (b.disabled) return;
    b.disabled = true;
    try { await fn(); } catch (e) { toast(errorText(e), 'err'); } finally { if (b.isConnected) b.disabled = false; }
  });
  return b;
}

let idSeq = 0;
// Collega l'etichetta al suo campo (utile per chi usa lettori di schermo e per il clic sull'etichetta).
function labelFor(control, text) {
  const target = control.matches && control.matches('input, select, textarea') ? control
    : control.classList && control.classList.contains('pw-box') ? control.querySelector('input') : null;
  if (target && !target.id) target.id = 'c' + (++idSeq);
  if (!target && control.setAttribute) control.setAttribute('aria-label', text);
  return h('label', target ? { for: target.id } : {}, text);
}
export function field(label, control, help) {
  return h('div', { class: 'field' }, label ? labelFor(control, label) : null, control, help ? h('div', { class: 'help' }, help) : null);
}
export function input(attrs = {}) { return h('input', { class: 'input', ...attrs }); }

// ---- Password ----
// Regole delle password nuove: le stesse del server (server/auth.js), che le controlla comunque.
export const PASSWORD_RULES = [
  ['Almeno 10 caratteri', (p) => p.length >= 10],
  ['Una lettera maiuscola', (p) => /\p{Lu}/u.test(p)],
  ['Una lettera minuscola', (p) => /\p{Ll}/u.test(p)],
  ['Un carattere speciale (per esempio ! ? - _ @ #)', (p) => /[^\p{L}\p{N}\s]/u.test(p)],
];
export const passwordOk = (p) => PASSWORD_RULES.every(([, ok]) => ok(p));
export const PASSWORD_HINT = 'La password non rispetta ancora tutti i requisiti indicati sotto il campo.';

// Campo password con il pulsante «mostra/nascondi» e, per le password nuove, l'elenco dei requisiti
// che si spuntano mentre si scrive.
export function passwordBox(inp, { rules = false } = {}) {
  const toggle = h('button', { type: 'button', class: 'pw-toggle' });
  const drawToggle = () => {
    const shown = inp.type === 'text';
    const label = shown ? 'Nascondi la password' : 'Mostra la password';
    toggle.setAttribute('aria-label', label); toggle.title = label; toggle.setAttribute('aria-pressed', shown ? 'true' : 'false');
    clear(toggle, icon(shown ? 'eyeOff' : 'eye', 18));
  };
  toggle.addEventListener('click', () => { inp.type = inp.type === 'password' ? 'text' : 'password'; drawToggle(); inp.focus(); });
  drawToggle();
  const box = h('div', { class: 'pw-box' }, h('div', { class: 'pw-row' }, inp, toggle));
  if (rules) {
    const list = h('ul', { class: 'pw-rules', 'aria-label': 'Requisiti della password' });
    const draw = () => clear(list, PASSWORD_RULES.map(([label, ok]) => {
      const done = ok(inp.value);
      return h('li', { class: done ? 'ok' : '' }, icon(done ? 'check' : 'circle', 15), h('span', {}, label), h('span', { class: 'sr-only' }, done ? ' (fatto)' : ' (manca)'));
    }));
    inp.addEventListener('input', draw);
    draw();
    box.append(list);
  }
  return box;
}
export function select(options, value, attrs = {}) {
  const s = h('select', { class: 'input', ...attrs });
  for (const [v, l] of options) s.append(h('option', { value: v === null ? '' : v }, l));
  if (value !== undefined && value !== null) s.value = String(value);
  return s;
}
export function seg(options, value, onChange, cls = '') {
  const wrap = h('div', { class: 'seg ' + cls, role: 'group' });
  const render = (val) => {
    wrap.dataset.value = val;
    wrap.replaceChildren(...options.map(([v, l]) => h('button', { type: 'button', class: String(v) === String(val) ? 'on' : '', 'aria-pressed': String(v) === String(val) ? 'true' : 'false',
      onclick: () => { render(v); onChange(v); } }, l)));
  };
  render(value);
  wrap.setValue = render;
  return wrap;
}
export function empty(title, sub, action) { return h('div', { class: 'empty' }, h('strong', {}, title), sub ? h('div', {}, sub) : null, action || null); }
export function alertBox(kind, ...content) { return h('div', { class: 'alert ' + kind, role: kind === 'err' ? 'alert' : null }, icon(kind === 'ok' ? 'check' : kind === 'info' ? 'info' : 'alert'), h('div', {}, ...content)); }
export function debounce(fn, ms = 250) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }
export function badge(text, kind = '') { return h('span', { class: 'badge ' + kind }, text); }
export function initialsOf(name) { return (name || '?').trim().split(/\s+/).map((x) => x[0]).join('').slice(0, 2).toUpperCase(); }

// ---- Riquadri «galleggianti» (menu e risultati di ricerca) ----
// Il riquadro viene messo direttamente nel <body>, fuori dai contenitori che tagliano ciò che esce dai bordi,
// e posizionato accanto al suo pulsante: sotto se c'è spazio, altrimenti sopra; mai fuori dalla finestra.
const FLOAT_GAP = 4;
const FLOAT_EDGE = 8;
export function placeFloating(anchor, el, { align = 'end', matchWidth = false } = {}) {
  const r = anchor.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  el.style.maxHeight = '';
  el.style.width = matchWidth ? Math.round(r.width) + 'px' : '';
  el.style.left = '0px'; el.style.top = '0px';
  const natural = el.scrollHeight;
  const below = vh - r.bottom - FLOAT_GAP - FLOAT_EDGE;
  const above = r.top - FLOAT_GAP - FLOAT_EDGE;
  const up = natural > below && above > below;
  const room = Math.max(up ? above : below, 120);
  el.style.maxHeight = room + 'px';
  const height = Math.min(natural, room);
  const w = el.offsetWidth;
  let left = align === 'end' ? r.right - w : r.left;
  left = Math.min(Math.max(left, FLOAT_EDGE), Math.max(vw - w - FLOAT_EDGE, FLOAT_EDGE));
  const top = up ? r.top - FLOAT_GAP - height : r.bottom + FLOAT_GAP;
  el.style.left = Math.round(left) + 'px';
  el.style.top = Math.round(Math.max(top, FLOAT_EDGE)) + 'px';
  el.dataset.side = up ? 'sopra' : 'sotto';
}

// Menu a tendina per le azioni di una riga (i «tre puntini»).
export function menuButton(items, label = 'Azioni') {
  const wrap = h('div', { class: 'rel' });
  const btn = h('button', { class: 'icon-btn', type: 'button', 'aria-label': label, 'aria-haspopup': 'menu', 'aria-expanded': 'false' }, icon('more'));
  let open = null;
  const buttons = () => (open ? [...open.querySelectorAll('button')] : []);
  const closeMenu = (focusBack = false) => {
    if (!open) return;
    open.remove(); open = null;
    btn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('mousedown', outside, true);
    document.removeEventListener('keydown', onKey, true);
    window.removeEventListener('scroll', onScroll, true);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('hashchange', onResize);
    if (focusBack && btn.isConnected) btn.focus();
  };
  const outside = (e) => { if (open && !open.contains(e.target) && !btn.contains(e.target)) closeMenu(); };
  // se la pagina scorre il menu si chiude: altrimenti resterebbe staccato dal suo pulsante
  const onScroll = (e) => { if (open && !open.contains(e.target)) closeMenu(); };
  const onResize = () => closeMenu();
  const onKey = (e) => {
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeMenu(true); return; }
    if (e.key === 'Tab') { closeMenu(); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      const list = buttons(); if (!list.length) return;
      const i = list.indexOf(document.activeElement);
      const next = e.key === 'Home' ? 0 : e.key === 'End' ? list.length - 1
        : e.key === 'ArrowDown' ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
      list[next].focus();
    }
  };
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); e.preventDefault();
    if (open) { closeMenu(); return; }
    open = h('div', { class: 'menu floating', role: 'menu', 'aria-label': label }, items.filter(Boolean).map((it) => h('button', { type: 'button', role: 'menuitem', class: it.danger ? 'danger' : '',
      onclick: (ev) => { ev.stopPropagation(); ev.preventDefault(); closeMenu(); it.onclick(); } }, it.icon ? icon(it.icon, 16) : null, it.label)));
    document.body.append(open);
    placeFloating(btn, open);
    btn.setAttribute('aria-expanded', 'true');
    document.addEventListener('mousedown', outside, true);
    document.addEventListener('keydown', onKey, true);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', onResize);
    // da tastiera si va subito alla prima voce; con il mouse il fuoco resta dov'è
    if (e.detail === 0) { const first = buttons()[0]; if (first) first.focus({ preventScroll: true }); }
  });
  wrap.append(btn);
  return wrap;
}

// ---- Modulo dichiarativo dentro una finestra ----
// fields: [{ name, label, type, options, required, half, help, placeholder, showIf, attrs }]
// type: text | email | tel | url | password | number | money | date | datetime | select | textarea | checkbox | color | seg | static
// options (select/seg): elenco [[valore, etichetta]] oppure funzione (valori) => elenco
// onSubmit(valori, chiudi): può lanciare un errore, che viene mostrato nella finestra.
export function formModal({ title, fields, values = {}, submitLabel = 'Salva', onSubmit, wide = false, intro = null, extra = null }) {
  return modal(title, (close) => buildForm({ fields, values, submitLabel, onSubmit, close, intro, extra }), { wide });
}

export function buildForm({ fields, values = {}, submitLabel = 'Salva', onSubmit, close = () => {}, intro = null, extra = null, cancel = true }) {
  const controls = new Map();
  const err = h('div');
  const grid = h('div', { class: 'grid2' });
  const optList = (f, vals) => (typeof f.options === 'function' ? f.options(vals) : f.options) || [];
  // l'etichetta può dipendere dagli altri campi (per esempio «Attività» / «Dall'attività»)
  const plainLabel = (f, vals) => (typeof f.label === 'function' ? f.label(vals) : f.label);
  const labelText = (f, vals) => plainLabel(f, vals) + (f.required ? ' *' : '');

  const read = () => {
    const out = {};
    for (const f of fields) {
      if (f.type === 'static') continue;
      const c = controls.get(f.name);
      if (!c) continue;
      if (c.wrap.classList.contains('hidden')) { out[f.name] = f.type === 'checkbox' ? false : null; continue; }
      const el = c.el;
      if (f.type === 'custom') out[f.name] = el.getValue();
      else if (f.type === 'checkbox') out[f.name] = el.checked;
      else if (f.type === 'seg') out[f.name] = el.dataset.value || null;
      else if (f.type === 'money') out[f.name] = parseEuro(el.value);
      else if (f.type === 'number') out[f.name] = el.value.trim() === '' ? null : Number(el.value);
      else if (f.type === 'datetime') out[f.name] = el.value ? new Date(el.value).toISOString() : null;
      else out[f.name] = el.value.trim() === '' ? null : el.value.trim();
    }
    return out;
  };
  const refresh = () => {
    const vals = read();
    for (const f of fields) {
      const c = controls.get(f.name);
      if (!c) continue;
      if (f.showIf) c.wrap.classList.toggle('hidden', !f.showIf(vals));
      if (typeof f.label === 'function' && c.lab) c.lab.textContent = labelText(f, vals);
      if (typeof f.placeholder === 'function' && 'placeholder' in c.el) c.el.placeholder = f.placeholder(vals) || '';
      if (f.type === 'select' && typeof f.options === 'function') {
        const cur = c.el.value;
        const opts = optList(f, vals);
        c.el.replaceChildren(...opts.map(([v, l]) => h('option', { value: v === null ? '' : v }, l)));
        c.el.value = opts.some(([v]) => String(v === null ? '' : v) === cur) ? cur : (opts[0] ? String(opts[0][0] === null ? '' : opts[0][0]) : '');
      }
    }
  };

  for (const f of fields) {
    const v = values[f.name];
    let el;
    // il testo di esempio può dipendere dagli altri campi (per esempio dal tipo di movimento)
    const common = { name: f.name, placeholder: typeof f.placeholder === 'function' ? f.placeholder(values) : f.placeholder, required: f.required, ...(f.attrs || {}) };
    if (f.type === 'static') { grid.append(h('div', { class: 'full' }, f.content)); continue; }
    if (f.type === 'custom') el = f.render(v);
    else if (f.type === 'select') el = select(optList(f, values), v === undefined || v === null ? '' : v, common);
    else if (f.type === 'seg') el = seg(optList(f, values), v ?? (optList(f, values)[0] || [''])[0], () => refresh(), 'block');
    else if (f.type === 'textarea') el = h('textarea', { class: 'input', rows: f.rows || 3, ...common, value: v ?? '' });
    else if (f.type === 'checkbox') el = h('input', { type: 'checkbox', name: f.name, checked: Boolean(v) });
    else if (f.type === 'money') el = h('input', { class: 'input money', inputmode: 'decimal', autocomplete: 'off', ...common, placeholder: f.placeholder || '0,00', value: centsToInput(v) });
    else if (f.type === 'datetime') el = input({ type: 'datetime-local', ...common, value: v ? toLocalInput(v) : '' });
    else if (f.type === 'number') el = input({ type: 'number', inputmode: 'numeric', ...common, value: v ?? '' });
    else el = input({ type: f.type || 'text', ...common, value: v ?? '' });
    const lab = f.type === 'checkbox' ? null : labelFor(el, labelText(f, values));
    // i campi password hanno il pulsante «mostra»; con rules: true anche l'elenco dei requisiti
    const node = f.type === 'password' ? passwordBox(el, { rules: Boolean(f.rules) }) : el;
    const wrap = f.type === 'checkbox'
      ? h('div', { class: 'field ' + (f.half ? '' : 'full') }, h('label', { class: 'check' }, el, h('span', {}, f.label)), f.help ? h('div', { class: 'help' }, f.help) : null)
      : h('div', { class: 'field ' + (f.half ? '' : 'full') }, lab, node, f.help ? h('div', { class: 'help' }, f.help) : null);
    controls.set(f.name, { el, wrap, lab });
    grid.append(wrap);
    if (f.type !== 'seg') el.addEventListener('change', refresh);
  }
  refresh();

  const submit = h('button', { class: 'btn primary', type: 'submit' }, submitLabel);
  const form = h('form', { class: 'stack', novalidate: true }, intro, grid, extra, err,
    h('div', { class: 'modal-foot' }, cancel ? h('button', { class: 'btn', type: 'button', onclick: close }, 'Annulla') : null, submit));
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submit.disabled) return;
    const vals = read();
    for (const f of fields) {
      const c = controls.get(f.name);
      if (!c || c.wrap.classList.contains('hidden')) continue;
      const empty = vals[f.name] === null || vals[f.name] === '' || vals[f.name] === undefined;
      if (f.type === 'money' && Number.isNaN(vals[f.name])) { clear(err, alertBox('err', `${plainLabel(f, vals)}: importo non valido (esempio: 12,50)`)); c.el.focus(); return; }
      if (f.required && empty) { clear(err, alertBox('err', `${plainLabel(f, vals)}: campo obbligatorio`)); if (c.el.focus) c.el.focus(); return; }
      if (f.rules && !empty && !passwordOk(vals[f.name])) { clear(err, alertBox('err', PASSWORD_HINT)); c.el.focus(); return; }
    }
    submit.disabled = true;
    clear(err);
    try { await onSubmit(vals, close); } catch (ex) { clear(err, alertBox('err', errorText(ex))); } finally { if (submit.isConnected) submit.disabled = false; }
  });
  form.values = read;
  return form;
}

// Campo di ricerca con risultati dal server. onPick(elemento) riceve la scelta.
export function searchPicker({ placeholder, search, render, onPick, value = '' }) {
  const inp = input({ placeholder, type: 'search', autocomplete: 'off', value });
  // i risultati «galleggiano» sopra la pagina: così non vengono tagliati in fondo alle finestre
  const results = h('div', { class: 'menu floating', role: 'listbox' });
  const wrap = h('div', { class: 'rel' }, inp);
  let seq = 0;
  const isOpen = () => results.isConnected;
  const place = () => { if (!isOpen()) return; if (!inp.isConnected) { close(); return; } placeFloating(inp, results, { align: 'start', matchWidth: true }); };
  const onScroll = (e) => { if (!results.contains(e.target)) place(); };
  function close() {
    if (!isOpen()) return;
    results.remove();
    window.removeEventListener('scroll', onScroll, true);
    window.removeEventListener('resize', place);
  }
  const run = debounce(async () => {
    const q = inp.value.trim();
    const my = ++seq;
    try {
      const items = await search(q);
      if (my !== seq || !inp.isConnected || document.activeElement !== inp) return;
      const btns = items.map((it) => h('button', { type: 'button', role: 'option', onclick: () => { close(); onPick(it, inp); } }, render(it)));
      results.replaceChildren(...(btns.length ? btns : [h('div', { class: 'muted small', }, 'Nessun risultato')]));
      if (!isOpen()) {
        document.body.append(results);
        window.addEventListener('scroll', onScroll, true);
        window.addEventListener('resize', place);
      }
      place();
    } catch (e) { toast(errorText(e), 'err'); }
  }, 200);
  inp.addEventListener('input', run);
  inp.addEventListener('focus', run);
  inp.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen()) { e.stopPropagation(); close(); } });
  document.addEventListener('mousedown', (e) => { if (isOpen() && !wrap.contains(e.target) && !results.contains(e.target)) close(); });
  wrap.input = inp;
  return wrap;
}

// ---- Attività: colore, icona, etichette ----
export const PALETTE = ['#f5a800', '#e2552d', '#c0352b', '#d6408f', '#8b5cf6', '#4f46e5', '#2b66c4', '#0e9aa7', '#1b7f4f', '#6b8e23', '#a0522d', '#6b6252'];
const ICON_LABELS = { briefcase: 'Valigetta', code: 'Codice', laptop: 'Computer', phone: 'Telefono', wrench: 'Chiave inglese', home: 'Casa', user: 'Persona',
  heart: 'Cuore', star: 'Stella', cart: 'Carrello', book: 'Libro', camera: 'Fotocamera', car: 'Auto', gift: 'Regalo', flame: 'Fiamma', bug: 'Formica', hexagon: 'Alveare', euro: 'Euro',
  hammer: 'Martello', bolt: 'Fulmine (elettricità)', drop: 'Goccia (idraulica)', palette: 'Tavolozza (grafica)', music: 'Musica', scissors: 'Forbici',
  school: 'Cappello da laurea (formazione)', chat: 'Fumetto (consulenza)', food: 'Posate (ristorazione)', truck: 'Furgone (trasporti)', leaf: 'Foglia (giardinaggio)',
  paw: 'Zampa (animali)', dumbbell: 'Manubrio (sport)' };

export function colorPicker(value = PALETTE[0]) {
  let cur = value;
  const custom = h('input', { type: 'color', class: 'swatch custom', value: cur, 'aria-label': 'Altro colore', title: 'Altro colore' });
  const wrap = h('div', { class: 'swatches', role: 'group' });
  const draw = () => {
    wrap.replaceChildren(...PALETTE.map((c) => h('button', { type: 'button', class: 'swatch' + (c === cur ? ' on' : ''), color: c, 'aria-label': 'Colore ' + c, 'aria-pressed': c === cur ? 'true' : 'false',
      onclick: () => { cur = c; custom.value = c; draw(); } })), custom);
  };
  custom.addEventListener('input', () => { cur = custom.value.toLowerCase(); draw(); });
  draw();
  wrap.getValue = () => cur;
  return wrap;
}
export function iconPicker(value = 'briefcase') {
  let cur = value;
  const wrap = h('div', { class: 'icon-grid', role: 'group' });
  const draw = () => wrap.replaceChildren(...ACTIVITY_ICONS.map((n) => h('button', { type: 'button', class: 'icon-btn' + (n === cur ? ' on' : ''), 'aria-label': ICON_LABELS[n] || n, title: ICON_LABELS[n] || n,
    'aria-pressed': n === cur ? 'true' : 'false', onclick: () => { cur = n; draw(); } }, icon(n, 20))));
  draw();
  wrap.getValue = () => cur;
  return wrap;
}
// Quadratino colorato con l'icona dell'attività.
export function attIcon(a, size = 18) { return h('span', { class: 'att-icon', color: a ? a.color : null }, icon(a ? a.icon : 'hexagon', size)); }
// Pallino colorato + nome dell'attività.
export function attName(a) { return a ? h('span', { class: 'row', color: a.color }, h('span', { class: 'dot' }), a.name) : h('span', { class: 'muted' }, '—'); }

export const categoryLabel = (c) => (c ? c.name : 'Senza categoria');

// ---- Tema ----
export function getTheme() { return document.documentElement.dataset.theme || 'auto'; }
export function setTheme(t) {
  if (t === 'chiaro' || t === 'scuro') document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme;
  try { if (t === 'auto') localStorage.removeItem('bee-tema'); else localStorage.setItem('bee-tema', t); } catch { /* ignora */ }
}
// Scelta del tema con anteprima: tre riquadri (scuro, chiaro, segui il sistema). Si cambia solo da qui,
// non da pulsanti che si possono toccare per sbaglio. La scelta resta salvata su questo dispositivo.
const THEMES = [
  ['scuro', 'Tema scuro', 'Sfondo scuro, riposante di sera.'],
  ['chiaro', 'Tema chiaro', 'Sfondo chiaro, ideale di giorno.'],
  ['auto', 'Segui il sistema', 'Si adatta a Windows o al telefono.'],
];
export function themeChooser() {
  const wrap = h('div', { class: 'theme-grid', role: 'radiogroup', 'aria-label': 'Tema' });
  const preview = (t) => h('span', { class: 'theme-preview ' + t, 'aria-hidden': 'true' },
    h('span', { class: 'tp-side' }), h('span', { class: 'tp-main' }, h('span', { class: 'tp-bar' }), h('span', { class: 'tp-bar short' }), h('span', { class: 'tp-dot' })));
  const draw = () => {
    const cur = getTheme();
    wrap.replaceChildren(...THEMES.map(([id, label, sub]) => h('button', {
      type: 'button', role: 'radio', class: 'theme-opt' + (id === cur ? ' on' : ''), 'aria-checked': id === cur ? 'true' : 'false',
      onclick: () => { if (getTheme() !== id) { setTheme(id); draw(); toast(label + ' attivato', 'ok'); } },
    }, preview(id), h('span', { class: 'theme-label' }, id === cur ? icon('check', 16) : null, label), h('span', { class: 'small muted' }, sub))));
  };
  draw();
  return wrap;
}
export function isDark() {
  const t = getTheme();
  return t === 'scuro' || (t === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
}
