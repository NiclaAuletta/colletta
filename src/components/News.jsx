import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO
import {useState, useEffect} from "react";

const News = ({title, subtitle, img, text, id}) =>{
    const [details, setDetails] = useState([]);
    {/*CARD RELATIVA AL SINGOLO ARTICOLO*/}
    return(
        <>
            {/*TITOLO DELL'ARTICOLO*/}
            <h4>{title}</h4>
            {/*FOTO DELL'ARTICOLO*/}
            <img src={"src"+img.substring(2)} alt=""/>
            {/*PARTE INIZIALE DEL CONTENUTO DELL'ARTICOLO*/}
            <section dangerouslySetInnerHTML={{ __html: text.slice(0,140)+"..." }} />
        </>
    )

}
export default News;