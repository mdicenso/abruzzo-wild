/* Abruzzo Wild & Authentic - data module: INSPIRED
   Content arrays extracted from inspired.html (verbatim). Single source of truth,
   loaded via <script src="data/inspired.js"> before the page script.
   Future: fed/refreshed by the ICH engine. */
window.AW = window.AW || {};

window.AW.moods = [
  {
    id:'wild', icon:'ti-mountain', label:'Wild & Free',
    tagline:'Mountains, wolves and ancient silence',
    desc:"For those who crave raw nature, altitude and freedom. Peaks, national parks and wildlife that will stay with you forever.",
    img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    trails:[
      { name:"Corno Grande Summit", detail:"2,912m · Hard · 12 km",    href:"hiking.html", img:"img/corno-grande-gran-sasso.jpg" },
      { name:"Monte Amaro",         detail:"2,793m · Hard · 18 km",    href:"hiking.html", img:"img/maiella-monte-amaro.jpg" },
      { name:"Campo Imperatore",    detail:"Plateau · Moderate · 15km", href:"hiking.html", img:"img/campo-imperatore.jpg" }
    ],
    villages:[
      { name:"Rocca Calascio",          detail:"1,512m · L'Aquila", href:"villages.html", img:"img/rocca-calascio.jpg" },
      { name:"Santo Stefano di Sessanio",detail:"1,251m · L'Aquila", href:"villages.html", img:"img/santo-stefano-di-sessanio.jpg" },
      { name:"Civitella Alfedena",      detail:"National Park",      href:"villages.html", img:"img/civitella-alfedena.jpg" }
    ],
    foods:[
      { name:"Arrosticini",          detail:"Meat & Grill",  href:"food.html", img:"img/arrosticini.jpg" },
      { name:"Pecorino di Farindola",detail:"Cheese · Rare", href:"food.html", img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a832?w=200&q=70" },
      { name:"Tartufo Nero",         detail:"Truffle · Oct–Jan",href:"food.html",img:"img/tartufo-nero-majella.jpg" }
    ]
  },
  {
    id:'taste', icon:'ti-tools-kitchen-2', label:'Taste Abruzzo',
    tagline:'Eat like a shepherd, drink like a king',
    desc:"Food is the soul of Abruzzo. From arrosticini to truffle, saffron to Montepulciano — every meal here is a story.",
    img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    trails:[
      { name:"Gole del Sagittario",  detail:"Easy · 7 km · Loop",    href:"hiking.html", img:"img/gole-del-sagittario.jpg" },
      { name:"Lago di Scanno",       detail:"Easy · 5 km · Loop",    href:"hiking.html", img:"img/lago-di-scanno.jpg" }
    ],
    villages:[
      { name:"Pacentro",  detail:"720m · L'Aquila", href:"villages.html", img:"img/pacentro.jpg" },
      { name:"Sulmona",   detail:"Confetti capital", href:"villages.html", img:"img/sulmona.jpg" }
    ],
    foods:[
      { name:"Arrosticini",              detail:"Meat & Grill",   href:"food.html", img:"img/arrosticini.jpg" },
      { name:"Pasta alla Chitarra",      detail:"Pasta",          href:"food.html", img:"img/pasta-alla-chitarra.jpg" },
      { name:"Zafferano DOP",            detail:"DOP Ingredient", href:"food.html", img:"img/zafferano-aquila-dop.jpg" },
      { name:"Confetti di Sulmona",      detail:"Sweet",          href:"food.html", img:"img/confetti-di-sulmona.jpg" }
    ]
  },
  {
    id:'history', icon:'ti-building-castle', label:'Lost in Time',
    tagline:'Villages where centuries stand still',
    desc:"Medieval borghi, hermit caves, ancient castles. Abruzzo's history is written in stone and silence — almost no other tourists.",
    img:'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80',
    trails:[
      { name:"Eremo di San Bartolomeo", detail:"Moderate · 6 km", href:"hiking.html", img:"img/eremo-san-bartolomeo.jpg" },
      { name:"Rocca Calascio Trail",    detail:"Easy · 3 km",     href:"hiking.html", img:"img/rocca-calascio.jpg" }
    ],
    villages:[
      { name:"Santo Stefano di Sessanio", detail:"1,251m · Borghi Belli", href:"villages.html", img:"img/santo-stefano-di-sessanio.jpg" },
      { name:"Rocca Calascio",            detail:"1,512m · L'Aquila",      href:"villages.html", img:"img/rocca-calascio.jpg" },
      { name:"Pacentro",                  detail:"720m · Borghi Belli",    href:"villages.html", img:"img/pacentro.jpg" },
      { name:"Carunchio",                 detail:"538m · Undiscovered",    href:"villages.html", img:"img/carunchio.jpg" }
    ],
    foods:[
      { name:"Confetti di Sulmona", detail:"Sweet · Since 1265", href:"food.html", img:"img/confetti-di-sulmona.jpg" },
      { name:"Parrozzo",            detail:"Sweet · Pescara",    href:"food.html", img:"img/parrozzo.jpg" },
      { name:"Pecorino di Farindola",detail:"Cheese · 3000yr",  href:"food.html", img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a832?w=200&q=70" }
    ]
  },
  {
    id:'roam', icon:'ti-bike', label:'Roam Freely',
    tagline:'Two wheels, infinite horizons',
    desc:"From the flat Adriatic cycleway to epic mountain climbs. Abruzzo is one of Italy's finest cycling and active touring regions.",
    img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    trails:[
      { name:"Campo Imperatore Loop", detail:"Moderate · 15 km",    href:"hiking.html", img:"img/campo-imperatore.jpg" },
      { name:"Blockhaus Ridge",       detail:"Easy · 4 km",         href:"hiking.html", img:"img/blockhaus.jpg" },
      { name:"Rocca Calascio Trail",  detail:"Easy · 3 km",         href:"hiking.html", img:"img/rocca-calascio.jpg" }
    ],
    villages:[
      { name:"Penne",            detail:"438m · Pescara",  href:"villages.html", img:"img/penne.jpg" },
      { name:"Pennapiedimonte",  detail:"572m · Chieti",   href:"villages.html", img:"img/pennapiedimonte.jpg" }
    ],
    foods:[
      { name:"Brodetto alla Vastese", detail:"Seafood · Vasto",   href:"food.html", img:"img/brodetto-alla-vastese.jpg" },
      { name:"Olio Extravergine DOP", detail:"DOP · Nov harvest", href:"food.html", img:"img/olio-evo-dop.jpg" },
      { name:"Arrosticini",           detail:"Meat & Grill",       href:"food.html", img:"img/arrosticini.jpg" }
    ]
  },
  {
    id:'slow', icon:'ti-leaf', label:'Slow Down',
    tagline:'Find your rhythm in the mountains',
    desc:"Thermal baths, agriturismo, starlit nights above 1,000m. Abruzzo is the antidote to everything too fast.",
    img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80',
    trails:[
      { name:"Lago di Scanno",      detail:"Easy · 5 km · Loop", href:"hiking.html", img:"img/lago-di-scanno.jpg" },
      { name:"Blockhaus Ridge",     detail:"Easy · 4 km",        href:"hiking.html", img:"img/blockhaus.jpg" },
      { name:"Gole del Sagittario", detail:"Easy · 7 km",        href:"hiking.html", img:"img/gole-del-sagittario.jpg" }
    ],
    villages:[
      { name:"Pennapiedimonte", detail:"572m · Chieti",   href:"villages.html", img:"img/pennapiedimonte.jpg" },
      { name:"Carunchio",       detail:"538m · Chieti",   href:"villages.html", img:"img/carunchio.jpg" },
      { name:"Pacentro",        detail:"720m · L'Aquila", href:"villages.html", img:"img/pacentro.jpg" }
    ],
    foods:[
      { name:"Zafferano DOP",        detail:"DOP · L'Aquila",    href:"food.html", img:"img/zafferano-aquila-dop.jpg" },
      { name:"Pecorino di Farindola",detail:"Cheese · Rare",     href:"food.html", img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a832?w=200&q=70" },
      { name:"Agnello Cacio e Ova",  detail:"Meat · Easter",     href:"food.html", img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=70" }
    ]
  },
  {
    id:'family', icon:'ti-users', label:'Family Abruzzo',
    tagline:'Memories that last a lifetime',
    desc:"Easy trails for little legs, wildlife spotting, beach days and medieval legends. Everything for all ages.",
    img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    trails:[
      { name:"Valle Fondillo — Bears", detail:"Easy · 8 km · Loop",  href:"hiking.html", img:"img/valle-fondillo.jpg" },
      { name:"Gole del Sagittario",    detail:"Easy · 7 km",         href:"hiking.html", img:"img/gole-del-sagittario.jpg" },
      { name:"Lago di Scanno",         detail:"Easy · 5 km",         href:"hiking.html", img:"img/lago-di-scanno.jpg" },
      { name:"Rocca Calascio Trail",   detail:"Easy · 3 km",         href:"hiking.html", img:"img/rocca-calascio.jpg" }
    ],
    villages:[
      { name:"Civitella Alfedena", detail:"Wolf Museum",      href:"villages.html", img:"img/civitella-alfedena.jpg" },
      { name:"Pacentro",           detail:"Medieval legends", href:"villages.html", img:"img/pacentro.jpg" },
      { name:"Rocca Calascio",     detail:"Castle for kids",  href:"villages.html", img:"img/rocca-calascio.jpg" }
    ],
    foods:[
      { name:"Arrosticini",       detail:"Meat & Grill",       href:"food.html", img:"img/arrosticini.jpg" },
      { name:"Pasta alla Chitarra",detail:"Pasta",             href:"food.html", img:"img/pasta-alla-chitarra.jpg" },
      { name:"Confetti di Sulmona",detail:"Sweet · Kids love", href:"food.html", img:"img/confetti-di-sulmona.jpg" },
      { name:"Parrozzo",           detail:"Sweet · Chocolate", href:"food.html", img:"img/parrozzo.jpg" }
    ]
  }
];
