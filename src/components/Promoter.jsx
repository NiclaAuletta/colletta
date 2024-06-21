import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO IL COMPONENTE NAVBAR
import Navbar from "./Navbar.jsx";

//IMPORTO IL COMPONENTE PERSON
import Person from "./Person.jsx";

//IMPORTO I DATI RELATIVI AI PROMOTORI
import data from './data/biographies.json';

//IMPORTO
import { useState, useEffect } from 'react';

//IMPORTO L'ELEMENTO LINK
import {Link} from 'react-router-dom';


const Promoter = () => {

  const [people, setPeople] = useState([]);
  useEffect(() => {setPeople(data.people);}, []);

  return (
    <>
        {/*MENU' DI NAVIGAZIONE*/}
        <header>
            <Navbar/>
        </header>

        <main>
            {/*PROMOTER DEL PROGETT0*/}
            <h2>CHI SIAMO</h2>
            <h3>Persone al servizio della comunità</h3>

            {/*CAUSA DELLA FONDAZIONE E SCOPO SOCIALE*/}
            <p>
                Siamo un <strong>gruppo</strong> di persone riunitesi nel 2020, dopo che la pandemia ci ha aperto gli occhi sul valore del tempo e sull'utilità degli spazi pubblici. <br />
                Il nostro <strong>scopo</strong> è quello di fornire alla comunità nuove possibilità di vivere la propria vita insieme, piuttosto che dietro allo schermo.
            </p>

            {/*SEZIONE CONTENENTE LE CARD RELATIVE AI PROMOTORI*/}
            <section className="founders">
                {people.map((person) => ( 
                    /*LINK ALLE BIOGRAFIE DEI SINGOLI PROMOTORI*/
                    <Link to = {"/chi_siamo/"+ person.id} key={person.id}>
                        <Person
                            key={person.id}
                            id = {person.id}
                            name={person.nome}
                            role={person.ruolo}
                            img={person.img}
                            testo={person.testo}
                        />
                    </Link>
                ))}
            </section>
        </main>
    </>
  )
}

export default Promoter
;

