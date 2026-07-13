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
  },

  {
    id:'family-coast-park', moods:['family','slow'], days:4, months:[4,5,6,7,9],
    hero:'img/costa-dei-trabocchi.jpg',
    title:{en:'Family Abruzzo — Coast to Wild Park', it:'Abruzzo in famiglia — dalla costa al parco', de:'Abruzzen für Familien — von der Küste zum Wildpark', fr:'Abruzzo en famille — de la côte au parc sauvage'},
    theme:{en:'Beaches, bears and legends for all ages', it:'Spiagge, orsi e leggende per tutte le età', de:'Strände, Bären und Legenden für jedes Alter', fr:'Plages, ours et légendes pour tous les âges'},
    area:{en:'Trabocchi Coast & Abruzzo National Park', it:'Costa dei Trabocchi e Parco Nazionale d\'Abruzzo', de:'Trabocchi-Küste & Nationalpark Abruzzen', fr:'Côte des Trabocchi & Parc National des Abruzzes'},
    intro:{en:"Four easy, wonder-filled days: gentle Adriatic beaches, a flat trail where Marsican bears roam, a live-wolf museum, a heart-shaped lake and a castle straight out of a fairy tale.",
      it:"Quattro giorni facili e pieni di meraviglia: spiagge adriatiche tranquille, un sentiero pianeggiante dove vivono gli orsi marsicani, un museo con i lupi, un lago a forma di cuore e un castello da fiaba.",
      de:"Vier leichte, staunenswerte Tage: sanfte Adriastrände, ein ebener Pfad im Reich der Marsikanischen Bären, ein Museum mit lebenden Wölfen, ein herzförmiger See und eine Burg wie aus dem Märchen.",
      fr:"Quatre jours faciles et émerveillés : plages adriatiques douces, un sentier plat au pays des ours marsicans, un musée aux loups vivants, un lac en forme de cœur et un château de conte de fées."},
    plan:[
      { day:1, items:[
        { slot:'morning', icon:'ti-beach', name:'Costa dei Trabocchi', href:'attractions.html', img:'img/costa-dei-trabocchi.jpg',
          note:{en:"Easy beaches and the wooden stilt-fishing machines — a flat cycle path for families.", it:"Spiagge tranquille e le macchine da pesca su palafitta — una ciclabile pianeggiante per famiglie.", de:"Ruhige Strände und die hölzernen Stelzen-Fischmaschinen — ein ebener Radweg für Familien.", fr:"Plages faciles et machines de pêche sur pilotis — une piste cyclable plate pour les familles."} },
        { slot:'evening', icon:'ti-tools-kitchen-2', name:'Arrosticini', href:'food.html', img:'img/arrosticini.jpg',
          note:{en:"The kids' first arrosticini — tiny lamb skewers everyone loves.", it:"I primi arrosticini per i bimbi — spiedini di pecora che piacciono a tutti.", de:"Die ersten Arrosticini für die Kinder — kleine Lammspieße, die alle lieben.", fr:"Les premiers arrosticini pour les enfants — petites brochettes d'agneau que tout le monde adore."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-paw', name:'Valle Fondillo', href:'hiking.html', img:'img/valle-fondillo.jpg',
          note:{en:"A flat, stroller-friendly forest walk in bear country.", it:"Una passeggiata boschiva pianeggiante, adatta anche ai passeggini, in terra d'orsi.", de:"Ein ebener, kinderwagentauglicher Waldspaziergang im Bärenland.", fr:"Une balade forestière plate, accessible en poussette, au pays des ours."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Civitella Alfedena', href:'villages.html', img:'img/civitella-alfedena.jpg',
          note:{en:"Meet real wolves at the museum enclosure — a kids' highlight.", it:"Incontra lupi veri al recinto del museo — il momento clou per i bambini.", de:"Echte Wölfe im Museumsgehege — das Highlight für Kinder.", fr:"Rencontrez de vrais loups dans l'enclos du musée — le moment fort des enfants."} }
      ]},
      { day:3, items:[
        { slot:'morning', icon:'ti-walk', name:'Lago di Scanno', href:'attractions.html', img:'img/lago-di-scanno.jpg',
          note:{en:"The heart-shaped lake — an easy shoreline loop and summer boat rental.", it:"Il lago a forma di cuore — facile anello sulla riva e noleggio barche d'estate.", de:"Der herzförmige See — leichte Uferrunde und Bootsverleih im Sommer.", fr:"Le lac en forme de cœur — boucle facile sur la rive et location de barques en été."} },
        { slot:'afternoon', icon:'ti-gift', name:'Sulmona', href:'food.html', img:'img/confetti-di-sulmona.jpg',
          note:{en:"Colourful confetti (sugared almonds) — a sweet stop kids remember.", it:"I coloratissimi confetti — una tappa dolce che i bimbi ricordano.", de:"Bunte Confetti (Zuckermandeln) — ein süßer Stopp, den Kinder lieben.", fr:"Des dragées colorées — une halte sucrée dont les enfants se souviennent."} }
      ]},
      { day:4, items:[
        { slot:'morning', icon:'ti-building-castle', name:'Rocca Calascio', href:'villages.html', img:'img/rocca-calascio.jpg',
          note:{en:"A real hilltop castle to explore — the Ladyhawke fortress in the clouds.", it:"Un vero castello in cima al colle da esplorare — la fortezza di Ladyhawke tra le nuvole.", de:"Eine echte Gipfelburg zum Erkunden — die Ladyhawke-Festung in den Wolken.", fr:"Un vrai château perché à explorer — la forteresse de Ladyhawke dans les nuages."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Pacentro', href:'villages.html', img:'img/pacentro.jpg',
          note:{en:"Three castle towers and a medieval maze to run through before home.", it:"Tre torri del castello e un dedalo medievale in cui correre prima del rientro.", de:"Drei Burgtürme und ein mittelalterliches Labyrinth zum Toben vor der Heimreise.", fr:"Trois tours de château et un dédale médiéval où courir avant le retour."} }
      ]}
    ]
  },

  {
    id:'roam-adriatic-bike', moods:['roam','taste'], days:3, months:[5,6,9,10],
    hero:'img/blockhaus.jpg',
    title:{en:'Two Wheels — Coast & Climbs', it:'Due ruote — costa e salite', de:'Zwei Räder — Küste & Anstiege', fr:'Deux roues — côte et ascensions'},
    theme:{en:'From flat sea cycleway to a legendary mountain pass', it:'Dalla ciclabile sul mare a un valico di montagna leggendario', de:'Von der flachen Küstenradroute zu einem legendären Bergpass', fr:'De la véloroute côtière à un col de montagne légendaire'},
    area:{en:'Trabocchi Coast & the Majella', it:'Costa dei Trabocchi e la Majella', de:'Trabocchi-Küste & die Majella', fr:'Côte des Trabocchi & la Majella'},
    intro:{en:"Three days on the saddle: an easy flat cycleway along the Adriatic with trabocco seafood, then the Blockhaus — a climb straight out of the Giro d'Italia — rewarded with mountain oil and skewers.",
      it:"Tre giorni in sella: la facile ciclabile pianeggiante sull'Adriatico con il pesce dei trabocchi, poi il Blockhaus — una salita da Giro d'Italia — premiata con olio di montagna e arrosticini.",
      de:"Drei Tage im Sattel: die leichte, flache Radroute an der Adria mit Trabocco-Fisch, dann der Blockhaus — ein Anstieg wie beim Giro d'Italia — belohnt mit Bergöl und Spießen.",
      fr:"Trois jours en selle : la véloroute plate et facile le long de l'Adriatique avec les fruits de mer des trabocchi, puis le Blockhaus — une ascension digne du Giro — récompensée d'huile de montagne et de brochettes."},
    plan:[
      { day:1, items:[
        { slot:'morning', icon:'ti-bike', name:'Costa dei Trabocchi', href:'attractions.html', img:'img/costa-dei-trabocchi.jpg',
          note:{en:"The 42km rail-trail cycleway hugging the sea, flat and car-free.", it:"I 42 km di ciclabile ricavata dalla ferrovia lungo il mare, piatta e senza auto.", de:"Die 42 km lange Bahntrassen-Radroute am Meer, flach und autofrei.", fr:"Les 42 km de voie verte le long de la mer, plate et sans voiture."} },
        { slot:'lunch', icon:'ti-fish', name:'Brodetto alla Vastese', href:'food.html', img:'img/brodetto-alla-vastese.jpg',
          note:{en:"Refuel with the classic Adriatic fish stew on a trabocco.", it:"Ricarica con la classica zuppa di pesce adriatica su un trabocco.", de:"Tanke auf mit dem klassischen adriatischen Fischeintopf auf einem Trabocco.", fr:"Refaites le plein avec la bouillabaisse adriatique classique sur un trabocco."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-mountain', name:'Blockhaus', href:'hiking.html', img:'img/blockhaus.jpg',
          note:{en:"The iconic Majella climb to 1,800m — a Giro d'Italia legend, or a panoramic ridge walk.", it:"La mitica salita della Majella a 1.800 m — leggenda del Giro d'Italia, o una camminata panoramica sulla cresta.", de:"Der ikonische Majella-Anstieg auf 1.800 m — eine Giro-d'Italia-Legende, oder eine Panorama-Gratwanderung.", fr:"L'ascension mythique de la Majella à 1 800 m — légende du Giro, ou une balade panoramique sur la crête."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Pennapiedimonte', href:'villages.html', img:'img/pennapiedimonte.jpg',
          note:{en:"A village clinging to a rock spur — total authenticity, almost no tourists.", it:"Un borgo aggrappato a uno sperone di roccia — autenticità totale, quasi nessun turista.", de:"Ein Dorf an einem Felssporn — völlige Authentizität, fast keine Touristen.", fr:"Un village accroché à un éperon rocheux — authenticité totale, presque aucun touriste."} }
      ]},
      { day:3, items:[
        { slot:'morning', icon:'ti-bike', name:'Campo Imperatore', href:'hiking.html', img:'img/campo-imperatore.jpg',
          note:{en:"A high plateau loop among wild horses — endless gravel and grass.", it:"Un anello d'altopiano tra cavalli bradi — ghiaia e prati a perdita d'occhio.", de:"Eine Hochebenen-Runde zwischen Wildpferden — endloser Schotter und Gras.", fr:"Une boucle de haut plateau parmi les chevaux sauvages — gravier et herbe à perte de vue."} },
        { slot:'evening', icon:'ti-droplet', name:'Olio EVO DOP', href:'food.html', img:'img/olio-evo-dop.jpg',
          note:{en:"End with DOP extra-virgin oil tasting and well-earned arrosticini.", it:"Chiudi con una degustazione di olio EVO DOP e meritati arrosticini.", de:"Zum Abschluss eine Verkostung von DOP-Olivenöl und verdiente Arrosticini.", fr:"Terminez par une dégustation d'huile d'olive DOP et des arrosticini bien mérités."} }
      ]}
    ]
  },

  {
    id:'winter-thermal', moods:['slow','family'], days:3, months:[12,1,2],
    hero:'img/terme-di-caramanico.jpg',
    title:{en:'Winter Warmth — Thermal Abruzzo', it:'Tepore d\'inverno — Abruzzo termale', de:'Winterwärme — Thermal-Abruzzen', fr:'Chaleur d\'hiver — Abruzzo thermal'},
    theme:{en:'Steaming springs, snowy peaks and cosy stone villages', it:'Sorgenti fumanti, vette innevate e borghi di pietra accoglienti', de:'Dampfende Quellen, verschneite Gipfel und gemütliche Steindörfer', fr:'Sources fumantes, sommets enneigés et villages de pierre chaleureux'},
    area:{en:'Caramanico, Popoli & the Gran Sasso highlands', it:'Caramanico, Popoli e gli altopiani del Gran Sasso', de:'Caramanico, Popoli & das Gran-Sasso-Hochland', fr:'Caramanico, Popoli & les hauts plateaux du Gran Sasso'},
    intro:{en:"Three slow winter days: soak in Roman-era thermal waters, watch snow settle on Campo Imperatore, warm up with mountain pasta and end among the confetti of Sulmona.",
      it:"Tre giorni lenti d'inverno: immergiti nelle acque termali di epoca romana, guarda la neve posarsi su Campo Imperatore, scaldati con la pasta di montagna e chiudi tra i confetti di Sulmona.",
      de:"Drei langsame Wintertage: bade in römischem Thermalwasser, sieh den Schnee auf Campo Imperatore fallen, wärme dich mit Bergpasta und lass den Tag zwischen den Confetti von Sulmona ausklingen.",
      fr:"Trois jours d'hiver au ralenti : baignez-vous dans des eaux thermales d'époque romaine, regardez la neige tomber sur Campo Imperatore, réchauffez-vous avec des pâtes de montagne et terminez parmi les dragées de Sulmona."},
    plan:[
      { day:1, items:[
        { slot:'afternoon', icon:'ti-spa', name:'Terme di Caramanico', href:'wellness.html', img:'img/terme-di-caramanico.jpg',
          note:{en:"Sulphur springs on the edge of the Majella — steam against the winter cold.", it:"Sorgenti sulfuree ai margini della Majella — vapore contro il freddo invernale.", de:"Schwefelquellen am Rand der Majella — Dampf gegen die Winterkälte.", fr:"Sources sulfureuses en bordure de la Majella — vapeur contre le froid hivernal."} },
        { slot:'evening', icon:'ti-tools-kitchen-2', name:'Pasta alla Chitarra', href:'food.html', img:'img/pasta-alla-chitarra.jpg',
          note:{en:"A warming plate of hand-cut pasta with a rich ragù.", it:"Un piatto caldo di pasta tagliata a mano con un ragù ricco.", de:"Ein wärmender Teller handgeschnittener Pasta mit kräftigem Ragù.", fr:"Une assiette réconfortante de pâtes coupées main avec un ragù riche."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-snowflake', name:'Campo Imperatore', href:'hiking.html', img:'img/campo-imperatore.jpg',
          note:{en:"The snow-covered plateau — winter walks, snowshoes and vast silence.", it:"L'altopiano innevato — camminate invernali, ciaspole e un silenzio immenso.", de:"Die verschneite Hochebene — Winterwanderungen, Schneeschuhe und weite Stille.", fr:"Le plateau enneigé — balades hivernales, raquettes et un silence immense."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Santo Stefano di Sessanio', href:'villages.html', img:'img/santo-stefano-di-sessanio.jpg',
          note:{en:"A stone village at its cosiest in winter — lentil soup by the fire.", it:"Un borgo di pietra al suo massimo d'accoglienza in inverno — zuppa di lenticchie accanto al fuoco.", de:"Ein Steindorf, im Winter am gemütlichsten — Linsensuppe am Kamin.", fr:"Un village de pierre au plus chaleureux en hiver — soupe de lentilles près du feu."} }
      ]},
      { day:3, items:[
        { slot:'morning', icon:'ti-spa', name:'Terme di Popoli', href:'wellness.html', img:'img/terme-di-popoli.jpg',
          note:{en:"A final soak where three valleys meet before heading home.", it:"Un ultimo bagno dove si incontrano tre valli prima del rientro.", de:"Ein letztes Bad, wo drei Täler zusammentreffen, vor der Heimreise.", fr:"Un dernier bain là où se rejoignent trois vallées, avant le retour."} },
        { slot:'afternoon', icon:'ti-gift', name:'Sulmona', href:'food.html', img:'img/confetti-di-sulmona.jpg',
          note:{en:"Confetti workshops and a warm coffee in Ovid's old town.", it:"Le confetterie e un caffè caldo nel centro storico di Ovidio.", de:"Confetti-Manufakturen und ein heißer Kaffee in Ovids Altstadt.", fr:"Les confiseries et un café chaud dans la vieille ville d'Ovide."} }
      ]}
    ]
  },

  {
    id:'wild-grand-tour', moods:['wild','roam','history'], days:7, months:[6,7,8,9],
    hero:'img/corno-grande-gran-sasso.jpg',
    title:{en:'The Grand Wild Tour — A Week Across Abruzzo', it:'Il Grand Tour selvaggio — una settimana in Abruzzo', de:'Die große Wildtour — eine Woche durch die Abruzzen', fr:'Le grand tour sauvage — une semaine à travers l\'Abruzzo'},
    theme:{en:'Three massifs, three national parks, one epic week', it:'Tre massicci, tre parchi nazionali, una settimana epica', de:'Drei Massive, drei Nationalparks, eine epische Woche', fr:'Trois massifs, trois parcs nationaux, une semaine épique'},
    area:{en:'Gran Sasso, Majella & Abruzzo National Park', it:'Gran Sasso, Majella e Parco Nazionale d\'Abruzzo', de:'Gran Sasso, Majella & Nationalpark Abruzzen', fr:'Gran Sasso, Majella & Parc National des Abruzzes'},
    intro:{en:"Seven days for those who want it all: the roof of the Apennines, hermit cliffs, thermal recovery, ceramic and castle villages and a bear-and-wolf finale in the oldest national park.",
      it:"Sette giorni per chi vuole tutto: il tetto dell'Appennino, eremi a strapiombo, recupero termale, borghi di ceramica e castelli e un finale tra orsi e lupi nel parco nazionale più antico.",
      de:"Sieben Tage für alle, die alles wollen: das Dach des Apennins, Einsiedlerklippen, Thermenerholung, Keramik- und Burgdörfer und ein Finale mit Bären und Wölfen im ältesten Nationalpark.",
      fr:"Sept jours pour ceux qui veulent tout : le toit des Apennins, des falaises d'ermites, une récupération thermale, des villages de céramique et de châteaux et un final entre ours et loups dans le plus ancien parc national."},
    plan:[
      { day:1, items:[
        { slot:'morning', icon:'ti-mountain', name:'Campo Imperatore', href:'hiking.html', img:'img/campo-imperatore.jpg',
          note:{en:"Acclimatise on the vast Gran Sasso plateau among wild horses.", it:"Acclimatati sull'immenso altopiano del Gran Sasso tra cavalli bradi.", de:"Akklimatisiere auf der weiten Gran-Sasso-Hochebene zwischen Wildpferden.", fr:"Acclimatez-vous sur le vaste plateau du Gran Sasso parmi les chevaux sauvages."} },
        { slot:'evening', icon:'ti-building-castle', name:'Rocca Calascio', href:'villages.html', img:'img/rocca-calascio.jpg',
          note:{en:"Sunset at the Apennines' highest castle.", it:"Tramonto al castello più alto dell'Appennino.", de:"Sonnenuntergang an der höchsten Burg des Apennins.", fr:"Coucher de soleil au château le plus haut des Apennins."} }
      ]},
      { day:2, items:[
        { slot:'morning', icon:'ti-mountain', name:'Corno Grande', href:'hiking.html', img:'img/corno-grande-gran-sasso.jpg',
          note:{en:"The big one: summit day to 2,912m, the roof of the Apennines.", it:"Il grande giorno: vetta a 2.912 m, il tetto dell'Appennino.", de:"Der große Tag: Gipfel auf 2.912 m, das Dach des Apennins.", fr:"Le grand jour : sommet à 2 912 m, le toit des Apennins."} },
        { slot:'evening', icon:'ti-building-castle', name:"L'Aquila", href:'attractions.html', img:'img/basilica-collemaggio.jpg',
          note:{en:"Recover in the reborn capital: Collemaggio basilica and saffron dishes.", it:"Recupero nel capoluogo rinato: basilica di Collemaggio e piatti allo zafferano.", de:"Erholung in der wiedergeborenen Hauptstadt: Basilika Collemaggio und Safrangerichte.", fr:"Récupération dans la capitale renaissante : basilique de Collemaggio et plats au safran."} }
      ]},
      { day:3, items:[
        { slot:'morning', icon:'ti-building-castle', name:'Santo Stefano di Sessanio', href:'villages.html', img:'img/santo-stefano-di-sessanio.jpg',
          note:{en:"A slow morning in the perfectly preserved stone village.", it:"Una mattina lenta nel borgo di pietra perfettamente conservato.", de:"Ein langsamer Morgen im perfekt erhaltenen Steindorf.", fr:"Une matinée tranquille dans le village de pierre parfaitement préservé."} },
        { slot:'afternoon', icon:'ti-palette', name:'Castelli', href:'villages.html', img:'img/castelli.jpg',
          note:{en:"The ceramics capital under the Gran Sasso — visit a working maiolica workshop.", it:"La capitale della ceramica sotto il Gran Sasso — visita una bottega di maiolica attiva.", de:"Die Keramikhauptstadt unter dem Gran Sasso — Besuch einer aktiven Majolika-Werkstatt.", fr:"La capitale de la céramique sous le Gran Sasso — visite d'un atelier de faïence en activité."} }
      ]},
      { day:4, items:[
        { slot:'morning', icon:'ti-walk', name:'Eremo di San Bartolomeo', href:'hiking.html', img:'img/eremo-san-bartolomeo.jpg',
          note:{en:"A cliff hermitage trail into the heart of the Majella.", it:"Il sentiero dell'eremo rupestre nel cuore della Majella.", de:"Ein Pfad zur Felseneremitage im Herzen der Majella.", fr:"Un sentier vers l'ermitage rupestre au cœur de la Majella."} },
        { slot:'evening', icon:'ti-spa', name:'Terme di Caramanico', href:'wellness.html', img:'img/terme-di-caramanico.jpg',
          note:{en:"Well-earned thermal recovery at the Majella's edge.", it:"Meritato recupero termale ai margini della Majella.", de:"Verdiente Thermenerholung am Rand der Majella.", fr:"Récupération thermale bien méritée en bordure de la Majella."} }
      ]},
      { day:5, items:[
        { slot:'morning', icon:'ti-mountain', name:'Blockhaus', href:'hiking.html', img:'img/blockhaus.jpg',
          note:{en:"The panoramic Majella ridge at 1,800m — a cycling and hiking legend.", it:"La cresta panoramica della Majella a 1.800 m — leggenda del ciclismo e del trekking.", de:"Der panoramische Majella-Grat auf 1.800 m — eine Rad- und Wanderlegende.", fr:"La crête panoramique de la Majella à 1 800 m — légende du vélo et de la randonnée."} },
        { slot:'evening', icon:'ti-building-castle', name:'Pacentro', href:'villages.html', img:'img/pacentro.jpg',
          note:{en:"Three castle towers and a medieval core below the Majella.", it:"Le tre torri del castello e un centro medievale ai piedi della Majella.", de:"Drei Burgtürme und ein mittelalterlicher Kern unterhalb der Majella.", fr:"Trois tours de château et un cœur médiéval au pied de la Majella."} }
      ]},
      { day:6, items:[
        { slot:'morning', icon:'ti-paw', name:'Valle Fondillo', href:'hiking.html', img:'img/valle-fondillo.jpg',
          note:{en:"Into the oldest national park — a beech-forest trail in bear country.", it:"Nel parco nazionale più antico — un sentiero nella faggeta in terra d'orsi.", de:"In den ältesten Nationalpark — ein Buchenwaldpfad im Bärenland.", fr:"Dans le plus ancien parc national — un sentier en hêtraie au pays des ours."} },
        { slot:'afternoon', icon:'ti-building-castle', name:'Civitella Alfedena', href:'villages.html', img:'img/civitella-alfedena.jpg',
          note:{en:"The Wolf Museum and Lake Barrea's panoramic shore.", it:"Il Museo del Lupo e la riva panoramica del Lago di Barrea.", de:"Das Wolfsmuseum und das Panoramaufer des Barrea-Sees.", fr:"Le Musée du Loup et la rive panoramique du lac de Barrea."} }
      ]},
      { day:7, items:[
        { slot:'morning', icon:'ti-walk', name:'Gole del Sagittario', href:'hiking.html', img:'img/gole-del-sagittario.jpg',
          note:{en:"A last gorge walk between towering limestone walls.", it:"Un'ultima passeggiata nella gola tra imponenti pareti calcaree.", de:"Eine letzte Schluchtwanderung zwischen hohen Kalkwänden.", fr:"Une dernière balade dans la gorge entre de hautes parois calcaires."} },
        { slot:'afternoon', icon:'ti-walk', name:'Lago di Scanno', href:'attractions.html', img:'img/lago-di-scanno.jpg',
          note:{en:"The heart-shaped lake — a fitting finale before the journey home.", it:"Il lago a forma di cuore — un finale perfetto prima del rientro.", de:"Der herzförmige See — ein passendes Finale vor der Heimreise.", fr:"Le lac en forme de cœur — un final parfait avant le retour."} }
      ]}
    ]
  }
];


/* Coordinate dei luoghi delle tappe (lat,lng) per la mappa dell'Esperienza.
   stopCoords(name) in experience.html risolve una tappa cercando la chiave come
   sottostringa del nome (le tappe "cibo" senza luogo preciso non vengono mappate). */
window.AW.placeCoords = {
  "Rocca Calascio":   [42.3436, 13.7025],
  "Campo Imperatore": [42.4419, 13.5590],
  "Corno Grande":     [42.4692, 13.5645],
  "Sagittario":       [41.9950, 13.8150],
  "Scanno":           [41.9100, 13.8800],
  "Raiano":           [42.1030, 13.7180],
  "Fondillo":         [41.7820, 13.8780],
  "Civitella":        [41.7625, 13.9430],
  "Pacentro":         [42.0520, 13.9917],
  "Sulmona":          [42.0480, 13.9280],
  "Santo Stefano":    [42.3406, 13.6447],
  "L'Aquila":         [42.3498, 13.3995],
  "Trabocchi":        [42.2460, 14.4890],
  "Vastese":          [42.1120, 14.7080],
  "Chieti":           [42.3512, 14.1678],
  "Castelli":         [42.4900, 13.7130],
  "Zafferano":        [42.2360, 13.7290],
  "Blockhaus":        [42.1930, 14.1170],
  "Pennapiedimonte":  [42.1430, 14.1820],
  "Caramanico":       [42.1580, 14.0030],
  "Popoli":           [42.1730, 13.8330],
  "Bartolomeo":       [42.1710, 14.0380]
};
