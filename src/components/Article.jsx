import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO IL COMPONENTE NAVBAR
import Navbar from "./Navbar.jsx";

//IMPORTO I DATI RELATIVI AGLI ARTICOLI
import data from './data/articles.json';

import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import React from 'react';

const Article = () => {
    
    const {id} = useParams();

    const [info, setInfo] = useState({});
      
    useEffect(() => {
        setInfo(data[id-1])}       
        ,[])
        
    return (
        <>
        {/*MENU' DI NAVIGAZIONE*/}
            <header>
                <Navbar/>
            </header>

            <main>
                {/*TITOLO DELL'ARTICOLO*/}
                <h2>{info.titolo}</h2>
                {/*SOTTOTITOLO DELL'ARTICOLO*/}
                <h3>{info.sottotitolo}</h3>
                {/*FOTO DELL'ARTICOLO*/}
                {/*https://stackoverflow.com/questions/58553309/react-load-images-local-from-json */}
                <img src={`${info.img}`}/>
                {/*CONTENUTO DELL'ARTICOLO*/}
                <section dangerouslySetInnerHTML={{ __html: info.testo }} />
            </main>
        </>);
   
}

export default Article;