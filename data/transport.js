/* Abruzzo Wild & Authentic - data module: TRANSPORT
   Content arrays extracted from transport.html (verbatim). Single source of truth,
   loaded via <script src="data/transport.js"> before the page script.
   Future: fed/refreshed by the ICH engine. */
window.AW = window.AW || {};

window.AW.airports = [
  {
    name:"Pescara Airport", iata:"PSR",
    dist:{en:"City centre: 3 km", it:"Centro città: 3 km", de:"Stadtzentrum: 3 km", fr:"Centre-ville : 3 km"},
    desc:{en:"Most convenient for Abruzzo. Direct flights (Ryanair) from London Stansted, Brussels Charleroi, Frankfurt Hahn, Barcelona Girona (seasonal), Düsseldorf Weeze. Car hire on site.", it:"Il più comodo per l'Abruzzo. Voli diretti (Ryanair) da London Stansted, Brussels Charleroi, Frankfurt Hahn, Barcelona Girona (stagionale), Düsseldorf Weeze. Autonoleggio in loco.", de:"Am bequemsten für die Abruzzen. Direktflüge (Ryanair) von London Stansted, Brussels Charleroi, Frankfurt Hahn, Barcelona Girona (saisonal), Düsseldorf Weeze. Autovermietung vor Ort.", fr:"Le plus pratique pour les Abruzzes. Vols directs (Ryanair) depuis London Stansted, Brussels Charleroi, Frankfurt Hahn, Barcelona Girona (saisonnier), Düsseldorf Weeze. Location de voitures sur place."},
    tags:[
      {en:"Car hire: all major brands", it:"Autonoleggio: tutte le grandi marche", de:"Autovermietung: alle großen Marken", fr:"Location : toutes les grandes marques"},
      {en:"Bus to centre: 30 min", it:"Bus per il centro: 30 min", de:"Bus ins Zentrum: 30 Min.", fr:"Bus vers le centre : 30 min"},
      {en:"Taxi to centre: €10–12", it:"Taxi per il centro: €10–12", de:"Taxi ins Zentrum: €10–12", fr:"Taxi vers le centre : €10–12"},
      {en:"Terminal: compact and easy", it:"Terminal: compatto e comodo", de:"Terminal: kompakt und einfach", fr:"Terminal : compact et pratique"}
    ]
  },
  {
    name:"Rome Fiumicino", iata:"FCO",
    dist:{en:"L'Aquila: 1h 30 · Pescara: 2h 30", it:"L'Aquila: 1h 30 · Pescara: 2h 30", de:"L'Aquila: 1 Std. 30 · Pescara: 2 Std. 30", fr:"L'Aquila : 1h 30 · Pescara : 2h 30"},
    desc:{en:"Best for international connections. All major airlines. Drive direct on A24/A25 motorway. Car hire strongly recommended over public transport.", it:"Il migliore per i collegamenti internazionali. Tutte le principali compagnie. Si arriva diretti in autostrada A24/A25. Autonoleggio caldamente consigliato rispetto ai mezzi pubblici.", de:"Am besten für internationale Verbindungen. Alle großen Fluggesellschaften. Direkte Anfahrt über die Autobahn A24/A25. Mietwagen wird gegenüber öffentlichen Verkehrsmitteln dringend empfohlen.", fr:"Idéal pour les liaisons internationales. Toutes les grandes compagnies. Accès direct par l'autoroute A24/A25. Location de voiture fortement conseillée plutôt que les transports publics."},
    tags:[
      {en:"Major international hub", it:"Grande hub internazionale", de:"Großes internationales Drehkreuz", fr:"Grand hub international"},
      {en:"All major car hire brands", it:"Tutte le grandi marche di autonoleggio", de:"Alle großen Autovermietungsmarken", fr:"Toutes les grandes marques de location"},
      {en:"Drive to L'Aquila: 1h 30", it:"In auto verso L'Aquila: 1h 30", de:"Mit dem Auto nach L'Aquila: 1 Std. 30", fr:"En voiture vers L'Aquila : 1h 30"},
      {en:"Drive to Pescara: 2h 30", it:"In auto verso Pescara: 2h 30", de:"Mit dem Auto nach Pescara: 2 Std. 30", fr:"En voiture vers Pescara : 2h 30"}
    ]
  },
  {
    name:"Rome Ciampino", iata:"CIA",
    dist:{en:"Abruzzo: 1h 45 – 2h", it:"Abruzzo: 1h 45 – 2h", de:"Abruzzen: 1 Std. 45 – 2 Std.", fr:"Abruzzes : 1h 45 – 2h"},
    desc:{en:"Low-cost hub — Ryanair and Wizz Air. Cheaper fares but factor in ring-road traffic. Car hire on site. Avoid Monday and Friday peak hours.", it:"Hub low-cost — Ryanair e Wizz Air. Tariffe più economiche ma considera il traffico sul raccordo. Autonoleggio in loco. Evita le ore di punta di lunedì e venerdì.", de:"Low-Cost-Drehkreuz — Ryanair und Wizz Air. Günstigere Tarife, aber Ringstraßenverkehr einkalkulieren. Autovermietung vor Ort. Stoßzeiten am Montag und Freitag meiden.", fr:"Hub low-cost — Ryanair et Wizz Air. Tarifs moins chers mais tenez compte du trafic sur le périphérique. Location sur place. Évitez les heures de pointe du lundi et du vendredi."},
    tags:[
      {en:"Low-cost terminal", it:"Terminal low-cost", de:"Low-Cost-Terminal", fr:"Terminal low-cost"},
      {en:"Car hire: available", it:"Autonoleggio: disponibile", de:"Autovermietung: verfügbar", fr:"Location : disponible"},
      {en:"Drive to Abruzzo: ~2h", it:"In auto verso l'Abruzzo: ~2h", de:"Mit dem Auto in die Abruzzen: ~2 Std.", fr:"En voiture vers les Abruzzes : ~2h"},
      {en:"Avoid Mon/Fri 7–9am, 5–7pm", it:"Evita lun/ven 7–9 e 17–19", de:"Mo/Fr 7–9 und 17–19 Uhr meiden", fr:"Évitez lun/ven 7h–9h, 17h–19h"}
    ]
  },
  {
    name:"Naples & Bari", iata:"NAP / BRI",
    dist:{en:"Southern Abruzzo: 2–3h", it:"Abruzzo meridionale: 2–3h", de:"Südliche Abruzzen: 2–3 Std.", fr:"Abruzzes du sud : 2–3h"},
    desc:{en:"Good options for southern Abruzzo (Vasto, Lanciano). Naples is 2h from Vasto on the A14. Bari is better for the southern Adriatic coast.", it:"Buone opzioni per l'Abruzzo meridionale (Vasto, Lanciano). Napoli dista 2h da Vasto sull'A14. Bari è migliore per la costa adriatica meridionale.", de:"Gute Optionen für die südlichen Abruzzen (Vasto, Lanciano). Neapel ist 2 Std. von Vasto über die A14 entfernt. Bari eignet sich besser für die südliche Adriaküste.", fr:"Bonnes options pour le sud des Abruzzes (Vasto, Lanciano). Naples est à 2h de Vasto par l'A14. Bari convient mieux pour la côte adriatique méridionale."},
    tags:[
      {en:"For southern Abruzzo only", it:"Solo per l'Abruzzo meridionale", de:"Nur für die südlichen Abruzzen", fr:"Pour le sud des Abruzzes uniquement"},
      {en:"Bari: better for Adriatic coast", it:"Bari: migliore per la costa adriatica", de:"Bari: besser für die Adriaküste", fr:"Bari : mieux pour la côte adriatique"},
      {en:"Naples: A1 then A14", it:"Napoli: A1 poi A14", de:"Neapel: A1, dann A14", fr:"Naples : A1 puis A14"},
      {en:"Check SS16 Adriatica as alternative", it:"Valuta la SS16 Adriatica come alternativa", de:"SS16 Adriatica als Alternative prüfen", fr:"Envisagez la SS16 Adriatica en alternative"}
    ]
  }
];

