# Abruzzo Wild & Authentic

Portale turistico **statico** (HTML/CSS/JS) dedicato all'Abruzzo — natura selvaggia, borghi
medievali, cucina autentica, terme. Nessun backend: tutto gira lato client.

- **Sito live:** <https://mdicenso.github.io/abruzzo-wild/>
- **Hosting:** GitHub Pages (branch `main`, root) — repo `mdicenso/abruzzo-wild`
- **Lingue:** 4 — Inglese (default), Italiano, Tedesco, Francese

---

## Come si lavora

Metodo identico agli altri progetti git: si modifica in locale → **commit** → **push**, e
**GitHub Pages si aggiorna da solo** in 1–2 minuti. Niente build, niente server.

```
modifica → git commit → git push → (attendi ~1-2 min) → live su Pages
```

> Per testare in locale basta **aprire il file .html con doppio clic** (funziona su `file://`
> perché i dati sono caricati via `<script src>`, non via `fetch`). Servono però internet per
> font/icone/mappe (caricati da CDN pubblici).

---

## Struttura del progetto

```
*.html              12 pagine (vedi sotto)
i18n.js             motore multilingua CONDIVISO (dizionario 4 lingue + setLang/T/L)
shared.css          design system condiviso (variabili, componenti)
favicon.svg         icona del sito
sitemap.xml         mappa per i motori di ricerca
robots.txt          istruzioni per i crawler
data/*.js           DATA LAYER — i contenuti estratti dalle pagine (vedi sotto)
img/                foto locali (Wikimedia Commons, licenze CC — vedi crediti.html)
```

### Le pagine
`index` (home) · `quiz` · `inspired` (Get Inspired) · `experience` (Experience Builder) ·
`hiking` · `food` · `villages` · `wellness` · `attractions` · `events` · `transport` ·
`plan` · `crediti` (attribuzione foto).

---

## Data layer (`data/*.js`)

I contenuti editoriali **non** sono più inline nelle pagine: sono estratti in moduli
`data/<pagina>.js` che popolano un namespace globale `window.AW`:

```js
// esempio: data/villages.js
window.AW = window.AW || {};
window.AW.villages = [ { id:'ss', name:'Santo Stefano di Sessanio', ... }, ... ];
```

La pagina carica il modulo **prima** del proprio script e lo consuma:

```html
<script src="i18n.js"></script>
<script src="data/villages.js"></script>
<script> const villages = window.AW.villages; /* render... */ </script>
```

Moduli attuali: `villages, hiking, food, wellness, events, transport, plan, inspired,
attractions, quiz, experiences`.

**Perché:** disaccoppiare i dati dalla presentazione. È il ponte verso **ICH** (Content
Intelligence Hub): a regime sarà ICH a rigenerare questi file con contenuti freschi.

---

## Multilingua (i18n)

- `i18n.js` contiene un unico dizionario `T18` (4 lingue) + le funzioni:
  - `setLang('it')` — cambia lingua, traduce tutti gli elementi con `data-i18n`, salva in
    `localStorage['aw_lang']`, emette l'evento `aw:langchange`.
  - `T('chiave')` — stringa statica tradotta.
  - `L({en,it,de,fr})` — sceglie la lingua da un valore multilingua (per i dati dinamici).
- Nel markup: `<span data-i18n="chiave">testo</span>` e `data-i18n-placeholder="..."`.
- I dati dinamici sono oggetti `{en,it,de,fr}` renderizzati con `L(...)`; al `aw:langchange`
  la pagina ri-renderizza le schede.
- Le **chiavi specifiche di una pagina** si aggiungono nello script della pagina con
  `Object.assign(T18.en, {...})` (per non toccare `i18n.js` e non creare conflitti).
- **Eccezione:** `index.html` ha ancora un suo dizionario i18n **inline** (non usa `i18n.js`).

> Le traduzioni **DE/FR** sono generate con l'AI: **da far rivedere a un madrelingua**.

