/* Abruzzo Wild & Authentic - data module: PLAN
   Content arrays extracted from plan.html (verbatim). Single source of truth,
   loaded via <script src="data/plan.js"> before the page script.
   Future: fed/refreshed by the ICH engine. */
window.AW = window.AW || {};

window.AW.travelerTypes = [
  { id:'family',    icon:'ti-users',          label:{en:'Family',     it:'Famiglia',   de:'Familie',      fr:'Famille'},     sub:{en:'Kids & all ages',   it:'Bambini e tutte le età', de:'Kinder & jedes Alter',  fr:'Enfants & tous âges'} },
  { id:'adventure', icon:'ti-mountain',       label:{en:'Adventure',  it:'Avventura',  de:'Abenteuer',    fr:'Aventure'},    sub:{en:'Hiking & outdoors', it:'Trekking e outdoor',     de:'Wandern & Outdoor',     fr:'Randonnée & plein air'} },
  { id:'food',      icon:'ti-tools-kitchen-2',label:{en:'Food Lover', it:'Buongustaio',de:'Feinschmecker',fr:'Gourmand'},    sub:{en:'Gastronomy first',  it:'Prima la gastronomia',   de:'Genuss zuerst',         fr:'La gastronomie avant tout'} },
  { id:'culture',   icon:'ti-building-castle',label:{en:'Culture',    it:'Cultura',    de:'Kultur',       fr:'Culture'},     sub:{en:'History & villages',it:'Storia e borghi',        de:'Geschichte & Dörfer',   fr:'Histoire & villages'} },
  { id:'cyclist',   icon:'ti-bike',           label:{en:'Cyclist',    it:'Ciclista',   de:'Radfahrer',    fr:'Cycliste'},    sub:{en:'Two wheels',        it:'Due ruote',              de:'Zwei Räder',            fr:'Deux roues'} }
];

window.AW.accommodation = [
  { icon:'ti-tractor',  name:"Agriturismo",     desc:{en:"Farm stays with home-cooked dinner. The most authentic experience in Abruzzo — wake up to mountains, eat from the farm's own land.", it:"Soggiorni in fattoria con cena casalinga. L'esperienza più autentica dell'Abruzzo — svegliarsi tra le montagne, mangiare i prodotti della fattoria.", de:"Bauernhofaufenthalte mit hausgemachtem Abendessen. Das authentischste Erlebnis der Abruzzen — mit Blick auf die Berge aufwachen, vom eigenen Land des Hofs essen.", fr:"Séjours à la ferme avec dîner maison. L'expérience la plus authentique des Abruzzes — se réveiller face aux montagnes, manger les produits de la ferme."}, price:"€50–80 / night incl. dinner" },
  { icon:'ti-home',     name:"Albergo Diffuso",  desc:{en:"Rooms spread through a medieval village. Pioneered in Abruzzo at Santo Stefano di Sessanio — the most unique way to sleep in a borgo.", it:"Camere distribuite in un borgo medievale. Nato in Abruzzo a Santo Stefano di Sessanio — il modo più unico di dormire in un borgo.", de:"Zimmer verteilt über ein mittelalterliches Dorf. In den Abruzzen in Santo Stefano di Sessanio entstanden — die einzigartigste Art, in einem Borgo zu übernachten.", fr:"Chambres réparties dans un village médiéval. Né dans les Abruzzes à Santo Stefano di Sessanio — la façon la plus unique de dormir dans un borgo."}, price:"€80–150 / night" },
  { icon:'ti-mountain', name:"Rifugio",           desc:{en:"Mountain huts for hikers — dinner, bed and breakfast included. The essential Abruzzo experience for anyone doing serious summit routes.", it:"Rifugi di montagna per escursionisti — cena, pernottamento e colazione inclusi. L'esperienza essenziale in Abruzzo per chi affronta vere salite in vetta.", de:"Berghütten für Wanderer — Abendessen, Übernachtung und Frühstück inbegriffen. Das unverzichtbare Abruzzen-Erlebnis für alle, die ernsthafte Gipfeltouren unternehmen.", fr:"Refuges de montagne pour randonneurs — dîner, nuitée et petit-déjeuner inclus. L'expérience essentielle des Abruzzes pour qui affronte de vraies ascensions."}, price:"€35–55 / night incl. breakfast" },
  { icon:'ti-building', name:"B&B / Hotel",       desc:{en:"Modern comfort in Pescara, L'Aquila or Sulmona. Good base for day trips and the easiest option if you are travelling with a car.", it:"Comfort moderno a Pescara, L'Aquila o Sulmona. Buona base per le gite in giornata e l'opzione più comoda se viaggi in auto.", de:"Moderner Komfort in Pescara, L'Aquila oder Sulmona. Gute Basis für Tagesausflüge und die einfachste Option, wenn Sie mit dem Auto reisen.", fr:"Confort moderne à Pescara, L'Aquila ou Sulmona. Bonne base pour les excursions à la journée et l'option la plus simple si vous voyagez en voiture."}, price:"€60–120 / night" }
];