window.AW.trainRoutes = [
  { from:"Roma Tiburtina",  to:"Pescara Centrale",  time:"3h 00 min", type:"Intercity" },
  { from:"Pescara",         to:"Sulmona",            time:"1h 20 min", type:"Regionale" },
  { from:"Pescara",         to:"Lanciano / Vasto",   time:"45–55 min", type:"Regionale" },
  { from:"Milano Centrale", to:"Pescara",            time:"5h 30 min", type:"Frecciabianca" },
  { from:"Pescara",         to:"Chieti",             time:"25 min",    type:"Regionale" },
  { from:"Roma Tiburtina",  to:"L'Aquila",           time:"1h 40 min", type:{en:"Bus (A24 motorway)", it:"Bus (autostrada A24)", de:"Bus (Autobahn A24)", fr:"Bus (autoroute A24)"} }
];

window.AW.carRoutes = [
  { from:"Roma (GRA)",  to:"L'Aquila",  time:"1h 20 min", type:{en:"A24 Motorway", it:"Autostrada A24", de:"Autobahn A24", fr:"Autoroute A24"} },
  { from:"Roma (GRA)",  to:"Pescara",   time:"2h 30 min", type:{en:"A25 Motorway", it:"Autostrada A25", de:"Autobahn A25", fr:"Autoroute A25"} },
  { from:"Roma",        to:"Teramo",    time:"1h 50 min", type:"A24 + A24dir" },
  { from:"Milano",      to:"Pescara",   time:"5h 00 min", type:"A1 + A25" },
  { from:"Napoli",      to:"Vasto",     time:"2h 30 min", type:"A1 + A14" },
  { from:"Pescara",     to:"L'Aquila",  time:"1h 15 min", type:{en:"A25 motorway", it:"Autostrada A25", de:"Autobahn A25", fr:"Autoroute A25"} }
];

