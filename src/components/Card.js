import "../styles/Card.css"
import data from "../data"
import { useState } from "react"
const Card = () =>{

    const [cards, setCards] = useState(data)

    const loadAllMovies = ()=>{
        setCards(data)
    }

    return<section>
        <div className="cards">
            
            {
                cards.map((card)=>{
                    const {id, previewPicture, title, description} = card

                    return  <>
                            <h1 className="movie-count">{card.id} / {cards.length}</h1>
                            <div className="card-container" key={id}>
                            <img className="preview-picture" src={previewPicture} alt="Obrázek"/>
                            <h1 className="title">{title}</h1>
                            <p className="description">{description}</p>
                            <div className="buttons">
                                <button className="btn-like">Líbí se mi</button>
                                <button className="btn-delete">Vymazat</button>
                            </div>
                    </div>
                    </>
                })
            }
        </div>
        <div className="navigation-container">
            <a href="#">Předchozí</a>
            <a href="#">Další</a>
        </div>
    </section>
    
}

export default Card