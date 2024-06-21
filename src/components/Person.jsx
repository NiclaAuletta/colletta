import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO
import {useState, useEffect} from "react";

const Person = ({name, img, role, id}) =>{
    const [details, setDetails] = useState([]);
    {/*CARD RELATIVA AL SINGOLO PROMOTORE*/}
    return(
        <>
            {/*FOTO DEL PROMOTORE*/}
            <img src={img} alt=""/>
            {/*NOME DEL PROMOTORE*/}
            <h4>{name}</h4>
        </>
    )

}
export default Person;