window.AW.aroundData = [
  {
    icon:"ti-car",
    name:{en:"Car Hire", it:"Autonoleggio", de:"Autovermietung", fr:"Location de voiture"},
    desc:{en:"Essential for exploring trails, villages and thermal baths. Available at Pescara Airport and city. Book well in advance in July–August.", it:"Indispensabile per esplorare sentieri, borghi e terme. Disponibile all'aeroporto di Pescara e in città. Prenota con largo anticipo a luglio–agosto.", de:"Unverzichtbar, um Wanderwege, Dörfer und Thermen zu erkunden. Verfügbar am Flughafen Pescara und in der Stadt. Im Juli–August rechtzeitig buchen.", fr:"Indispensable pour explorer sentiers, villages et thermes. Disponible à l'aéroport de Pescara et en ville. Réservez bien à l'avance en juillet–août."},
    tip:{en:"Best value: book online before arrival. Check terms for mountain unpaved roads.", it:"Conviene: prenota online prima dell'arrivo. Verifica le condizioni per le strade sterrate di montagna.", de:"Am günstigsten: online vor der Ankunft buchen. Bedingungen für unbefestigte Bergstraßen prüfen.", fr:"Le meilleur prix : réservez en ligne avant l'arrivée. Vérifiez les conditions pour les routes de montagne non goudronnées."}
  },
  {
    icon:"ti-bus",
    name:{en:"ARPA Buses", it:"Autobus ARPA", de:"ARPA-Busse", fr:"Bus ARPA"},
    desc:{en:"Regional buses connect all main towns. Useful for the L'Aquila–Sulmona corridor and coastal cities. Not useful for villages or trails.", it:"Gli autobus regionali collegano tutte le città principali. Utili per la tratta L'Aquila–Sulmona e le città costiere. Non utili per borghi o sentieri.", de:"Regionalbusse verbinden alle wichtigen Städte. Nützlich für die Strecke L'Aquila–Sulmona und die Küstenstädte. Für Dörfer oder Wanderwege ungeeignet.", fr:"Les bus régionaux relient toutes les grandes villes. Utiles pour l'axe L'Aquila–Sulmona et les villes côtières. Inutiles pour les villages ou les sentiers."},
    tip:{en:"Download ARPA timetables at arpaonline.it — app not available in English.", it:"Scarica gli orari ARPA su arpaonline.it — app non disponibile in inglese.", de:"ARPA-Fahrpläne auf arpaonline.it herunterladen — App nicht auf Englisch verfügbar.", fr:"Téléchargez les horaires ARPA sur arpaonline.it — appli non disponible en anglais."}
  },
  {
    icon:"ti-train",
    name:{en:"Regional Trains", it:"Treni regionali", de:"Regionalzüge", fr:"Trains régionaux"},
    desc:{en:"Trenitalia connects Pescara, Sulmona, Lanciano, Vasto and Chieti. Useful as a base-to-base link between cities.", it:"Trenitalia collega Pescara, Sulmona, Lanciano, Vasto e Chieti. Utili come collegamento tra le città.", de:"Trenitalia verbindet Pescara, Sulmona, Lanciano, Vasto und Chieti. Nützlich als Verbindung zwischen den Städten.", fr:"Trenitalia relie Pescara, Sulmona, Lanciano, Vasto et Chieti. Utiles comme liaison entre les villes."},
    tip:{en:"Buy on Trenitalia app. Always validate the ticket at yellow machines before boarding.", it:"Acquista sull'app Trenitalia. Convalida sempre il biglietto alle macchinette gialle prima di salire.", de:"In der Trenitalia-App kaufen. Ticket immer an den gelben Automaten vor dem Einsteigen entwerten.", fr:"Achetez sur l'appli Trenitalia. Validez toujours le billet aux bornes jaunes avant de monter."}
  },
  {
    icon:"ti-taxi",
    name:{en:"Taxi & Transfers", it:"Taxi e transfer", de:"Taxi & Transfers", fr:"Taxis et transferts"},
    desc:{en:"Available in all cities. For trailhead transfers book local operators in L'Aquila or Sulmona. Groups: shared airport transfers are cost-effective.", it:"Disponibili in tutte le città. Per i transfer verso i punti di partenza dei sentieri prenota operatori locali a L'Aquila o Sulmona. Gruppi: i transfer condivisi dall'aeroporto sono convenienti.", de:"In allen Städten verfügbar. Für Transfers zu Wanderausgangspunkten lokale Anbieter in L'Aquila oder Sulmona buchen. Gruppen: gemeinsame Flughafentransfers sind kostengünstig.", fr:"Disponibles dans toutes les villes. Pour les transferts vers les départs de sentiers, réservez des opérateurs locaux à L'Aquila ou Sulmona. Groupes : les transferts partagés depuis l'aéroport sont économiques."},
    tip:{en:"Pre-book airport taxis — metered taxis are not always available at Pescara.", it:"Prenota in anticipo i taxi dall'aeroporto — a Pescara i taxi con tassametro non sono sempre disponibili.", de:"Flughafentaxis vorab buchen — in Pescara sind Taxis mit Taxameter nicht immer verfügbar.", fr:"Réservez les taxis d'aéroport à l'avance — à Pescara, les taxis au compteur ne sont pas toujours disponibles."}
  }
];

