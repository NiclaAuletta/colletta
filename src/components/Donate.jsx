import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO IL COMPONENTE NAVBAR
import Navbar from "./Navbar.jsx";

//import React, { useState } from 'react';

const Donate = () => {

    /*const [val, setVal] = useState(0);
    const [count, setCount] = useState(0);//dovrebbe corrispondere alla somma salvata in memoria

    const handleClick = () =>{
        setCount(count + val);
    }

    const handleChange= (e)=>{
        setVal(parseInt(e.target.value));
    }*/

    //controllo che il nome e cognome contengano solo caratteri alfabetici
    const handleKeyDown = (event) => {
        return /[a-zÀ-ÿ\s'ç]/i.test(event.key);
    }; 

  return (

    <>
        {/*MENU' DI NAVIGAZIONE*/}
        <header>
            <Navbar/>
        </header>

        <main>
            
            {/*INVITO A DONARE E FINE ULTIMO*/}
            <h2>DONA</h2>
            <h3>Per un futuro migliore della nostra comunità cittadina</h3>

            {/*<p>Grazie a voi abbiamo a disposizione € {count}</p>*/}

            {/*MODULO DA COMPILARE*/}
            <form>
                <fieldset>

                    <legend>Compila i dati per donare:</legend>
                    {/*NOME DEL DONATORE*/}
                    <label>
                        NOME
                        <input type="text" id="name" onKeyDown={handleKeyDown} />
                    </label>

                    {/*CONOME DEL DONATORE*/}
                    <label>
                        COGNOME
                        <input type="text" id="surname" onKeyDown={handleKeyDown} />
                    </label> 

                    {/*INDIRIZZO EMAIL DEL DONATORE*/}
                    <label>
                        EMAIL
                        <input type="email" id="email" />
                    </label>

                    {/*IMPORTO DELLA DONAZIONE*/}
                    <label>
                        IMPORTO
                        <input type="number" id="quantity" min={5} step={5} required/> {/*onChange={handleChange}*/}
                    </label>

                    {/*TASTO PER INVIARE DONAZIONE*/}
                    <button type = "button">DONA</button> {/* onClick={handleClick} */}
                    {/*TASTO PER RIPRISTINARE I DATI COMPILATI*/}
                    <button type="reset">RESET</button>

                </fieldset>
            </form>

        </main>
    </>
  )
}

export default Donate;