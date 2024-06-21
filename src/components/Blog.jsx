import './index.css'

//IMPORTO LO STYLESHEET
import './assets/css/style.scss';

//IMPORTO IL COMPONENTE NAVBAR
import Navbar from "./Navbar.jsx";

//IMPORTO IL COMPONENTE NEWS
import News from "./News.jsx"

//IMPORTO I DATI RELATIVI AGLI ARTICOLI
import data from './data/articles.json';

import { useState, useEffect } from 'react';

//IMPORTO L'ELEMENTO LINK
import {Link} from 'react-router-dom';

const Blog = () => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {setArticles(data);}, []);

  return (
    <>
        {/*MENU' DI NAVIGAZIONE*/}
        <header>
            <Navbar/>
        </header>

        <main>
            {/*BLOG*/}
            <h2>BLOG</h2>
            <h3>I nostri contributi per tutti</h3>

            {/*SEZIONE CONTENENTE LE CARD RELATIVE AGLI ARTICOLI*/}
            <section className="news">
                {articles.map((article) => (  
                    /*LINK AI SINGOLI ARTICOLI*/
                    <Link to = {"/il_blog/"+ article.id} key={article.id}>
                        <News
                            key={article.id}
                            id = {article.id}
                            title={article.titolo}
                            subtitle={article.sottotitolo}
                            img={article.img}
                            text={article.testo}
                            
                        />
                    </Link>
                ))}
            </section>
        </main>
    </>
  )
}

export default Blog;