window.AW.appsData = [
  {
    icon:"ti-map-2",
    name:"Komoot",
    desc:{en:"Best offline trail maps for Abruzzo. Download the regional pack before visiting — essential above 1,200m where signal drops.", it:"Le migliori mappe offline dei sentieri dell'Abruzzo. Scarica il pacchetto regionale prima di partire — indispensabile oltre i 1.200 m dove manca il segnale.", de:"Die besten Offline-Wanderkarten für die Abruzzen. Laden Sie das Regionalpaket vor der Reise herunter — unverzichtbar über 1.200 m, wo das Signal abbricht.", fr:"Les meilleures cartes de sentiers hors ligne pour les Abruzzes. Téléchargez le pack régional avant de partir — indispensable au-dessus de 1 200 m où le signal disparaît."}
  },
  {
    icon:"ti-route",
    name:"Wikiloc",
    desc:{en:"Community trail maps with GPX tracks. Excellent Abruzzo coverage with user reviews and conditions reports.", it:"Mappe dei sentieri della community con tracce GPX. Ottima copertura dell'Abruzzo con recensioni degli utenti e report sulle condizioni.", de:"Community-Wanderkarten mit GPX-Tracks. Hervorragende Abdeckung der Abruzzen mit Nutzerbewertungen und Zustandsberichten.", fr:"Cartes de sentiers communautaires avec traces GPX. Excellente couverture des Abruzzes avec avis d'utilisateurs et rapports d'état."}
  },
  {
    icon:"ti-train",
    name:"Trenitalia",
    desc:{en:"Official train app for schedules, tickets and real-time updates. Buy and store tickets here — no need to print.", it:"App ufficiale dei treni per orari, biglietti e aggiornamenti in tempo reale. Compra e conserva i biglietti qui — non serve stamparli.", de:"Offizielle Zug-App für Fahrpläne, Tickets und Echtzeit-Updates. Tickets hier kaufen und speichern — kein Ausdruck nötig.", fr:"Appli ferroviaire officielle pour horaires, billets et mises à jour en temps réel. Achetez et conservez vos billets ici — pas besoin d'imprimer."}
  },
  {
    icon:"ti-cloud-rain",
    name:"ARPA Meteo",
    desc:{en:"Abruzzo's official weather service — the most accurate mountain forecasts. Essential for any hiking day above 1,500m.", it:"Il servizio meteo ufficiale dell'Abruzzo — le previsioni di montagna più accurate. Indispensabile per ogni giornata di trekking sopra i 1.500 m.", de:"Der offizielle Wetterdienst der Abruzzen — die genauesten Bergprognosen. Unverzichtbar für jeden Wandertag über 1.500 m.", fr:"Le service météo officiel des Abruzzes — les prévisions de montagne les plus précises. Indispensable pour toute journée de randonnée au-dessus de 1 500 m."}
  }
];