window.AW.itins = {
  family: {
    weekend: {
      title:{en:"Family Weekend", it:"Weekend in famiglia", de:"Familien-Wochenende", fr:"Week-end en famille"}, icon:"ti-users",
      desc:{en:"Coast + National Park — perfect introduction for all ages", it:"Costa + Parco Nazionale — introduzione perfetta per tutte le età", de:"Küste + Nationalpark — perfekte Einführung für jedes Alter", fr:"Côte + Parc National — introduction parfaite pour tous les âges"},
      days:[
        { d:1, title:{en:"Pescara & Adriatic Coast", it:"Pescara e costa adriatica", de:"Pescara & Adriaküste", fr:"Pescara & côte adriatique"}, txt:{en:"Morning on the Adriatic beach. Brodetto di pesce lunch at a trabocco. Evening stroll in Lanciano old town.", it:"Mattinata sulla spiaggia adriatica. Pranzo con brodetto di pesce in un trabocco. Passeggiata serale nel centro storico di Lanciano.", de:"Vormittag am Adriastrand. Mittagessen mit Brodetto di pesce an einem Trabocco. Abendspaziergang durch die Altstadt von Lanciano.", fr:"Matinée sur la plage adriatique. Déjeuner de brodetto di pesce dans un trabocco. Balade en soirée dans la vieille ville de Lanciano."} },
        { d:2, title:{en:"Abruzzo National Park", it:"Parco Nazionale d'Abruzzo", de:"Nationalpark Abruzzen", fr:"Parc National des Abruzzes"}, txt:{en:"Valle Fondillo flat walk — Marsican bear sightings possible. Wolf Museum in Civitella Alfedena. Lake Barrea sunset.", it:"Passeggiata pianeggiante nella Valle Fondillo — possibili avvistamenti di orsi marsicani. Museo del Lupo a Civitella Alfedena. Tramonto sul Lago di Barrea.", de:"Ebener Spaziergang durch das Valle Fondillo — Sichtungen des Marsikanischen Braunbären möglich. Wolfsmuseum in Civitella Alfedena. Sonnenuntergang am Lago di Barrea.", fr:"Balade plate dans la Valle Fondillo — observation possible de l'ours marsican. Musée du Loup à Civitella Alfedena. Coucher de soleil sur le lac de Barrea."} }
      ]
    },
    short: {
      title:{en:"Family 4 Days", it:"4 giorni in famiglia", de:"Familie 4 Tage", fr:"4 jours en famille"}, icon:"ti-users",
      desc:{en:"Coast, park and a mountain village — the full family experience", it:"Costa, parco e un borgo di montagna — l'esperienza completa per la famiglia", de:"Küste, Park und ein Bergdorf — das komplette Familienerlebnis", fr:"Côte, parc et un village de montagne — l'expérience familiale complète"},
      days:[
        { d:1, title:{en:"Arrive Pescara · Beach", it:"Arrivo a Pescara · Spiaggia", de:"Ankunft Pescara · Strand", fr:"Arrivée à Pescara · Plage"}, txt:{en:"Settle in. Afternoon on the Adriatic. Dinner: first arrosticini experience.", it:"Sistemazione. Pomeriggio sull'Adriatico. Cena: primo assaggio di arrosticini.", de:"Ankommen. Nachmittag an der Adria. Abendessen: erstes Arrosticini-Erlebnis.", fr:"Installation. Après-midi sur l'Adriatique. Dîner : première expérience d'arrosticini."} },
        { d:2, title:{en:"Costa dei Trabocchi", it:"Costa dei Trabocchi", de:"Costa dei Trabocchi", fr:"Costa dei Trabocchi"}, txt:{en:"Drive or cycle the 42km coastal route. Trabocco lunch over the sea. Vasto old town.", it:"In auto o bici lungo i 42 km della costa. Pranzo in un trabocco sul mare. Centro storico di Vasto.", de:"Mit Auto oder Rad die 42 km lange Küstenroute. Mittagessen im Trabocco über dem Meer. Altstadt von Vasto.", fr:"En voiture ou à vélo sur les 42 km de côte. Déjeuner dans un trabocco au-dessus de la mer. Vieille ville de Vasto."} },
        { d:3, title:{en:"Abruzzo National Park", it:"Parco Nazionale d'Abruzzo", de:"Nationalpark Abruzzen", fr:"Parc National des Abruzzes"}, txt:{en:"Valle Fondillo walk (bear spotting!). Wolf Museum. Lake Barrea.", it:"Passeggiata nella Valle Fondillo (avvistamento orsi!). Museo del Lupo. Lago di Barrea.", de:"Spaziergang im Valle Fondillo (Bären beobachten!). Wolfsmuseum. Lago di Barrea.", fr:"Balade dans la Valle Fondillo (observation d'ours !). Musée du Loup. Lac de Barrea."} },
        { d:4, title:{en:"Scanno & head home", it:"Scanno e rientro", de:"Scanno & Heimreise", fr:"Scanno & retour"}, txt:{en:"Heart-shaped lake walk. Scanno medieval village. Confetti shopping in Sulmona.", it:"Passeggiata al lago a forma di cuore. Borgo medievale di Scanno. Confetti da comprare a Sulmona.", de:"Spaziergang am herzförmigen See. Mittelalterliches Dorf Scanno. Confetti-Einkauf in Sulmona.", fr:"Balade au lac en forme de cœur. Village médiéval de Scanno. Achat de confetti à Sulmona."} }
      ]
    },
    week: {
      title:{en:"Family Week", it:"Settimana in famiglia", de:"Familienwoche", fr:"Semaine en famille"}, icon:"ti-users",
      desc:{en:"Complete Abruzzo — coast, mountains, parks and villages", it:"Abruzzo completo — costa, montagne, parchi e borghi", de:"Abruzzen komplett — Küste, Berge, Parks und Dörfer", fr:"Les Abruzzes au complet — côte, montagnes, parcs et villages"},
      days:[
        { d:1, title:{en:"Arrive Pescara", it:"Arrivo a Pescara", de:"Ankunft Pescara", fr:"Arrivée à Pescara"}, txt:{en:"Beach afternoon. Seafood dinner on the coast.", it:"Pomeriggio in spiaggia. Cena di pesce sulla costa.", de:"Nachmittag am Strand. Fisch-Abendessen an der Küste.", fr:"Après-midi à la plage. Dîner de fruits de mer sur la côte."} },
        { d:2, title:{en:"Trabocchi coast", it:"Costa dei Trabocchi", de:"Trabocchi-Küste", fr:"Côte des Trabocchi"}, txt:{en:"Cycling the coastal route. Trabocco lunch.", it:"In bici lungo la costa. Pranzo in un trabocco.", de:"Radtour entlang der Küste. Mittagessen im Trabocco.", fr:"Vélo le long de la côte. Déjeuner dans un trabocco."} },
        { d:3, title:{en:"L'Aquila city", it:"Città dell'Aquila", de:"Stadt L'Aquila", fr:"Ville de L'Aquila"}, txt:{en:"99 Cannelle fountain. Saffron lunch. Fortress museum.", it:"Fontana delle 99 Cannelle. Pranzo allo zafferano. Museo del forte.", de:"Brunnen der 99 Cannelle. Safran-Mittagessen. Festungsmuseum.", fr:"Fontaine des 99 Cannelle. Déjeuner au safran. Musée de la forteresse."} },
        { d:4, title:{en:"Gran Sasso plateau", it:"Altopiano del Gran Sasso", de:"Gran-Sasso-Hochebene", fr:"Plateau du Gran Sasso"}, txt:{en:"Campo Imperatore drive. Chamois spotting. Rifugio lunch.", it:"In auto a Campo Imperatore. Avvistamento camosci. Pranzo in rifugio.", de:"Fahrt nach Campo Imperatore. Gämsen beobachten. Mittagessen in der Berghütte.", fr:"Route vers Campo Imperatore. Observation de chamois. Déjeuner au refuge."} },
        { d:5, title:{en:"National Park", it:"Parco Nazionale", de:"Nationalpark", fr:"Parc National"}, txt:{en:"Valle Fondillo bear walk. Wolf Museum. Barrea lake.", it:"Passeggiata degli orsi nella Valle Fondillo. Museo del Lupo. Lago di Barrea.", de:"Bären-Spaziergang im Valle Fondillo. Wolfsmuseum. Lago di Barrea.", fr:"Balade aux ours dans la Valle Fondillo. Musée du Loup. Lac de Barrea."} },
        { d:6, title:{en:"Scanno & Sulmona", it:"Scanno e Sulmona", de:"Scanno & Sulmona", fr:"Scanno & Sulmona"}, txt:{en:"Heart lake. Confetti factories. Medieval centre.", it:"Lago a forma di cuore. Fabbriche di confetti. Centro medievale.", de:"Herzförmiger See. Confetti-Manufakturen. Mittelalterlicher Ortskern.", fr:"Lac en forme de cœur. Fabriques de confetti. Centre médiéval."} },
        { d:7, title:{en:"Medieval villages", it:"Borghi medievali", de:"Mittelalterliche Dörfer", fr:"Villages médiévaux"}, txt:{en:"Rocca Calascio castle. Santo Stefano. Depart.", it:"Castello di Rocca Calascio. Santo Stefano. Partenza.", de:"Burg Rocca Calascio. Santo Stefano. Abreise.", fr:"Château de Rocca Calascio. Santo Stefano. Départ."} }
      ]
    }
  },
  adventure: {
    weekend: {
      title:{en:"Adventure Weekend", it:"Weekend d'avventura", de:"Abenteuer-Wochenende", fr:"Week-end aventure"}, icon:"ti-mountain",
      desc:{en:"Gran Sasso summit — the definitive Apennine challenge", it:"Vetta del Gran Sasso — la sfida definitiva dell'Appennino", de:"Gran-Sasso-Gipfel — die ultimative Apennin-Herausforderung", fr:"Sommet du Gran Sasso — le défi apenninique par excellence"},
      days:[
        { d:1, title:{en:"Arrive · Acclimatise", it:"Arrivo · Acclimatamento", de:"Ankunft · Akklimatisierung", fr:"Arrivée · Acclimatation"}, txt:{en:"Drive to Campo Imperatore (2,130m). Plateau walk. Overnight at Rifugio Duca degli Abruzzi.", it:"In auto a Campo Imperatore (2.130 m). Passeggiata sull'altopiano. Pernottamento al Rifugio Duca degli Abruzzi.", de:"Fahrt nach Campo Imperatore (2.130 m). Spaziergang auf der Hochebene. Übernachtung im Rifugio Duca degli Abruzzi.", fr:"Route vers Campo Imperatore (2 130 m). Balade sur le plateau. Nuit au Rifugio Duca degli Abruzzi."} },
        { d:2, title:{en:"Corno Grande Summit", it:"Vetta del Corno Grande", de:"Corno-Grande-Gipfel", fr:"Sommet du Corno Grande"}, txt:{en:"4am alarm. Summit by 9am (2,912m). 6–8h return. Celebrate with arrosticini in L'Aquila.", it:"Sveglia alle 4. Vetta entro le 9 (2.912 m). 6–8h andata e ritorno. Si festeggia con gli arrosticini a L'Aquila.", de:"Wecker um 4 Uhr. Gipfel bis 9 Uhr (2.912 m). 6–8 Std. hin und zurück. Feiern mit Arrosticini in L'Aquila.", fr:"Réveil à 4h. Sommet avant 9h (2 912 m). 6–8h aller-retour. On fête ça avec des arrosticini à L'Aquila."} }
      ]
    },
    short: {
      title:{en:"Adventure 4 Days", it:"4 giorni d'avventura", de:"Abenteuer 4 Tage", fr:"4 jours d'aventure"}, icon:"ti-mountain",
      desc:{en:"Gran Sasso + Maiella — two massifs, two summit days", it:"Gran Sasso + Maiella — due massicci, due giorni di vetta", de:"Gran Sasso + Maiella — zwei Massive, zwei Gipfeltage", fr:"Gran Sasso + Maiella — deux massifs, deux jours de sommet"},
      days:[
        { d:1, title:{en:"Arrive · Campo Imperatore", it:"Arrivo · Campo Imperatore", de:"Ankunft · Campo Imperatore", fr:"Arrivée · Campo Imperatore"}, txt:{en:"Acclimatise on the plateau. Easy evening walk.", it:"Acclimatamento sull'altopiano. Facile passeggiata serale.", de:"Akklimatisierung auf der Hochebene. Leichter Abendspaziergang.", fr:"Acclimatation sur le plateau. Balade facile en soirée."} },
        { d:2, title:{en:"Corno Grande Summit", it:"Vetta del Corno Grande", de:"Corno-Grande-Gipfel", fr:"Sommet du Corno Grande"}, txt:{en:"Full summit day. 2,912m. 6–8 hours.", it:"Giornata intera di vetta. 2.912 m. 6–8 ore.", de:"Ganzer Gipfeltag. 2.912 m. 6–8 Stunden.", fr:"Journée complète de sommet. 2 912 m. 6–8 heures."} },
        { d:3, title:{en:"Maiella — Eremo trail", it:"Maiella — sentiero dell'Eremo", de:"Maiella — Eremo-Weg", fr:"Maiella — sentier de l'Eremo"}, txt:{en:"Eremo di San Bartolomeo hermitage trail. Moderate.", it:"Sentiero dell'eremo di San Bartolomeo. Difficoltà media.", de:"Weg zur Einsiedelei Eremo di San Bartolomeo. Mittelschwer.", fr:"Sentier de l'ermitage Eremo di San Bartolomeo. Modéré."} },
        { d:4, title:{en:"Blockhaus + home", it:"Blockhaus + rientro", de:"Blockhaus + Heimreise", fr:"Blockhaus + retour"}, txt:{en:"Easy ridge walk from Blockhaus plateau. Panoramic drive home.", it:"Facile camminata di cresta dall'altopiano di Blockhaus. Rientro panoramico in auto.", de:"Leichte Gratwanderung von der Blockhaus-Hochebene. Panoramafahrt nach Hause.", fr:"Balade facile sur la crête depuis le plateau de Blockhaus. Retour panoramique en voiture."} }
      ]
    },
    week: {
      title:{en:"Adventure Week", it:"Settimana d'avventura", de:"Abenteuerwoche", fr:"Semaine d'aventure"}, icon:"ti-mountain",
      desc:{en:"The complete Apennine challenge — Gran Sasso, Maiella, National Park", it:"La sfida completa dell'Appennino — Gran Sasso, Maiella, Parco Nazionale", de:"Die komplette Apennin-Herausforderung — Gran Sasso, Maiella, Nationalpark", fr:"Le défi apenninique complet — Gran Sasso, Maiella, Parc National"},
      days:[
        { d:1, title:{en:"Arrive L'Aquila", it:"Arrivo a L'Aquila", de:"Ankunft L'Aquila", fr:"Arrivée à L'Aquila"}, txt:{en:"City evening. Rest.", it:"Serata in città. Riposo.", de:"Abend in der Stadt. Ausruhen.", fr:"Soirée en ville. Repos."} },
        { d:2, title:{en:"Corno Grande", it:"Corno Grande", de:"Corno Grande", fr:"Corno Grande"}, txt:{en:"Gran Sasso summit day. 2,912m.", it:"Giornata di vetta al Gran Sasso. 2.912 m.", de:"Gipfeltag am Gran Sasso. 2.912 m.", fr:"Journée de sommet au Gran Sasso. 2 912 m."} },
        { d:3, title:{en:"Rest · Sagittario gorge", it:"Riposo · Gole del Sagittario", de:"Ruhetag · Sagittario-Schlucht", fr:"Repos · gorges du Sagittario"}, txt:{en:"Easy afternoon walk in the canyon.", it:"Facile passeggiata pomeridiana nel canyon.", de:"Leichter Nachmittagsspaziergang im Canyon.", fr:"Balade facile l'après-midi dans le canyon."} },
        { d:4, title:{en:"Monte Marsicano", it:"Monte Marsicano", de:"Monte Marsicano", fr:"Monte Marsicano"}, txt:{en:"National Park ridge. 2,245m. Chamois and eagles.", it:"Cresta del Parco Nazionale. 2.245 m. Camosci e aquile.", de:"Grat im Nationalpark. 2.245 m. Gämsen und Adler.", fr:"Crête du Parc National. 2 245 m. Chamois et aigles."} },
        { d:5, title:{en:"Maiella: Monte Amaro", it:"Maiella: Monte Amaro", de:"Maiella: Monte Amaro", fr:"Maiella : Monte Amaro"}, txt:{en:"The big Maiella summit. 2,793m. 8–10 hours.", it:"La grande vetta della Maiella. 2.793 m. 8–10 ore.", de:"Der große Maiella-Gipfel. 2.793 m. 8–10 Stunden.", fr:"Le grand sommet de la Maiella. 2 793 m. 8–10 heures."} },
        { d:6, title:{en:"Eremo di San Bartolomeo", it:"Eremo di San Bartolomeo", de:"Eremo di San Bartolomeo", fr:"Eremo di San Bartolomeo"}, txt:{en:"Hermitage canyon trail. Medieval atmosphere.", it:"Sentiero dell'eremo nel canyon. Atmosfera medievale.", de:"Einsiedelei-Weg im Canyon. Mittelalterliche Atmosphäre.", fr:"Sentier de l'ermitage dans le canyon. Atmosphère médiévale."} },
        { d:7, title:{en:"Last walk + depart", it:"Ultima camminata + partenza", de:"Letzte Wanderung + Abreise", fr:"Dernière marche + départ"}, txt:{en:"Blockhaus easy ridge walk. Scenic drive. Depart.", it:"Facile camminata di cresta a Blockhaus. Strada panoramica. Partenza.", de:"Leichte Gratwanderung am Blockhaus. Landschaftsfahrt. Abreise.", fr:"Balade facile sur la crête de Blockhaus. Route pittoresque. Départ."} }
      ]
    }
  },
  food: {
    weekend: {
      title:{en:"Food Weekend", it:"Weekend gastronomico", de:"Genuss-Wochenende", fr:"Week-end gourmand"}, icon:"ti-tools-kitchen-2",
      desc:{en:"The best of Abruzzese cuisine in 2 days", it:"Il meglio della cucina abruzzese in 2 giorni", de:"Das Beste der abruzzesischen Küche in 2 Tagen", fr:"Le meilleur de la cuisine des Abruzzes en 2 jours"},
      days:[
        { d:1, title:{en:"Pescara · Coast", it:"Pescara · Costa", de:"Pescara · Küste", fr:"Pescara · Côte"}, txt:{en:"Brodetto di pesce at a trabocco. Fresh fish market visit. Arrosticini evening by the grill.", it:"Brodetto di pesce in un trabocco. Visita al mercato del pesce fresco. Serata di arrosticini alla brace.", de:"Brodetto di pesce an einem Trabocco. Besuch des frischen Fischmarkts. Arrosticini-Abend am Grill.", fr:"Brodetto di pesce dans un trabocco. Visite du marché aux poissons frais. Soirée arrosticini au gril."} },
        { d:2, title:{en:"L'Aquila · Saffron", it:"L'Aquila · Zafferano", de:"L'Aquila · Safran", fr:"L'Aquila · Safran"}, txt:{en:"Navelli saffron farm visit. Pasta alla chitarra lunch. Confetti shopping in Sulmona.", it:"Visita a un'azienda di zafferano a Navelli. Pranzo con pasta alla chitarra. Confetti da comprare a Sulmona.", de:"Besuch eines Safranhofs in Navelli. Mittagessen mit Pasta alla chitarra. Confetti-Einkauf in Sulmona.", fr:"Visite d'une ferme de safran à Navelli. Déjeuner de pasta alla chitarra. Achat de confetti à Sulmona."} }
      ]
    },
    short: {
      title:{en:"Food 4 Days", it:"4 giorni gastronomici", de:"Genuss 4 Tage", fr:"4 jours gourmands"}, icon:"ti-tools-kitchen-2",
      desc:{en:"Markets, producers, sagre and great restaurants", it:"Mercati, produttori, sagre e grandi ristoranti", de:"Märkte, Produzenten, Sagre und großartige Restaurants", fr:"Marchés, producteurs, sagre et grands restaurants"},
      days:[
        { d:1, title:{en:"Pescara seafood", it:"Pescara e il pesce", de:"Pescara Meeresfrüchte", fr:"Pescara fruits de mer"}, txt:{en:"Trabocco lunch. Adriatic fish market. Brodetto dinner.", it:"Pranzo in un trabocco. Mercato del pesce adriatico. Cena con brodetto.", de:"Mittagessen im Trabocco. Adriatischer Fischmarkt. Brodetto zum Abendessen.", fr:"Déjeuner dans un trabocco. Marché aux poissons adriatique. Dîner de brodetto."} },
        { d:2, title:{en:"L'Aquila saffron", it:"Zafferano dell'Aquila", de:"L'Aquila Safran", fr:"Safran de L'Aquila"}, txt:{en:"Navelli farm. Chitarra pasta lunch. Fontana 99 Cannelle.", it:"Azienda di Navelli. Pranzo con pasta alla chitarra. Fontana delle 99 Cannelle.", de:"Hof in Navelli. Mittagessen mit Chitarra-Pasta. Fontana delle 99 Cannelle.", fr:"Ferme de Navelli. Déjeuner de pâtes alla chitarra. Fontana delle 99 Cannelle."} },
        { d:3, title:{en:"Sulmona sweets", it:"Dolci di Sulmona", de:"Süßes aus Sulmona", fr:"Douceurs de Sulmona"}, txt:{en:"Confetti factories. Agnello cacio e ova at a trattoria.", it:"Fabbriche di confetti. Agnello cacio e ova in trattoria.", de:"Confetti-Manufakturen. Agnello cacio e ova in einer Trattoria.", fr:"Fabriques de confetti. Agnello cacio e ova dans une trattoria."} },
        { d:4, title:{en:"Vasto wine + coast", it:"Vasto vino + costa", de:"Vasto Wein + Küste", fr:"Vasto vin + côte"}, txt:{en:"Winery visit. Trabocco lunch. Fresh fish dinner.", it:"Visita in cantina. Pranzo in un trabocco. Cena di pesce fresco.", de:"Weingutbesuch. Mittagessen im Trabocco. Abendessen mit frischem Fisch.", fr:"Visite d'un domaine viticole. Déjeuner dans un trabocco. Dîner de poisson frais."} }
      ]
    },
    week: {
      title:{en:"Food Week", it:"Settimana gastronomica", de:"Genusswoche", fr:"Semaine gourmande"}, icon:"ti-tools-kitchen-2",
      desc:{en:"Complete Abruzzo gastronomy tour — producers, markets, sagre", it:"Tour gastronomico completo dell'Abruzzo — produttori, mercati, sagre", de:"Komplette Gastronomie-Tour durch die Abruzzen — Produzenten, Märkte, Sagre", fr:"Circuit gastronomique complet des Abruzzes — producteurs, marchés, sagre"},
      days:[
        { d:1, title:{en:"Arrive Pescara", it:"Arrivo a Pescara", de:"Ankunft Pescara", fr:"Arrivée à Pescara"}, txt:{en:"First arrosticini experience. Welcome dinner.", it:"Primo assaggio di arrosticini. Cena di benvenuto.", de:"Erstes Arrosticini-Erlebnis. Willkommensessen.", fr:"Première expérience d'arrosticini. Dîner de bienvenue."} },
        { d:2, title:{en:"Trabocchi coast", it:"Costa dei Trabocchi", de:"Trabocchi-Küste", fr:"Côte des Trabocchi"}, txt:{en:"Trabocco lunch. Fish market. Brodetto.", it:"Pranzo in un trabocco. Mercato del pesce. Brodetto.", de:"Mittagessen im Trabocco. Fischmarkt. Brodetto.", fr:"Déjeuner dans un trabocco. Marché aux poissons. Brodetto."} },
        { d:3, title:{en:"Vasto wine country", it:"Vasto e le vigne", de:"Vasto Weinland", fr:"Vasto pays du vin"}, txt:{en:"Winery visits. Olive mill tour.", it:"Visite in cantina. Tour di un frantoio.", de:"Weingutbesuche. Besichtigung einer Ölmühle.", fr:"Visites de domaines viticoles. Visite d'un moulin à huile."} },
        { d:4, title:{en:"Sulmona", it:"Sulmona", de:"Sulmona", fr:"Sulmona"}, txt:{en:"Confetti tours. Roman history. Mountain trattoria.", it:"Tour dei confetti. Storia romana. Trattoria di montagna.", de:"Confetti-Touren. Römische Geschichte. Berg-Trattoria.", fr:"Circuits des confetti. Histoire romaine. Trattoria de montagne."} },
        { d:5, title:{en:"L'Aquila & saffron", it:"L'Aquila e lo zafferano", de:"L'Aquila & Safran", fr:"L'Aquila & safran"}, txt:{en:"Navelli farm. Gourmet saffron dinner.", it:"Azienda di Navelli. Cena gourmet allo zafferano.", de:"Hof in Navelli. Gourmet-Safran-Abendessen.", fr:"Ferme de Navelli. Dîner gastronomique au safran."} },
        { d:6, title:{en:"Truffle hunting", it:"Caccia al tartufo", de:"Trüffelsuche", fr:"Chasse à la truffe"}, txt:{en:"Guided hunt with Lagotto dogs in the Majella.", it:"Caccia guidata con cani lagotto nella Majella.", de:"Geführte Suche mit Lagotto-Hunden in der Majella.", fr:"Chasse guidée avec des chiens Lagotto dans la Majella."} },
        { d:7, title:{en:"Cheese + depart", it:"Formaggi + partenza", de:"Käse + Abreise", fr:"Fromages + départ"}, txt:{en:"Farindola pecorino producer visit. Depart.", it:"Visita a un produttore di pecorino di Farindola. Partenza.", de:"Besuch eines Pecorino-Produzenten in Farindola. Abreise.", fr:"Visite d'un producteur de pecorino de Farindola. Départ."} }
      ]
    }
  },
  culture: {
    weekend: {
      title:{en:"Culture Weekend", it:"Weekend culturale", de:"Kultur-Wochenende", fr:"Week-end culturel"}, icon:"ti-building-castle",
      desc:{en:"Medieval villages and castles in 2 unforgettable days", it:"Borghi medievali e castelli in 2 giorni indimenticabili", de:"Mittelalterliche Dörfer und Burgen in 2 unvergesslichen Tagen", fr:"Villages médiévaux et châteaux en 2 jours inoubliables"},
      days:[
        { d:1, title:{en:"Santo Stefano + Rocca Calascio", it:"Santo Stefano + Rocca Calascio", de:"Santo Stefano + Rocca Calascio", fr:"Santo Stefano + Rocca Calascio"}, txt:{en:"Medieval lanes of Santo Stefano. Castle sunset photography. Albergo diffuso dinner.", it:"Vicoli medievali di Santo Stefano. Foto del castello al tramonto. Cena in albergo diffuso.", de:"Mittelalterliche Gassen von Santo Stefano. Fotografieren der Burg bei Sonnenuntergang. Abendessen im Albergo Diffuso.", fr:"Ruelles médiévales de Santo Stefano. Photos du château au coucher du soleil. Dîner en albergo diffuso."} },
        { d:2, title:{en:"Pacentro + Sulmona", it:"Pacentro + Sulmona", de:"Pacentro + Sulmona", fr:"Pacentro + Sulmona"}, txt:{en:"Madonna's ancestral village. Roman Sulmona. Confetti shopping.", it:"Il borgo degli antenati di Madonna. La Sulmona romana. Confetti da comprare.", de:"Das Ahnendorf von Madonna. Das römische Sulmona. Confetti-Einkauf.", fr:"Le village ancestral de Madonna. La Sulmona romaine. Achat de confetti."} }
      ]
    },
    short: {
      title:{en:"Culture 4 Days", it:"4 giorni di cultura", de:"Kultur 4 Tage", fr:"4 jours de culture"}, icon:"ti-building-castle",
      desc:{en:"Villages, castles, history and authentic traditions", it:"Borghi, castelli, storia e tradizioni autentiche", de:"Dörfer, Burgen, Geschichte und authentische Traditionen", fr:"Villages, châteaux, histoire et traditions authentiques"},
      days:[
        { d:1, title:{en:"L'Aquila city", it:"Città dell'Aquila", de:"Stadt L'Aquila", fr:"Ville de L'Aquila"}, txt:{en:"Basilica di Collemaggio. 99 Cannelle. National Museum mammoth.", it:"Basilica di Collemaggio. 99 Cannelle. Il mammut del Museo Nazionale.", de:"Basilica di Collemaggio. 99 Cannelle. Mammut im Nationalmuseum.", fr:"Basilique de Collemaggio. 99 Cannelle. Le mammouth du Musée National."} },
        { d:2, title:{en:"Santo Stefano + Calascio", it:"Santo Stefano + Calascio", de:"Santo Stefano + Calascio", fr:"Santo Stefano + Calascio"}, txt:{en:"Medieval village immersion. Highest Apennine castle.", it:"Immersione nel borgo medievale. Il castello più alto dell'Appennino.", de:"Eintauchen ins mittelalterliche Dorf. Die höchste Burg des Apennins.", fr:"Immersion dans le village médiéval. Le château le plus haut des Apennins."} },
        { d:3, title:{en:"Sulmona + Pacentro", it:"Sulmona + Pacentro", de:"Sulmona + Pacentro", fr:"Sulmona + Pacentro"}, txt:{en:"Roman city. Madonna's village. Confetti factories.", it:"Città romana. Il borgo di Madonna. Fabbriche di confetti.", de:"Römische Stadt. Madonnas Dorf. Confetti-Manufakturen.", fr:"Cité romaine. Le village de Madonna. Fabriques de confetti."} },
        { d:4, title:{en:"Castelli ceramics", it:"Ceramiche di Castelli", de:"Keramik aus Castelli", fr:"Céramiques de Castelli"}, txt:{en:"Maiolica museum. Artisan workshops. Gran Sasso views.", it:"Museo della maiolica. Botteghe artigiane. Vista sul Gran Sasso.", de:"Majolika-Museum. Handwerkswerkstätten. Blick auf den Gran Sasso.", fr:"Musée de la majolique. Ateliers d'artisans. Vues sur le Gran Sasso."} }
      ]
    },
    week: {
      title:{en:"Culture Week", it:"Settimana culturale", de:"Kulturwoche", fr:"Semaine culturelle"}, icon:"ti-building-castle",
      desc:{en:"Complete historical Abruzzo — villages, castles, archaeology", it:"Abruzzo storico completo — borghi, castelli, archeologia", de:"Historische Abruzzen komplett — Dörfer, Burgen, Archäologie", fr:"Les Abruzzes historiques au complet — villages, châteaux, archéologie"},
      days:[
        { d:1, title:{en:"L'Aquila", it:"L'Aquila", de:"L'Aquila", fr:"L'Aquila"}, txt:{en:"City exploration. Basilica. Museum. Dinner.", it:"Esplorazione della città. Basilica. Museo. Cena.", de:"Stadterkundung. Basilika. Museum. Abendessen.", fr:"Exploration de la ville. Basilique. Musée. Dîner."} },
        { d:2, title:{en:"Santo Stefano", it:"Santo Stefano", de:"Santo Stefano", fr:"Santo Stefano"}, txt:{en:"Medieval immersion. Albergo diffuso.", it:"Immersione medievale. Albergo diffuso.", de:"Mittelalterliches Eintauchen. Albergo Diffuso.", fr:"Immersion médiévale. Albergo diffuso."} },
        { d:3, title:{en:"Rocca Calascio", it:"Rocca Calascio", de:"Rocca Calascio", fr:"Rocca Calascio"}, txt:{en:"Castle at golden hour. Gran Sasso panorama.", it:"Castello all'ora dorata. Panorama sul Gran Sasso.", de:"Burg in der goldenen Stunde. Gran-Sasso-Panorama.", fr:"Château à l'heure dorée. Panorama sur le Gran Sasso."} },
        { d:4, title:{en:"Sulmona", it:"Sulmona", de:"Sulmona", fr:"Sulmona"}, txt:{en:"Roman ruins. Ovid's birthplace. Confetti.", it:"Rovine romane. Città natale di Ovidio. Confetti.", de:"Römische Ruinen. Geburtsort Ovids. Confetti.", fr:"Ruines romaines. Ville natale d'Ovide. Confetti."} },
        { d:5, title:{en:"Chieti", it:"Chieti", de:"Chieti", fr:"Chieti"}, txt:{en:"Roman theatre. Warrior of Capestrano museum.", it:"Teatro romano. Il Guerriero di Capestrano al museo.", de:"Römisches Theater. Museum mit dem Krieger von Capestrano.", fr:"Théâtre romain. Musée du Guerrier de Capestrano."} },
        { d:6, title:{en:"Vasto", it:"Vasto", de:"Vasto", fr:"Vasto"}, txt:{en:"Roman city. Medieval centre. Adriatic.", it:"Città romana. Centro medievale. Adriatico.", de:"Römische Stadt. Mittelalterlicher Ortskern. Adria.", fr:"Cité romaine. Centre médiéval. Adriatique."} },
        { d:7, title:{en:"Castelli + depart", it:"Castelli + partenza", de:"Castelli + Abreise", fr:"Castelli + départ"}, txt:{en:"Ceramics village. Maiolica workshop. Depart.", it:"Il borgo della ceramica. Laboratorio di maiolica. Partenza.", de:"Keramikdorf. Majolika-Werkstatt. Abreise.", fr:"Village de la céramique. Atelier de majolique. Départ."} }
      ]
    }
  },
  cyclist: {
    weekend: {
      title:{en:"Cyclist Weekend", it:"Weekend in bici", de:"Radsport-Wochenende", fr:"Week-end à vélo"}, icon:"ti-bike",
      desc:{en:"Costa dei Trabocchi cycleway — Italy's most scenic coastal ride", it:"Ciclovia della Costa dei Trabocchi — la pedalata costiera più panoramica d'Italia", de:"Radweg der Costa dei Trabocchi — Italiens landschaftlich schönste Küstentour", fr:"Voie cyclable de la Costa dei Trabocchi — la plus belle balade côtière d'Italie"},
      days:[
        { d:1, title:{en:"Ortona → Vasto (42 km)", it:"Ortona → Vasto (42 km)", de:"Ortona → Vasto (42 km)", fr:"Ortona → Vasto (42 km)"}, txt:{en:"Full coastal cycleway — flat, spectacular. Trabocco lunch over the sea. Vasto old town overnight.", it:"Ciclovia costiera completa — pianeggiante, spettacolare. Pranzo in un trabocco sul mare. Pernottamento nel centro storico di Vasto.", de:"Komplette Küstenradroute — flach, spektakulär. Mittagessen im Trabocco über dem Meer. Übernachtung in der Altstadt von Vasto.", fr:"Voie cyclable côtière complète — plate, spectaculaire. Déjeuner dans un trabocco au-dessus de la mer. Nuit dans la vieille ville de Vasto."} },
        { d:2, title:{en:"Vasto + return", it:"Vasto + ritorno", de:"Vasto + Rückweg", fr:"Vasto + retour"}, txt:{en:"Clifftop old town. Punta Aderci nature reserve. Train back to Ortona with bike.", it:"Centro storico sulla scogliera. Riserva naturale di Punta Aderci. Ritorno a Ortona in treno con la bici.", de:"Altstadt auf der Klippe. Naturreservat Punta Aderci. Mit dem Rad per Zug zurück nach Ortona.", fr:"Vieille ville sur la falaise. Réserve naturelle de Punta Aderci. Retour à Ortona en train avec le vélo."} }
      ]
    },
    short: {
      title:{en:"Cyclist 4 Days", it:"4 giorni in bici", de:"Radsport 4 Tage", fr:"4 jours à vélo"}, icon:"ti-bike",
      desc:{en:"Coast + mountains — the full Abruzzo cycling experience", it:"Costa + montagne — l'esperienza ciclistica completa dell'Abruzzo", de:"Küste + Berge — das komplette Rad-Erlebnis der Abruzzen", fr:"Côte + montagnes — l'expérience cycliste complète des Abruzzes"},
      days:[
        { d:1, title:{en:"Costa dei Trabocchi", it:"Costa dei Trabocchi", de:"Costa dei Trabocchi", fr:"Costa dei Trabocchi"}, txt:{en:"Full 42km coastal cycleway. Trabocco lunch.", it:"Ciclovia costiera completa di 42 km. Pranzo in un trabocco.", de:"Komplette 42-km-Küstenradroute. Mittagessen im Trabocco.", fr:"Voie cyclable côtière complète de 42 km. Déjeuner dans un trabocco."} },
        { d:2, title:{en:"Pescara river trail", it:"Ciclabile del fiume Pescara", de:"Pescara-Flussradweg", fr:"Piste cyclable du fleuve Pescara"}, txt:{en:"Easy 25km urban route along the river.", it:"Facile percorso urbano di 25 km lungo il fiume.", de:"Leichte 25-km-Stadtroute entlang des Flusses.", fr:"Parcours urbain facile de 25 km le long du fleuve."} },
        { d:3, title:{en:"Borgo-to-Borgo", it:"Borgo-to-Borgo", de:"Borgo-to-Borgo", fr:"Borgo-to-Borgo"}, txt:{en:"30km loop through Peligna valley villages.", it:"Anello di 30 km tra i borghi della Valle Peligna.", de:"30-km-Rundweg durch die Dörfer des Peligna-Tals.", fr:"Boucle de 30 km à travers les villages de la vallée Peligna."} },
        { d:4, title:{en:"Campo Imperatore", it:"Campo Imperatore", de:"Campo Imperatore", fr:"Campo Imperatore"}, txt:{en:"28km epic climb to 2,130m. The ultimate Abruzzo ride.", it:"Epica salita di 28 km fino a 2.130 m. La pedalata suprema dell'Abruzzo.", de:"Epischer 28-km-Anstieg auf 2.130 m. Die ultimative Radtour der Abruzzen.", fr:"Montée épique de 28 km jusqu'à 2 130 m. La balade ultime des Abruzzes."} }
      ]
    },
    week: {
      title:{en:"Cyclist Week", it:"Settimana in bici", de:"Radsportwoche", fr:"Semaine à vélo"}, icon:"ti-bike",
      desc:{en:"Ultimate Abruzzo cycling tour — coast to summit", it:"Il tour ciclistico definitivo dell'Abruzzo — dalla costa alla vetta", de:"Die ultimative Rad-Tour durch die Abruzzen — von der Küste zum Gipfel", fr:"Le tour cycliste ultime des Abruzzes — de la côte au sommet"},
      days:[
        { d:1, title:{en:"Arrive Pescara", it:"Arrivo a Pescara", de:"Ankunft Pescara", fr:"Arrivée à Pescara"}, txt:{en:"Bike assembly. City ride. Rest.", it:"Montaggio bici. Giro in città. Riposo.", de:"Rad zusammenbauen. Stadtrundfahrt. Ausruhen.", fr:"Montage du vélo. Tour en ville. Repos."} },
        { d:2, title:{en:"Trabocchi coast", it:"Costa dei Trabocchi", de:"Trabocchi-Küste", fr:"Côte des Trabocchi"}, txt:{en:"Full 42km coastal cycleway.", it:"Ciclovia costiera completa di 42 km.", de:"Komplette 42-km-Küstenradroute.", fr:"Voie cyclable côtière complète de 42 km."} },
        { d:3, title:{en:"Rest day", it:"Giorno di riposo", de:"Ruhetag", fr:"Journée de repos"}, txt:{en:"Beach. Recovery. Seafood lunch.", it:"Spiaggia. Recupero. Pranzo di pesce.", de:"Strand. Erholung. Fisch-Mittagessen.", fr:"Plage. Récupération. Déjeuner de fruits de mer."} },
        { d:4, title:{en:"River trail", it:"Ciclabile del fiume", de:"Flussradweg", fr:"Piste du fleuve"}, txt:{en:"Pescara flat route. 25km.", it:"Percorso pianeggiante di Pescara. 25 km.", de:"Flache Route von Pescara. 25 km.", fr:"Parcours plat de Pescara. 25 km."} },
        { d:5, title:{en:"Borgo-to-Borgo", it:"Borgo-to-Borgo", de:"Borgo-to-Borgo", fr:"Borgo-to-Borgo"}, txt:{en:"Village loop. 30km. Lunch at a trattoria.", it:"Anello dei borghi. 30 km. Pranzo in trattoria.", de:"Dörfer-Rundweg. 30 km. Mittagessen in einer Trattoria.", fr:"Boucle des villages. 30 km. Déjeuner dans une trattoria."} },
        { d:6, title:{en:"Campo Imperatore", it:"Campo Imperatore", de:"Campo Imperatore", fr:"Campo Imperatore"}, txt:{en:"The big climb. 28km to 2,130m.", it:"La grande salita. 28 km fino a 2.130 m.", de:"Der große Anstieg. 28 km auf 2.130 m.", fr:"La grande montée. 28 km jusqu'à 2 130 m."} },
        { d:7, title:{en:"Majella road", it:"Strada della Majella", de:"Majella-Straße", fr:"Route de la Majella"}, txt:{en:"65km panoramic mountain loop. Depart.", it:"Anello panoramico di montagna di 65 km. Partenza.", de:"65-km-Panorama-Bergrundweg. Abreise.", fr:"Boucle de montagne panoramique de 65 km. Départ."} }
      ]
    }
  }
};