---

## Experience Engine (`experience.html`)

Un "costruttore di viaggi": l'utente sceglie **mood + durata + stagione** e un **matcher
lato client** propone l'**Esperienza** più adatta dal catalogo `data/experiences.js`, con
itinerario giorno-per-giorno (tappe che linkano alle pagine reali + foto).

**Architettura ibrida** (in evoluzione):
1. **Oggi:** catalogo pre-costruito (`data/experiences.js`) servito staticamente + matcher JS.
2. **Domani (fase 2):** ICH/Claude come "autore" rigenera il catalogo, e un endpoint protetto
   abilita il bottone **"Refine with AI"** (oggi è solo un teaser disabilitato).

Schema di un'Esperienza:
```js
{ id, moods:[...], days:N, months:[1..12],
  title/theme/area/intro:{en,it,de,fr}, hero:'img/..',
  plan:[ { day, items:[ {slot,icon,name,href,img,note:{en,it,de,fr}} ] } ] }
```

**Mappa del percorso.** L'Esperienza mostra la rotta su mappa (Leaflet a schermo, immagine
statica **Geoapify** in stampa), colorata per giorno con tappe numerate + link a Google Maps.
Il tracciato segue le **strade reali** via **Geoapify Routing API**: la mappa disegna subito
le linee dritte (istantaneo, resiliente) e — appena la rotta arriva — le sostituisce con le
strade. Le rotte sono in cache per firma di waypoint (un ri-render o un cambio lingua non
richiama l'API) e, per la stampa, semplificate (Douglas-Peucker) per stare nella lunghezza
dell'URL. Senza `window.AW.mapKey` (in `data/config.js`) o offline, restano le linee dritte /
lo schema SVG di riserva. La chiave è client (pubblica) e va **ristretta al dominio** su Geoapify.

**Dove mangiare & dormire (Google Places).** Ogni Esperienza mostra, **a richiesta** (un click,
per non consumare il tier gratuito), i posti dove mangiare e dormire vicino alla **base di ogni
giorno** (l'ultima tappa geografica), ordinati per popolarità, ognuno con foto, rating e link
**"Apri in Google Maps"** (nessun booking/affiliazione). Usa la **Places API (New)** via Maps
JavaScript API, caricata in modo pigro solo al primo click; risultati **in cache** per
id-Esperienza. Chiave client `window.AW.placesKey` (in `data/config.js`), da **restringere al
dominio** + alle sole due API (Places New + Maps JS) nel pannello Google Cloud, con billing
attivo. Se la chiave è vuota, il blocco non appare. Robusto ai ri-render durante il caricamento
async (scrive nel `gp-body` corrente solo se il blocco mostra ancora quella Esperienza).

---

## Aggiornare i contenuti

Approccio **editoriale assistito**: si indica cosa cambiare, si modificano gli array in
`data/*.js` (o i testi), commit + push. Percorso evolutivo previsto: editoriale → dati in
JS (fatto) → **ICH alimenta i `data/*.js`**.

Da tenere fresco: eventi/date, testi luoghi, info pratiche (trasporti), traduzioni.

---

## Verifica (senza browser)

Le pagine si possono testare "headless" con **jsdom**: si caricano `i18n.js` + il modulo
dati + gli script inline in un unico scope, si stubano le API mancanti (Leaflet,
IntersectionObserver) e si asserisce render + cambio lingua. Gli harness usati stanno nella
cartella scratchpad di lavoro (non nel repo).

---

## Note

- **SEO/social:** ogni pagina ha meta Open Graph + Twitter card + canonical + favicon;
  presenti `sitemap.xml` e `robots.txt`.
- **Foto:** locali in `img/`, da Wikimedia Commons (licenze CC) — attribuzioni in
  `crediti.html`. Alcune immagini "mood/concept" (quiz/inspired) sono ancora stock generico.
- **Non pubblicato** (in `.gitignore`): materiali di lavoro e file con dati riservati.
