import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO IL COMPONENTE NAVBAR
import Navbar from "./Navbar.jsx";

//IMPORTO I DATI RELATIVI AI PROMOTORI
import data from './data/biographies.json';

import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import React from 'react';


const Biography = () => {
    
    const {id} = useParams();

    const [info, setInfo] = useState({});
      
    useEffect(() => {
        setInfo(data.people[id-1])}       
        ,[])


    return (
    <>
        {/*MENU' DI NAVIGAZIONE*/}
        <header>
            <Navbar/>
        </header>

        <main>
            {/*NOME DEL PROMOTORE*/}
            <h2>{info.nome}</h2>
            {/*RUOLO DEL PROMOTORE*/}
            <h3>{info.ruolo}</h3>
            {/*FOTO DEL PROMOTORE*/}
            <img src ={ `${info.img}`}/>
            {/*BIOGRAFIA DEL PROMOTORE*/}
            {/*https://www.strobecorp.com/convert-string-to-html-in-react/ (approach 1)*/}
            <section dangerouslySetInnerHTML={{ __html: info.testo }} /> 
        </main>
    </>)
    

}

export default Biography;
