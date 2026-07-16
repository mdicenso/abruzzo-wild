/* Abruzzo Wild & Authentic - data module: QUIZ
   Content arrays extracted from quiz.html (verbatim). Single source of truth,
   loaded via <script src="data/quiz.js"> before the page script.
   Future: fed/refreshed by the ICH engine. */
window.AW = window.AW || {};

window.AW.questions = [
  {
    text: {en:"Mountains or sea?", it:"Montagna o mare?", de:"Berge oder Meer?", fr:"Montagne ou mer ?"},
    a: { icon:"🏔️", label:{en:"Gran Sasso Peaks", it:"Vette del Gran Sasso", de:"Gran-Sasso-Gipfel", fr:"Sommets du Gran Sasso"},   desc:{en:"Wild summits above 2,900m", it:"Vette selvagge oltre i 2.900 m", de:"Wilde Gipfel über 2.900 m", fr:"Sommets sauvages au-delà de 2 900 m"},           img:"img/corno-grande-gran-sasso.jpg", scores:{adventure:2,nature:1} },
    b: { icon:"🌊", label:{en:"Adriatic Coast", it:"Costa Adriatica", de:"Adriaküste", fr:"Côte Adriatique"},       desc:{en:"Golden beaches & trabocchi", it:"Spiagge dorate e trabocchi", de:"Goldene Strände & Trabocchi", fr:"Plages dorées & trabocchi"},          img:"img/costa-dei-trabocchi.jpg", scores:{family:2,food:1} }
  },
  {
    text: {en:"Wild adventure or slow escape?", it:"Avventura selvaggia o fuga lenta?", de:"Wildes Abenteuer oder entspannte Auszeit?", fr:"Aventure sauvage ou évasion tranquille ?"},
    a: { icon:"🐺", label:{en:"National Park Trails", it:"Sentieri del Parco Nazionale", de:"Nationalpark-Wege", fr:"Sentiers du Parc National"}, desc:{en:"Bears, wolves & ancient beech forests", it:"Orsi, lupi e antiche faggete", de:"Bären, Wölfe & uralte Buchenwälder", fr:"Ours, loups & antiques hêtraies"}, img:"img/valle-fondillo.jpg", scores:{adventure:2,nature:1} },
    b: { icon:"🌿", label:{en:"Agriturismo Retreat", it:"Rifugio in agriturismo", de:"Agriturismo-Rückzug", fr:"Retraite en agritourisme"},  desc:{en:"Farm stays, silence, home cooking", it:"Soggiorni in fattoria, silenzio, cucina casalinga", de:"Bauernhof, Stille, Hausmannskost", fr:"Séjours à la ferme, silence, cuisine maison"},   img:"img/wellness-montano.jpg", scores:{wellness:2,food:1} }
  },
  {
    text: {en:"Ancient history or living nature?", it:"Storia antica o natura viva?", de:"Alte Geschichte oder lebendige Natur?", fr:"Histoire ancienne ou nature vivante ?"},
    a: { icon:"🏰", label:{en:"Medieval Castles", it:"Castelli medievali", de:"Mittelalterliche Burgen", fr:"Châteaux médiévaux"},     desc:{en:"Rocca Calascio, Santo Stefano", it:"Rocca Calascio, Santo Stefano", de:"Rocca Calascio, Santo Stefano", fr:"Rocca Calascio, Santo Stefano"},       img:"img/rocca-calascio.jpg", scores:{culture:2,adventure:1} },
    b: { icon:"🌲", label:{en:"Wild Forests & Peaks", it:"Foreste e vette selvagge", de:"Wilde Wälder & Gipfel", fr:"Forêts et sommets sauvages"}, desc:{en:"Beech forests, gorges, glacial lakes", it:"Faggete, gole, laghi glaciali", de:"Buchenwälder, Schluchten, Gletscherseen", fr:"Hêtraies, gorges, lacs glaciaires"}, img:"img/monte-marsicano.jpg", scores:{nature:2,adventure:1} }
  },
  {
    text: {en:"Local cuisine or outdoor sport?", it:"Cucina locale o sport all'aria aperta?", de:"Lokale Küche oder Outdoor-Sport?", fr:"Cuisine locale ou sport en plein air ?"},
    a: { icon:"🍢", label:{en:"Arrosticini & Wine", it:"Arrosticini e vino", de:"Arrosticini & Wein", fr:"Arrosticini & vin"},   desc:{en:"Eat with shepherds, drink Montepulciano", it:"Mangia con i pastori, bevi Montepulciano", de:"Iss mit den Hirten, trink Montepulciano", fr:"Mangez avec les bergers, buvez du Montepulciano"}, img:"img/arrosticini.jpg", scores:{food:2,culture:1} },
    b: { icon:"🥾", label:{en:"Hike to the Summit", it:"Sali in vetta", de:"Aufstieg zum Gipfel", fr:"Randonnée jusqu'au sommet"},   desc:{en:"Corno Grande, 2,912m", it:"Corno Grande, 2.912 m", de:"Corno Grande, 2.912 m", fr:"Corno Grande, 2 912 m"},                img:"img/corno-grande-gran-sasso.jpg", scores:{adventure:2,nature:1} }
  },
  {
    text: {en:"Discover alone or with family?", it:"Scopri da solo o in famiglia?", de:"Allein oder mit der Familie entdecken?", fr:"Découvrir seul ou en famille ?"},
    a: { icon:"🎒", label:{en:"Solo Explorer", it:"Esploratore solitario", de:"Solo-Entdecker", fr:"Explorateur solo"},         desc:{en:"My own pace, my own path", it:"Il mio ritmo, la mia strada", de:"Mein Tempo, mein Weg", fr:"Mon rythme, mon chemin"},            img:"img/campo-imperatore.jpg", scores:{adventure:2,culture:1} },
    b: { icon:"👨‍👩‍👧", label:{en:"Family Adventure", it:"Avventura in famiglia", de:"Familienabenteuer", fr:"Aventure en famille"},     desc:{en:"Shared memories that last forever", it:"Ricordi condivisi che durano per sempre", de:"Gemeinsame Erinnerungen für immer", fr:"Des souvenirs partagés pour toujours"},  img:"img/lago-di-scanno.jpg", scores:{family:2,wellness:1} }
  }
];