window.AW.emergencies = [
  { num:"112",             desc:{en:"General emergency (police, fire, ambulance)", it:"Emergenza generale (polizia, vigili del fuoco, ambulanza)", de:"Allgemeiner Notruf (Polizei, Feuerwehr, Rettungsdienst)", fr:"Urgence générale (police, pompiers, ambulance)"} },
  { num:"118",             desc:{en:"Medical emergency (calls now routed via 112)", it:"Emergenza sanitaria (le chiamate ora passano dal 112)", de:"Medizinischer Notfall (Anrufe laufen jetzt über 112)", fr:"Urgence médicale (les appels passent désormais par le 112)"} },
  { num:"1515",            desc:{en:"Forest fire — Carabinieri Forestali", it:"Incendi boschivi — Carabinieri Forestali", de:"Waldbrand — Carabinieri Forestali", fr:"Incendie de forêt — Carabinieri Forestali"} },
  { num:"Soccorso Alpino", desc:{en:"Mountain rescue: call 112 and ask for Soccorso Alpino (CNSAS)", it:"Soccorso in montagna: chiama il 112 e chiedi del Soccorso Alpino (CNSAS)", de:"Bergrettung: 112 anrufen und nach dem Soccorso Alpino (CNSAS) fragen", fr:"Secours en montagne : appelez le 112 et demandez le Soccorso Alpino (CNSAS)"} }
];
