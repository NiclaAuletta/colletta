import '../index.css';

import React from 'react';

//IMPORTO LO STYLESHEET
import '../assets/css/style.scss';

//IMPORTO LE FUNZIONI UTILI A SIMULARE IL CAMBIO PAGINE DI UNA SPA:
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        {/*TITOLO E SOTTOTITOLO DELL'INTERO SITO WEB*/}
        <h1>AREA SOCIALE</h1>
        <h3>Per il bene della comunità e personale</h3>

        {/*MENU' DI NAVIGAZIONE CONTENENTE I LINK ALLE PAGINE DEL SITO WEB*/}
        <nav className="nav">
            {/*Ogni list item contiene l'elemento Link, con attributo to identico al path indicato nel router. */}
            <ul>
                {/*LINK ALLA HOMEPAGE*/}
                <li>
                    <Link to = {"/"}> HOME </Link>
                </li>
                {/*LINK ALLA SEZIONE CHI SIAMO*/}
                <li>
                    <Link to = {"/chi_siamo"}> CHI SIAMO </Link>
                </li>
                {/*LINK ALLA SEZIONE BLOG*/}
                <li>
                    <Link to = {"/il_blog"}> BLOG </Link>
                </li>
                {/*LINK ALLA SEZIONE DONA*/}
                <li>
                    <Link to = {"/dona"}> DONA </Link>
                </li>
            </ul>
        </nav>  
    </>
  )
}

export default Navbar;

