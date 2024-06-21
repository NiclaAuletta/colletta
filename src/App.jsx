import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO IL COMPONENTE NAVBAR
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <>
      {/*MENU' DI NAVIGAZIONE*/}
      <header>
        <Navbar/>
      </header>

      <main>
        {/*INDICAZIONE DEL PROGETTO IN CORSO*/}
        <h2>MISSIONE IN CORSO</h2>
        <h3>Ristrutturiamo il parco giochi</h3>

        {/*DESCRIZIONE DEL PROGETTO*/}
        <p>
          Un <strong>parco giochi </strong>è un'area progettata appositamente per il divertimento e il gioco dei bambini.<br />
          Solitamente, è dotato di diversi tipi di attrezzature e strutture, come altalene, scivoli, arrampicatori e spazi aperti per correre e giocare. <br />
          Sono luoghi fondamentale per lo<strong> sviluppo </strong>fisico, sociale ed emotivo dei bambini, in quanto favoriscono l'attività fisica, l'interazione sociale e la creatività. 
        </p>

        <img src="public/img/parco_giochi.jpeg" alt="" /> 

        <p>
          Ma quando è in condizioni <strong> fatiscenti </strong>, non ha alcuna utilità, anzi peggiora la qualità di vita della comunità locale. </p> 
        <p>
          Quindi è importante intervenire per ripristinarlo in modo che possa continuare a essere un luogo sicuro e divertente per i bambini.
        </p>

        <img src="public/img/parco_giochi_fatiscente.jpeg" alt="" />


        <p>Ecco cosa faremo per ridare una parco giochi bello ai nostri bambini:</p>

        <ol>
          <li>
           <strong> Valutazione dello stato attuale: </strong> <br />
            Faremo un'attenta valutazione delle attrezzature, delle superfici di gioco e di eventuali altri elementi presenti nel parco. Identificheremo le aree che necessitano di riparazioni urgenti o sostituzioni.
          </li>
          <li>
            <strong> Priorità di intervento: </strong> <br />
            Una volta identificate le aree critiche, stabiliremo le priorità di intervento in base alla gravità dei problemi e al budget disponibile.
          </li>
          <li>
            <strong> Riparazioni e sostituzioni: </strong> <br />
            Effettueremo le riparazioni necessarie e sostituiremo le attrezzature danneggiate o pericolose, sempre rispettando gli standard di sicurezza e di accessibilità durante questo processo.
          </li>
          <li>
            <strong> Pulizia e manutenzione: </strong> <br />
            Dopo le riparazioni, ci assicureremo di pulire e mantenere regolarmente il parco giochi. La manutenzione costante può contribuire a preservare le attrezzature e a garantire la sicurezza dei bambini nel tempo.
          </li>
          <li>
            <strong>Coinvolgimento della comunità:</strong> <br />
            Vi coinvolgeremo attivamente nel processo di ripristino del parco giochi. Organizzeremo giornate di volontariato per pulire e riparare il parco, e chiederemo il vostro feedback e supporto durante tutto il processo.
          </li>
          <li>
            <strong> Innovazione e miglioramento: </strong> <br />
            Consideriamo anche l'opportunità di apportare miglioramenti al parco giochi durante il processo di ristrutturazione. <br />
            Potremmo creare nuove aree tematiche per rendere il parco ancora più attraente per i bambini e le loro famiglie.
          </li>
        </ol>

        <p>
          Ristrutturare un parco giochi in condizioni fatiscenti richiede tempo, risorse e impegno, ma può avere un <strong> impatto significativo </strong> sulla qualità della vita della comunità locale e sull'esperienza di gioco dei bambini.
        </p>

      </main>  

    </>
  )
}

export default App;
