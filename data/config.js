/* Abruzzo Wild & Authentic — configurazione portale.
   ────────────────────────────────────────────────────────────────────────
   CHIAVE MAPPA (Geoapify) per la mappa-strade nella STAMPA dell'Esperienza.
   È una chiave client (finisce nel codice pubblico): va RISTRETTA al dominio
   nel pannello Geoapify (Allowed origins: https://mdicenso.github.io) così,
   anche se visibile, funziona solo dal tuo sito.

   Come ottenerla (gratis, ~2 min, niente carta di credito):
     1) vai su https://myprojects.geoapify.com e registrati
     2) crea un progetto → copia la "API key"
     3) incollala qui sotto tra gli apici e fai commit+push

   Se resta vuota, la stampa usa lo schema vettoriale (punti+linee) di riserva.
   ──────────────────────────────────────────────────────────────────────── */
window.AW = window.AW || {};
window.AW.mapKey = '1d4a9206adde4b8088cd09143242c5e6';

/* CHIAVE GOOGLE MAPS PLATFORM (Places API New + Maps JavaScript API) per i
   suggerimenti "dove mangiare / dormire" nell'Esperienza. Anche questa è una
   chiave client (pubblica): va RISTRETTA al dominio nel pannello Google Cloud
   (Limitazioni applicazioni → Siti web → https://mdicenso.github.io/*) e
   limitata alle sole due API. Le query partono SOLO a richiesta (l'utente
   clicca) per non consumare il tier gratuito. Se vuota → il blocco non appare. */
window.AW.placesKey = 'AIzaSyC-GfAK-WakmTZq1jVPDAtH0q5x5D1veZw';
