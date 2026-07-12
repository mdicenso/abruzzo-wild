/* Abruzzo Wild & Authentic - data module: INSPIRED
   Content array for inspired.html. Single source of truth,
   loaded via <script src="data/inspired.js"> before the page script.
   Multilingua {en,it,de,fr} su label/tagline/desc e sui "detail" testuali
   (i nomi propri e i tag puramente numerici restano stringhe semplici; L() le
   restituisce invariate). DE/FR generati da AI -> da far rivedere a madrelingua.
   Future: fed/refreshed by the ICH engine. */
window.AW = window.AW || {};

window.AW.moods = [
  {
    id:'wild', icon:'ti-mountain',
    label:{en:'Wild & Free', it:'Selvaggio & Libero', de:'Wild & Frei', fr:'Sauvage & Libre'},
    tagline:{en:'Mountains, wolves and ancient silence', it:'Montagne, lupi e silenzi antichi', de:'Berge, Wölfe und uralte Stille', fr:'Montagnes, loups et silence ancestral'},
    desc:{en:"For those who crave raw nature, altitude and freedom. Peaks, national parks and wildlife that will stay with you forever.",
      it:"Per chi ha sete di natura pura, quota e libertà. Vette, parchi nazionali e fauna selvatica che ti resteranno dentro per sempre.",
      de:"Für alle, die sich nach unberührter Natur, Höhe und Freiheit sehnen. Gipfel, Nationalparks und Wildtiere, die für immer in Erinnerung bleiben.",
      fr:"Pour ceux qui ont soif de nature brute, d'altitude et de liberté. Sommets, parcs nationaux et faune sauvage qui vous marqueront à jamais."},
    img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    trails:[
      { name:"Corno Grande Summit", detail:{en:"2,912m · Hard · 12 km",it:"2.912 m · Difficile · 12 km",de:"2.912 m · Schwer · 12 km",fr:"2 912 m · Difficile · 12 km"}, href:"hiking.html", img:"img/corno-grande-gran-sasso.jpg" },
      { name:"Monte Amaro",         detail:{en:"2,793m · Hard · 18 km",it:"2.793 m · Difficile · 18 km",de:"2.793 m · Schwer · 18 km",fr:"2 793 m · Difficile · 18 km"}, href:"hiking.html", img:"img/maiella-monte-amaro.jpg" },
      { name:"Campo Imperatore",    detail:{en:"Plateau · Moderate · 15km",it:"Altopiano · Medio · 15 km",de:"Hochebene · Mittel · 15 km",fr:"Plateau · Modéré · 15 km"}, href:"hiking.html", img:"img/campo-imperatore.jpg" }
    ],
    villages:[
      { name:"Rocca Calascio",          detail:"1,512m · L'Aquila", href:"villages.html", img:"img/rocca-calascio.jpg" },
      { name:"Santo Stefano di Sessanio",detail:"1,251m · L'Aquila", href:"villages.html", img:"img/santo-stefano-di-sessanio.jpg" },
      { name:"Civitella Alfedena",      detail:{en:"National Park",it:"Parco nazionale",de:"Nationalpark",fr:"Parc national"}, href:"villages.html", img:"img/civitella-alfedena.jpg" }
    ],
    foods:[
      { name:"Arrosticini",          detail:{en:"Meat & Grill",it:"Carne & griglia",de:"Fleisch & Grill",fr:"Viande & grill"},  href:"food.html", img:"img/arrosticini.jpg" },
      { name:"Pecorino di Farindola",detail:{en:"Cheese · Rare",it:"Formaggio · Raro",de:"Käse · Selten",fr:"Fromage · Rare"}, href:"food.html", img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a832?w=200&q=70" },
      { name:"Tartufo Nero",         detail:{en:"Truffle · Oct–Jan",it:"Tartufo · Ott–Gen",de:"Trüffel · Okt–Jan",fr:"Truffe · oct–janv"},href:"food.html",img:"img/tartufo-nero-majella.jpg" }
    ]
  },
  {
    id:'taste', icon:'ti-tools-kitchen-2',
    label:{en:'Taste Abruzzo', it:"Gusta l'Abruzzo", de:'Abruzzen schmecken', fr:"Goûter l'Abruzzo"},
    tagline:{en:'Eat like a shepherd, drink like a king', it:'Mangia da pastore, bevi da re', de:'Iss wie ein Hirte, trink wie ein König', fr:'Manger en berger, boire en roi'},
    desc:{en:"Food is the soul of Abruzzo. From arrosticini to truffle, saffron to Montepulciano — every meal here is a story.",
      it:"Il cibo è l'anima dell'Abruzzo. Dagli arrosticini al tartufo, dallo zafferano al Montepulciano — qui ogni pasto è una storia.",
      de:"Essen ist die Seele der Abruzzen. Von Arrosticini bis Trüffel, von Safran bis Montepulciano — jede Mahlzeit erzählt eine Geschichte.",
      fr:"La cuisine est l'âme de l'Abruzzo. Des arrosticini à la truffe, du safran au Montepulciano — ici, chaque repas est une histoire."},
    img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    trails:[
      { name:"Gole del Sagittario",  detail:{en:"Easy · 7 km · Loop",it:"Facile · 7 km · Anello",de:"Leicht · 7 km · Rundweg",fr:"Facile · 7 km · Boucle"}, href:"hiking.html", img:"img/gole-del-sagittario.jpg" },
      { name:"Lago di Scanno",       detail:{en:"Easy · 5 km · Loop",it:"Facile · 5 km · Anello",de:"Leicht · 5 km · Rundweg",fr:"Facile · 5 km · Boucle"}, href:"hiking.html", img:"img/lago-di-scanno.jpg" }
    ],
    villages:[
      { name:"Pacentro",  detail:"720m · L'Aquila", href:"villages.html", img:"img/pacentro.jpg" },
      { name:"Sulmona",   detail:{en:"Confetti capital",it:"Capitale dei confetti",de:"Konfetti-Hauptstadt",fr:"Capitale des dragées"}, href:"villages.html", img:"img/sulmona.jpg" }
    ],
    foods:[
      { name:"Arrosticini",              detail:{en:"Meat & Grill",it:"Carne & griglia",de:"Fleisch & Grill",fr:"Viande & grill"},   href:"food.html", img:"img/arrosticini.jpg" },
      { name:"Pasta alla Chitarra",      detail:{en:"Pasta",it:"Pasta",de:"Pasta",fr:"Pâtes"},          href:"food.html", img:"img/pasta-alla-chitarra.jpg" },
      { name:"Zafferano DOP",            detail:{en:"DOP Ingredient",it:"Ingrediente DOP",de:"DOP-Zutat",fr:"Ingrédient DOP"}, href:"food.html", img:"img/zafferano-aquila-dop.jpg" },
      { name:"Confetti di Sulmona",      detail:{en:"Sweet",it:"Dolce",de:"Süß",fr:"Sucré"},          href:"food.html", img:"img/confetti-di-sulmona.jpg" }
    ]
  },
  {
    id:'history', icon:'ti-building-castle',
    label:{en:'Lost in Time', it:'Perso nel Tempo', de:'Aus der Zeit gefallen', fr:'Hors du Temps'},
    tagline:{en:'Villages where centuries stand still', it:'Borghi dove i secoli si fermano', de:'Dörfer, in denen die Jahrhunderte stillstehen', fr:"Des villages où les siècles s'arrêtent"},
    desc:{en:"Medieval borghi, hermit caves, ancient castles. Abruzzo's history is written in stone and silence — almost no other tourists.",
      it:"Borghi medievali, eremi rupestri, castelli antichi. La storia dell'Abruzzo è scritta nella pietra e nel silenzio — quasi nessun altro turista.",
      de:"Mittelalterliche Dörfer, Einsiedlerhöhlen, alte Burgen. Die Geschichte der Abruzzen steht in Stein und Stille geschrieben — fast keine anderen Touristen.",
      fr:"Bourgs médiévaux, grottes d'ermites, châteaux anciens. L'histoire de l'Abruzzo est écrite dans la pierre et le silence — presque aucun autre touriste."},
    img:'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80',
    trails:[
      { name:"Eremo di San Bartolomeo", detail:{en:"Moderate · 6 km",it:"Medio · 6 km",de:"Mittel · 6 km",fr:"Modéré · 6 km"}, href:"hiking.html", img:"img/eremo-san-bartolomeo.jpg" },
      { name:"Rocca Calascio Trail",    detail:{en:"Easy · 3 km",it:"Facile · 3 km",de:"Leicht · 3 km",fr:"Facile · 3 km"},     href:"hiking.html", img:"img/rocca-calascio.jpg" }
    ],
    villages:[
      { name:"Santo Stefano di Sessanio", detail:"1,251m · Borghi Belli", href:"villages.html", img:"img/santo-stefano-di-sessanio.jpg" },
      { name:"Rocca Calascio",            detail:"1,512m · L'Aquila",      href:"villages.html", img:"img/rocca-calascio.jpg" },
      { name:"Pacentro",                  detail:"720m · Borghi Belli",    href:"villages.html", img:"img/pacentro.jpg" },
      { name:"Carunchio",                 detail:{en:"538m · Undiscovered",it:"538 m · Da scoprire",de:"538 m · Unentdeckt",fr:"538 m · À découvrir"}, href:"villages.html", img:"img/carunchio.jpg" }
    ],
    foods:[
      { name:"Confetti di Sulmona", detail:{en:"Sweet · Since 1265",it:"Dolce · Dal 1265",de:"Süß · Seit 1265",fr:"Sucré · Depuis 1265"}, href:"food.html", img:"img/confetti-di-sulmona.jpg" },
      { name:"Parrozzo",            detail:{en:"Sweet · Pescara",it:"Dolce · Pescara",de:"Süß · Pescara",fr:"Sucré · Pescara"},    href:"food.html", img:"img/parrozzo.jpg" },
      { name:"Pecorino di Farindola",detail:{en:"Cheese · 3000yr",it:"Formaggio · 3000 anni",de:"Käse · 3000 Jahre",fr:"Fromage · 3000 ans"},  href:"food.html", img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a832?w=200&q=70" }
    ]
  },
  {
    id:'roam', icon:'ti-bike',
    label:{en:'Roam Freely', it:'Vaga in Libertà', de:'Frei Umherstreifen', fr:'Vagabonder'},
    tagline:{en:'Two wheels, infinite horizons', it:'Due ruote, orizzonti infiniti', de:'Zwei Räder, unendliche Horizonte', fr:'Deux roues, horizons infinis'},
    desc:{en:"From the flat Adriatic cycleway to epic mountain climbs. Abruzzo is one of Italy's finest cycling and active touring regions.",
      it:"Dalla ciclabile adriatica pianeggiante alle salite epiche in montagna. L'Abruzzo è una delle migliori regioni italiane per il ciclismo e il turismo attivo.",
      de:"Von der flachen Adria-Radroute bis zu epischen Bergauffahrten. Die Abruzzen sind eine der besten Rad- und Aktivregionen Italiens.",
      fr:"De la véloroute adriatique plate aux ascensions de montagne épiques. L'Abruzzo est l'une des meilleures régions d'Italie pour le vélo et le tourisme actif."},
    img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    trails:[
      { name:"Campo Imperatore Loop", detail:{en:"Moderate · 15 km",it:"Medio · 15 km",de:"Mittel · 15 km",fr:"Modéré · 15 km"}, href:"hiking.html", img:"img/campo-imperatore.jpg" },
      { name:"Blockhaus Ridge",       detail:{en:"Easy · 4 km",it:"Facile · 4 km",de:"Leicht · 4 km",fr:"Facile · 4 km"},         href:"hiking.html", img:"img/blockhaus.jpg" },
      { name:"Rocca Calascio Trail",  detail:{en:"Easy · 3 km",it:"Facile · 3 km",de:"Leicht · 3 km",fr:"Facile · 3 km"},         href:"hiking.html", img:"img/rocca-calascio.jpg" }
    ],
    villages:[
      { name:"Penne",            detail:"438m · Pescara",  href:"villages.html", img:"img/penne.jpg" },
      { name:"Pennapiedimonte",  detail:"572m · Chieti",   href:"villages.html", img:"img/pennapiedimonte.jpg" }
    ],
    foods:[
      { name:"Brodetto alla Vastese", detail:{en:"Seafood · Vasto",it:"Pesce · Vasto",de:"Meeresfrüchte · Vasto",fr:"Fruits de mer · Vasto"},   href:"food.html", img:"img/brodetto-alla-vastese.jpg" },
      { name:"Olio Extravergine DOP", detail:{en:"DOP · Nov harvest",it:"DOP · Raccolta nov.",de:"DOP · Ernte Nov.",fr:"DOP · Récolte nov."}, href:"food.html", img:"img/olio-evo-dop.jpg" },
      { name:"Arrosticini",           detail:{en:"Meat & Grill",it:"Carne & griglia",de:"Fleisch & Grill",fr:"Viande & grill"},       href:"food.html", img:"img/arrosticini.jpg" }
    ]
  },
  {
    id:'slow', icon:'ti-leaf',
    label:{en:'Slow Down', it:'Rallenta', de:'Entschleunigen', fr:'Ralentir'},
    tagline:{en:'Find your rhythm in the mountains', it:'Trova il tuo ritmo tra le montagne', de:'Finde deinen Rhythmus in den Bergen', fr:'Trouvez votre rythme dans les montagnes'},
    desc:{en:"Thermal baths, agriturismo, starlit nights above 1,000m. Abruzzo is the antidote to everything too fast.",
      it:"Terme, agriturismi, notti stellate oltre i 1.000 m. L'Abruzzo è l'antidoto a tutto ciò che va troppo veloce.",
      de:"Thermalbäder, Agriturismo, Sternennächte über 1.000 m. Die Abruzzen sind das Gegenmittel gegen alles, was zu schnell ist.",
      fr:"Thermes, agritourisme, nuits étoilées au-dessus de 1 000 m. L'Abruzzo est l'antidote à tout ce qui va trop vite."},
    img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80',
    trails:[
      { name:"Lago di Scanno",      detail:{en:"Easy · 5 km · Loop",it:"Facile · 5 km · Anello",de:"Leicht · 5 km · Rundweg",fr:"Facile · 5 km · Boucle"}, href:"hiking.html", img:"img/lago-di-scanno.jpg" },
      { name:"Blockhaus Ridge",     detail:{en:"Easy · 4 km",it:"Facile · 4 km",de:"Leicht · 4 km",fr:"Facile · 4 km"},        href:"hiking.html", img:"img/blockhaus.jpg" },
      { name:"Gole del Sagittario", detail:{en:"Easy · 7 km",it:"Facile · 7 km",de:"Leicht · 7 km",fr:"Facile · 7 km"},        href:"hiking.html", img:"img/gole-del-sagittario.jpg" }
    ],
    villages:[
      { name:"Pennapiedimonte", detail:"572m · Chieti",   href:"villages.html", img:"img/pennapiedimonte.jpg" },
      { name:"Carunchio",       detail:"538m · Chieti",   href:"villages.html", img:"img/carunchio.jpg" },
      { name:"Pacentro",        detail:"720m · L'Aquila", href:"villages.html", img:"img/pacentro.jpg" }
    ],
    foods:[
      { name:"Zafferano DOP",        detail:"DOP · L'Aquila",    href:"food.html", img:"img/zafferano-aquila-dop.jpg" },
      { name:"Pecorino di Farindola",detail:{en:"Cheese · Rare",it:"Formaggio · Raro",de:"Käse · Selten",fr:"Fromage · Rare"},     href:"food.html", img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a832?w=200&q=70" },
      { name:"Agnello Cacio e Ova",  detail:{en:"Meat · Easter",it:"Carne · Pasqua",de:"Fleisch · Ostern",fr:"Viande · Pâques"},     href:"food.html", img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=70" }
    ]
  },
  {
    id:'family', icon:'ti-users',
    label:{en:'Family Abruzzo', it:'Abruzzo in Famiglia', de:'Abruzzen für Familien', fr:'Abruzzo en Famille'},
    tagline:{en:'Memories that last a lifetime', it:'Ricordi che durano una vita', de:'Erinnerungen fürs Leben', fr:'Des souvenirs pour la vie'},
    desc:{en:"Easy trails for little legs, wildlife spotting, beach days and medieval legends. Everything for all ages.",
      it:"Sentieri facili per gambe piccole, avvistamento di animali, giornate al mare e leggende medievali. Tutto per ogni età.",
      de:"Leichte Wege für kleine Beine, Tierbeobachtung, Strandtage und mittelalterliche Legenden. Alles für jedes Alter.",
      fr:"Sentiers faciles pour petites jambes, observation de la faune, journées à la plage et légendes médiévales. Tout pour tous les âges."},
    img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    trails:[
      { name:"Valle Fondillo — Bears", detail:{en:"Easy · 8 km · Loop",it:"Facile · 8 km · Anello",de:"Leicht · 8 km · Rundweg",fr:"Facile · 8 km · Boucle"},  href:"hiking.html", img:"img/valle-fondillo.jpg" },
      { name:"Gole del Sagittario",    detail:{en:"Easy · 7 km",it:"Facile · 7 km",de:"Leicht · 7 km",fr:"Facile · 7 km"},         href:"hiking.html", img:"img/gole-del-sagittario.jpg" },
      { name:"Lago di Scanno",         detail:{en:"Easy · 5 km",it:"Facile · 5 km",de:"Leicht · 5 km",fr:"Facile · 5 km"},         href:"hiking.html", img:"img/lago-di-scanno.jpg" },
      { name:"Rocca Calascio Trail",   detail:{en:"Easy · 3 km",it:"Facile · 3 km",de:"Leicht · 3 km",fr:"Facile · 3 km"},         href:"hiking.html", img:"img/rocca-calascio.jpg" }
    ],
    villages:[
      { name:"Civitella Alfedena", detail:{en:"Wolf Museum",it:"Museo del Lupo",de:"Wolfsmuseum",fr:"Musée du Loup"},      href:"villages.html", img:"img/civitella-alfedena.jpg" },
      { name:"Pacentro",           detail:{en:"Medieval legends",it:"Leggende medievali",de:"Mittelalterliche Legenden",fr:"Légendes médiévales"}, href:"villages.html", img:"img/pacentro.jpg" },
      { name:"Rocca Calascio",     detail:{en:"Castle for kids",it:"Castello per bambini",de:"Burg für Kinder",fr:"Château pour enfants"},  href:"villages.html", img:"img/rocca-calascio.jpg" }
    ],
    foods:[
      { name:"Arrosticini",       detail:{en:"Meat & Grill",it:"Carne & griglia",de:"Fleisch & Grill",fr:"Viande & grill"},       href:"food.html", img:"img/arrosticini.jpg" },
      { name:"Pasta alla Chitarra",detail:{en:"Pasta",it:"Pasta",de:"Pasta",fr:"Pâtes"},             href:"food.html", img:"img/pasta-alla-chitarra.jpg" },
      { name:"Confetti di Sulmona",detail:{en:"Sweet · Kids love",it:"Dolce · Amato dai bimbi",de:"Süß · Von Kindern geliebt",fr:"Sucré · Adoré des enfants"}, href:"food.html", img:"img/confetti-di-sulmona.jpg" },
      { name:"Parrozzo",           detail:{en:"Sweet · Chocolate",it:"Dolce · Cioccolato",de:"Süß · Schokolade",fr:"Sucré · Chocolat"}, href:"food.html", img:"img/parrozzo.jpg" }
    ]
  }
];
