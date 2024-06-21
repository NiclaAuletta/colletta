Realizzazione di un sito web per promuovere una colletta per progetti di ristrutturazione

Il sito in questione contiene le seguenti sezioni:

    - Homepage:
      la descrizione del progetto

    - Chi siamo:
      una pagina chi siamo dedicata al/ai promotore/i del progetto;

    - Blog:
      con alcuni articoli di aggiornamento sullo stato degli investimenti e/o approfondimenti sulla destinazione delle donazioni, racconti “di colore” e altri contenuti che possano “convincere” le persone a partecipare alla realizzazione del progetto;

    - Dona:
      una pagina in cui sia possibile simulare la donazione di denaro e visualizzare il l’ammontare totale delle donazioni.

1.  CREARE CARTELLA

    La prima cosa da fare è stato creare una React App Tramite vite.
    Quindi nel terminale mi sono posizionata nella cartella in cui creare il progetto e ho digitato il seguente comando:

    npm create vite@latest colletta

    Dopodiché ho selezionato il framework js.

    Mella cartella abbiamo:
    - main.jsx 
    - App.jsx un componente relativo alla Homepage
    - src: 
      - assets:
        - css: 
            - style.scss che indica lo stile che devono avere tutti i componenti piuttosto che fare un css per ogni componente, quindi ho eliminato il file app.css
            - components:
              - Navbar.jsx contenente la barra di navigazione
              - Promoter.jsx relativo alla sezione Chi siamo
              - Person.jsx relativa alla card del promotore
              - Biography.jsx relativa al singolo promotore
              - Blog.jsx relativo alla sezione Blog
              - News.jsx relativa alla card dell'articolo
              - Article.jsx relativa al singolo articolo
              - Donate.jsx relativo alla sezione Dona
              - data: 
                - biographies.json: dati relativi ai promotori del progetto
                - articles.json: dati relativi agli articoli del blog
    - public:
        - img: le immagini da includere nel sito

2.  SPA (Single Page Application) in React

    Al fine di simulare il cambio pagine di una SPA si usa il router: la navbar e ogni pagina del sito costituirà un componente. 
    Per far ciò è necessario installare il nodo react-router-dom. quindi chiudo il server e digito il comando:
    
    npm install react-router-dom.

    Il main contiene la funzione ReactDOM che crea un DOM virtuale tutto suo dove applica le modifiche che applichiamo nel DOM e renderizza il dom reale solo nella parte modificata e la funzione root.render <React.StrictMode> che contiene il file App.jsx.
    
    In esso importo le funzioni createBrowserRouter e RouterProvider dal nodo appena installato, oltre a tutti i componenti appena creati, tranne Navbar.
    Infatti creo una costante, chiamata router secondo le best practice e le assegno la funzione createBrowserRouter che prende come parametro un array di corrispondenze tra i path (le url che ci permettono di raggiungere una certa risorsa) e i componenti importati.
    Nell’elemento React.StrictMode al posto di App, metto l'elemento RouterProvider che accetta il router, cioè l’elenco telefonico da consultare.

    In ogni componente creo una constante con il suo stesso nome e alla fine lo esporto tramite export default.

    Nel componente Navbar importo Link da react-router-dom. 
    Nel return quindi inserisco il titolo e il sottotitolo del sito, contenenti il nome della fondazione e la sua missione. 
    Di seguito aggiungo una unordered list di link alle sezioni che devono comporre il sito, inclusa in un tag nav, come il galateo di html5 impone. 
    Più precisamente in ogni list item inserisco l'elemento Link appena importato, con attributo to identico al path indicato nel router, creato nel main.

    Questo componente sarà incluso nella parte iniziale del return di ogni altro componente, all'interno del tag header, cosi che rimanga invariato quando si cambia pagina del sito.
    Sotto quest'ultimo contenitore, ne aggiungo un altro, più precisamente il main che cambierà in base alla sezione del sito. Utilizzo chatGPT per i contenuti testuali del sito.

    Nel componente App inserisco il titolo HOMEPAGE e il sottotitolo che indica il progetto in corso d'opera.
    Di seguito scrivo una serie di paragrafi e immagini che servono a descrivere il progetto, il suo scopo e le sue fasi, quest'ultime in una ordered list.

    Nel componente Promoter inserisco il titolo CHI SIAMO e il sottotitolo che evidenzia che i promoter sono al servizio della comunità.
    Sotto descrivo brevemente la causa scatenante la causa della costituzione fondazione e il suo lo scopo sociale.
    
    Alla fine aggiungo un elemento section contenente, per ogni promotore, un elemento Link.
    Quest'ultimo contiene a sua volta una card, più precisamente il componente Person, contenente la foto e il nome del singolo promotore.
    In questo modo, schiacciandoci sopra, si viene reindirizzati alla sotto sezione contenente la descrizione del promotore in questione, corrispondente al componente Biography.
    Questa sezione contiene titolo e sottotitolo indicanti il nome e ruolo del relativo promotore, la sua foto e un elemento section con al suo interno la sua biografia.

    Nel componente Blog inserisco il titolo BLOG e il sottotitolo che evidenzia che gli articoli sono rivolti alla comunità nel suo insieme.
    
    Alla fine aggiungo un elemento section contenente, per ogni articolo, un elemento Link.
    Quest'ultimo contiene a sua volta una card, più precisamente il componente News, contenente titolo, foto e primi 140 caratteri del singolo articolo.
    In questo modo, schiacciandoci sopra, si viene reindirizzati alla sotto sezione contenente l'articolo in questione, corrispondente al componente Article.
    Questa sezione contiene il titolo, il sottotitolo e la foto del relativo articolo e anche un elemento section contenente il suo contenuto.

    Nel componente  Donate, inserisco il titolo DONA e il sottotitolo che indica l'invito a donare e il fine ultimo della donazione.
    Sotto aggiungo un form con al suo interno un fieldset contenente i seguenti campi di input:
    - nome del donatore
    - cognome del donatore
    - indirizzo email del donatore
    - importo della donazione

    Il nome e il cognome sono input di testo e devono contenere olo caratteri alfabetici. Ciò viene verificato dalla funzione handleKeyDown che entra in azione quando l'utente preme un tasto sulla tastiera.
    L'indirizzo email è un input di tipo email. Questi campi non sono richiesti, in quanto va prevista la possibilità per un utente di fare una donazione anonima.
    L'importo della donazione è l'unico campo richiesto (attributo required) e può essere un multiplo di 5. 
   
    Alla fine metto il bottone DONA per inviare la donazione e RESET per cancellare i dati inseriti.

    
3. COLLEGAMENTO DEL DB
    
    In futuro ho in programma di inserire:
    
    - le “donazioni” in un database insieme a nome, cognome e email dell’utente che le ha effettuate per poterle visualizzare sul sito in ordine decrescente di ammontare.
    - la parte di memorizzazione dei dati (un backend gestito da express)

    Il tutto utilizzando lo stack PERN per la realizzazione del database e della API che fornisce i dati dei finanziamenti;
