/* Abruzzo Wild & Authentic - data module: EXPERIENCES (Experience Engine)
   Catalogo di "Esperienze" curate = viaggi giorno-per-giorno con tappe che
   puntano ai dati reali del portale (borghi/sentieri/cibo/terme...).
   FASE 1 (ibrido): questo catalogo è servito staticamente; un matcher client-side
   in experience.html sceglie l'Esperienza più vicina a mood+durata+stagione scelti.
   FASE 2 (futura): ICH/Claude RIGENERA questo file (l'"autore AI") e/o un endpoint
   protetto raffina un'Esperienza al volo ("Refine with AI").
   Schema:
     { id, moods:[...ids come i mood di inspired], days:N, months:[1..12],
       title/theme/area/intro:{en,it,de,fr}, hero:'img/..',
       plan:[ { day, items:[ { slot:'morning|lunch|afternoon|evening',
                               icon, name, href, img, note:{en,it,de,fr} } ] } ] }
   DE/FR generati da AI -> da far rivedere a madrelingua. */
window.AW = window.AW || {};

window.AW.experiences = [
  {
    id:'slow-sagittario', moods:['slow','history'], days:3, months:[4,5,6,9,10],
    hero:'img/gole-del-sagittario.jpg',
    title:{en:'Slow Days in the Sagittario Valley', it:'Giorni lenti nella Valle del Sagittario', de:'Langsame Tage im Sagittario-Tal', fr:'Jours paisibles dans la vallée du Sagittario'},
    theme:{en:'Gorges, a heart-shaped lake and thermal calm', it:'Gole, un lago a forma di cuore e quiete termale', de:'Schluchten, ein herzförmiger See und Thermenruhe', fr:'Gorges, un lac en forme de cœur et calme thermal'},
    area:{en:"Sagittario Valley & Abruzzo National Park", it:"Valle del Sagittario e Parco Nazionale d'Abruzzo", de:"Sagittario-Tal & Nationalpark Abruzzen", fr:"Vallée du Sagittario & Parc National des Abruzzes"},
    intro:{en:"Three unhurried days where nature sets the pace: canyon walks, a medieval village above a glacial lake, wolves and bears in the park, and evenings in Roman-era thermal waters.",
      it:"Tre giorni senza fretta in cui è la natura a dettare il ritmo: passeggiate nel canyon, un borgo medievale sopra un lago glaciale, lupi e orsi nel parco e serate nelle acque termali di epoca romana.",
      de:"Drei entspannte Tage, in denen die Natur das Tempo vorgibt: Wanderungen durch die Schlucht, ein mittelalterliches Dorf über einem Gletschersee, Wölfe und Bären im Park und Abende in römischem Thermalwasser.",
      fr:"Trois jours sans hâte où la nature donne le rythme : balades dans le canyon, un village médiéval au-dessus d'un lac glaciaire, loups et ours dans le parc, et soirées dans des eaux thermales d'époque romaine."},
    plan:[
      { day:1, items:[
        { slot:'morning', icon:'ti-walk', name:'Gole del Sagittario', href:'hiking.html', img:'img/gole-del-sagittario.jpg',
          note:{en:"Walk the WWF reserve gorge between sheer limestone walls and the turquoise river.", it:"Cammina nella riserva WWF tra le pareti calcaree a strapiombo e il fiume turchese.", de:"Wandere durch das WWF-Schluchtreservat zwischen steilen Kalkwänden und dem türkisen Fluss.", fr:"Parcourez la gorge de la réserve WWF entre parois calcaires abruptes et rivière turquoise."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Scanno & Lago di Scanno', href:'attractions.html', img:'img/lago-di-scanno.jpg',
          note:{en:"The heart-shaped lake from the SS479 viewpoint, then the maze of Scanno's medieval alleys.", it:"Il lago a forma di cuore dal belvedere sulla SS479, poi il dedalo di vicoli medievali di Scanno.", de:"Der herzförmige See vom Aussichtspunkt an der SS479, dann das Gassenlabyrinth von Scanno.", fr:"Le lac en forme de cœur depuis le belvédère de la SS479, puis le dédale des ruelles médiévales de Scanno."} },
        { slot:'evening', icon:'ti-spa', name:'Terme di Raiano', href:'wellness.html', img:'img/terme-di-raiano.jpg',
          note:{en:"Unwind in sulphur springs at the mouth of the gorge as the valley turns gold.", it:"Rilassati nelle sorgenti sulfuree all'imbocco della gola mentre la valle si tinge d'oro.", de:"Entspanne in Schwefelquellen am Eingang der Schlucht, wenn das Tal golden leuchtet.", fr:"Détendez-vous dans les sources sulfureuses à l'entrée de la gorge tandis que la vallée se dore."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-paw', name:'Valle Fondillo', href:'hiking.html', img:'img/valle-fondillo.jpg',
          note:{en:"A flat beech-forest trail in bear country — dawn is best for wildlife.", it:"Un sentiero pianeggiante nella faggeta in terra d'orsi — l'alba è il momento migliore per la fauna.", de:"Ein ebener Buchenwaldpfad im Bärenland — die Morgendämmerung ist am besten für Wildtiere.", fr:"Un sentier plat en hêtraie au pays des ours — l'aube est idéale pour la faune."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Civitella Alfedena', href:'villages.html', img:'img/civitella-alfedena.jpg',
          note:{en:"Wolf Museum and its live enclosure, then Lake Barrea's panoramic shore.", it:"Museo del Lupo con il recinto faunistico, poi la riva panoramica del Lago di Barrea.", de:"Wolfsmuseum mit Gehege, dann das Panoramaufer des Barrea-Sees.", fr:"Musée du Loup et son enclos, puis la rive panoramique du lac de Barrea."} },
        { slot:'evening', icon:'ti-tools-kitchen-2', name:'Arrosticini', href:'food.html', img:'img/arrosticini.jpg',
          note:{en:"Dinner shepherd-style: skewers off the brace, pecorino and a Montepulciano.", it:"Cena da pastore: arrosticini alla brace, pecorino e un Montepulciano.", de:"Abendessen wie ein Hirte: Spieße vom Grill, Pecorino und ein Montepulciano.", fr:"Dîner façon berger : brochettes au grill, pecorino et un Montepulciano."} }
      ]},
      { day:3, items:[
        { slot:'morning', icon:'ti-building-castle', name:'Pacentro', href:'villages.html', img:'img/pacentro.jpg',
          note:{en:"The three Caldora towers and a perfectly intact medieval core below the Majella.", it:"Le tre torri Caldora e un centro medievale perfettamente intatto ai piedi della Majella.", de:"Die drei Caldora-Türme und ein perfekt erhaltener mittelalterlicher Kern unterhalb der Majella.", fr:"Les trois tours Caldora et un cœur médiéval parfaitement intact au pied de la Majella."} },
        { slot:'lunch', icon:'ti-gift', name:'Sulmona', href:'food.html', img:'img/confetti-di-sulmona.jpg',
          note:{en:"Confetti (sugared almonds) since 1265 and Ovid's elegant old town.", it:"I confetti dal 1265 e l'elegante centro storico di Ovidio.", de:"Confetti (Zuckermandeln) seit 1265 und Ovids elegante Altstadt.", fr:"Les dragées depuis 1265 et l'élégante vieille ville d'Ovide."} },
        { slot:'evening', icon:'ti-sunset-2', name:'Rocca Calascio', href:'villages.html', img:'img/rocca-calascio.jpg',
          note:{en:"End at the highest castle in the Apennines for a 360° golden-hour panorama.", it:"Finale al castello più alto dell'Appennino per un panorama a 360° all'ora dorata.", de:"Ausklang an der höchsten Burg des Apennins mit 360°-Panorama zur goldenen Stunde.", fr:"Final au château le plus haut des Apennins pour un panorama à 360° à l'heure dorée."} }
      ]}
    ]
  },

  {
    id:'wild-gransasso', moods:['wild','roam'], days:2, months:[6,7,8,9],
    hero:'img/campo-imperatore.jpg',
    title:{en:'Peaks & Wilderness on the Gran Sasso', it:'Vette e natura selvaggia sul Gran Sasso', de:'Gipfel & Wildnis am Gran Sasso', fr:'Sommets et nature sauvage sur le Gran Sasso'},
    theme:{en:"Italy's 'Little Tibet' and its highest Apennine summit", it:"Il 'Piccolo Tibet' d'Italia e la vetta più alta dell'Appennino", de:"Italiens 'Klein-Tibet' und der höchste Apennin-Gipfel", fr:"Le « petit Tibet » d'Italie et le plus haut sommet des Apennins"},
    area:{en:'Gran Sasso & Campo Imperatore', it:'Gran Sasso e Campo Imperatore', de:'Gran Sasso & Campo Imperatore', fr:'Gran Sasso & Campo Imperatore'},
    intro:{en:"Two big-mountain days: acclimatise on the vast Campo Imperatore plateau among wild horses and chamois, sleep high, then take on Corno Grande — the roof of the Apennines at 2,912m.",
      it:"Due giorni di alta montagna: acclimatati sull'immenso altopiano di Campo Imperatore tra cavalli bradi e camosci, dormi in quota e poi affronta il Corno Grande — il tetto dell'Appennino a 2.912 m.",
      de:"Zwei Hochgebirgstage: Akklimatisiere auf der weiten Hochebene Campo Imperatore zwischen Wildpferden und Gämsen, übernachte hoch oben und bezwinge dann den Corno Grande — das Dach des Apennins auf 2.912 m.",
      fr:"Deux jours de haute montagne : acclimatez-vous sur le vaste plateau de Campo Imperatore parmi chevaux sauvages et chamois, dormez en altitude, puis attaquez le Corno Grande — le toit des Apennins à 2 912 m."},
    plan:[
      { day:1, items:[
        { slot:'morning', icon:'ti-mountain', name:'Campo Imperatore', href:'hiking.html', img:'img/campo-imperatore.jpg',
          note:{en:"Drive up to 2,130m and walk the plateau — endless grassland under the peaks.", it:"Sali in auto a 2.130 m e cammina sull'altopiano — praterie sconfinate sotto le vette.", de:"Fahre auf 2.130 m und wandere über die Hochebene — endloses Grasland unter den Gipfeln.", fr:"Montez à 2 130 m et parcourez le plateau — prairies infinies sous les sommets."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Rocca Calascio', href:'villages.html', img:'img/rocca-calascio.jpg',
          note:{en:"The Apennines' highest castle, film set of Ladyhawke — visible for 50km.", it:"Il castello più alto dell'Appennino, set di Ladyhawke — visibile a 50 km.", de:"Die höchste Burg des Apennins, Drehort von Ladyhawke — 50 km weit sichtbar.", fr:"Le château le plus haut des Apennins, décor de Ladyhawke — visible à 50 km."} },
        { slot:'evening', icon:'ti-building-castle', name:'Santo Stefano di Sessanio', href:'villages.html', img:'img/santo-stefano-di-sessanio.jpg',
          note:{en:"Sleep in an albergo diffuso in one of Italy's best-preserved stone villages.", it:"Dormi in un albergo diffuso in uno dei borghi in pietra meglio conservati d'Italia.", de:"Übernachte in einem Albergo diffuso in einem der besterhaltenen Steindörfer Italiens.", fr:"Dormez dans un albergo diffuso dans l'un des villages de pierre les mieux préservés d'Italie."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-mountain', name:'Corno Grande', href:'hiking.html', img:'img/corno-grande-gran-sasso.jpg',
          note:{en:"Early start for the summit (2,912m) — a serious 6–8h day, the classic normal route.", it:"Partenza all'alba per la vetta (2.912 m) — una seria giornata di 6–8h, la classica via normale.", de:"Früher Aufbruch zum Gipfel (2.912 m) — ein ernster 6–8-Std.-Tag, die klassische Normalroute.", fr:"Départ matinal pour le sommet (2 912 m) — une sérieuse journée de 6–8h, la voie normale classique."} },
        { slot:'evening', icon:'ti-tools-kitchen-2', name:"L'Aquila & arrosticini", href:'food.html', img:'img/arrosticini.jpg',
          note:{en:"Celebrate in the reborn capital: 99-spout fountain, saffron dishes and skewers.", it:"Si festeggia nel capoluogo rinato: fontana delle 99 cannelle, piatti allo zafferano e arrosticini.", de:"Feiern in der wiedergeborenen Hauptstadt: Brunnen der 99 Ausläufe, Safrangerichte und Spieße.", fr:"On fête ça dans la capitale renaissante : fontaine aux 99 becs, plats au safran et brochettes."} }
      ]}
    ]
  },

  {
    id:'taste-villages', moods:['taste','history'], days:5, months:[4,5,6,9,10],
    hero:'img/arrosticini.jpg',
    title:{en:'Taste & Villages — Five Days of Abruzzo', it:'Sapori e Borghi — Cinque giorni d\'Abruzzo', de:'Genuss & Dörfer — Fünf Tage Abruzzen', fr:'Saveurs & Villages — Cinq jours d\'Abruzzo'},
    theme:{en:'A slow food-and-heritage loop, coast to mountains', it:'Un anello lento tra cibo e patrimonio, dalla costa ai monti', de:'Eine langsame Genuss- und Kulturrunde, von der Küste in die Berge', fr:'Une boucle lente entre gastronomie et patrimoine, de la côte aux montagnes'},
    area:{en:'From the Trabocchi Coast to the L\'Aquila highlands', it:'Dalla Costa dei Trabocchi agli altopiani aquilani', de:'Von der Trabocchi-Küste zum Hochland von L\'Aquila', fr:'De la côte des Trabocchi aux hauts plateaux de L\'Aquila'},
    intro:{en:"Five days chasing flavour and history: seafood on stilt-fishing platforms, saffron and truffle uplands, confetti towns and medieval borghi where the recipes never changed.",
      it:"Cinque giorni a caccia di sapore e storia: pesce sui trabocchi, altopiani di zafferano e tartufo, città dei confetti e borghi medievali dove le ricette non sono mai cambiate.",
      de:"Fünf Tage auf der Spur von Geschmack und Geschichte: Fisch auf Trabocchi, Safran- und Trüffelhochebenen, Confetti-Städte und mittelalterliche Dörfer, in denen sich die Rezepte nie änderten.",
      fr:"Cinq jours à la poursuite du goût et de l'histoire : fruits de mer sur les trabocchi, hauts plateaux de safran et de truffe, villes des dragées et bourgs médiévaux où les recettes n'ont jamais changé."},
    plan:[
      { day:1, items:[
        { slot:'morning', icon:'ti-fish', name:'Costa dei Trabocchi', href:'attractions.html', img:'img/costa-dei-trabocchi.jpg',
          note:{en:"Cycle or drive the coastal route past the wooden stilt-fishing machines.", it:"In bici o in auto lungo la costa tra le antiche macchine da pesca su palafitta.", de:"Mit Rad oder Auto entlang der Küste vorbei an den hölzernen Stelzen-Fischmaschinen.", fr:"À vélo ou en voiture le long de la côte, devant les machines de pêche sur pilotis."} },
        { slot:'lunch', icon:'ti-tools-kitchen-2', name:'Brodetto alla Vastese', href:'food.html', img:'img/brodetto-alla-vastese.jpg',
          note:{en:"The definitive Adriatic fish stew, eaten on a trabocco over the sea.", it:"La zuppa di pesce adriatica per eccellenza, su un trabocco sospeso sul mare.", de:"Der ultimative adriatische Fischeintopf, auf einem Trabocco über dem Meer.", fr:"La bouillabaisse adriatique par excellence, sur un trabocco au-dessus de la mer."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-building-castle', name:'Chieti', href:'attractions.html', img:'img/teatro-romano-chieti.jpg',
          note:{en:"Roman theatre and one of Italy's finest archaeological museums.", it:"Teatro romano e uno dei più bei musei archeologici d'Italia.", de:"Römisches Theater und eines der schönsten archäologischen Museen Italiens.", fr:"Théâtre romain et l'un des plus beaux musées archéologiques d'Italie."} },
        { slot:'afternoon', icon:'ti-tools-kitchen-2', name:'Pasta alla Chitarra', href:'food.html', img:'img/pasta-alla-chitarra.jpg',
          note:{en:"Learn the square-cut pasta 'played' on a wire-strung frame.", it:"Scopri la pasta a sezione quadrata 'suonata' sul telaio a corde.", de:"Lerne die quadratisch geschnittene Pasta kennen, 'gespielt' auf einem Saitenrahmen.", fr:"Découvrez les pâtes à section carrée « jouées » sur un cadre à cordes."} }
      ]},
      { day:3, items:[
        { slot:'morning', icon:'ti-building-castle', name:'Castelli', href:'villages.html', img:'img/castelli.jpg',
          note:{en:"Abruzzo's ceramics capital under the Gran Sasso — active maiolica workshops.", it:"La capitale della ceramica d'Abruzzo sotto il Gran Sasso — botteghe di maiolica attive.", de:"Die Keramikhauptstadt der Abruzzen unter dem Gran Sasso — aktive Majolika-Werkstätten.", fr:"La capitale de la céramique des Abruzzes sous le Gran Sasso — ateliers de faïence en activité."} },
        { slot:'evening', icon:'ti-building-castle', name:'Santo Stefano di Sessanio', href:'villages.html', img:'img/santo-stefano-di-sessanio.jpg',
          note:{en:"A stone village frozen in time; dine on lentil and saffron dishes.", it:"Un borgo in pietra fermo nel tempo; cena con lenticchie e zafferano.", de:"Ein Steindorf, das die Zeit vergessen hat; speise Linsen- und Safrangerichte.", fr:"Un village de pierre figé dans le temps ; dînez de plats de lentilles et de safran."} }
      ]},
      { day:4, items:[
        { slot:'morning', icon:'ti-flower', name:'Zafferano DOP', href:'food.html', img:'img/zafferano-aquila-dop.jpg',
          note:{en:"On the Navelli plateau, home of L'Aquila's prized DOP saffron.", it:"Sull'altopiano di Navelli, patria del pregiato zafferano DOP dell'Aquila.", de:"Auf der Hochebene von Navelli, Heimat des edlen DOP-Safrans aus L'Aquila.", fr:"Sur le plateau de Navelli, berceau du précieux safran DOP de L'Aquila."} },
        { slot:'afternoon', icon:'ti-building-castle', name:"L'Aquila & Collemaggio", href:'attractions.html', img:'img/basilica-collemaggio.jpg',
          note:{en:"The reborn capital: 99-spout fountain and the Collemaggio basilica.", it:"Il capoluogo rinato: fontana delle 99 cannelle e basilica di Collemaggio.", de:"Die wiedergeborene Hauptstadt: Brunnen der 99 Ausläufe und Basilika Collemaggio.", fr:"La capitale renaissante : fontaine aux 99 becs et basilique de Collemaggio."} }
      ]},
      { day:5, items:[
        { slot:'morning', icon:'ti-gift', name:'Sulmona', href:'food.html', img:'img/confetti-di-sulmona.jpg',
          note:{en:"Confetti workshops since 1265 in Ovid's graceful home town.", it:"Le confetterie dal 1265 nell'elegante città natale di Ovidio.", de:"Confetti-Manufakturen seit 1265 in Ovids anmutiger Heimatstadt.", fr:"Confiseries de dragées depuis 1265 dans l'élégante ville natale d'Ovide."} },
        { slot:'evening', icon:'ti-building-castle', name:'Pacentro', href:'villages.html', img:'img/pacentro.jpg',
          note:{en:"A last medieval sunset below the Majella before heading home.", it:"Un ultimo tramonto medievale ai piedi della Majella prima del rientro.", de:"Ein letzter mittelalterlicher Sonnenuntergang unterhalb der Majella vor der Heimreise.", fr:"Un dernier coucher de soleil médiéval au pied de la Majella avant le retour."} }
      ]}
    ]
  }
];
