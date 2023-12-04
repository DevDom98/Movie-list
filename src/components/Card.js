import "../styles/Card.css"
import data from "../data"
import { useState } from "react"
const Card = () =>{

    const [cards, setCards] = useState(data)
    const [currentMovie, setCurrentMovie] = useState(0)
    let prevIndex = 0
    const nextMovie = ()=>{
        
        setCurrentMovie((prevIndex)=> (prevIndex +1) % cards.length)
        console.log("Další")
    }

    const currentCard = cards[currentMovie]


    return<section>
        <div className="cards">
                            <h1 className="movie-count">{currentCard.id} / {cards.length}</h1>
                            <div className="card-container" key={currentCard.id}>
                            <img className="preview-picture" src={currentCard.previewPicture} alt="Obrázek"/>
                            <h1 className="title">{currentCard.title}</h1>
                            <p className="description">{currentCard.description}</p>
                            <div className="buttons">
                                <button className="btn-like">Líbí se mi</button>
                                <button className="btn-delete">Vymazat</button>
                            </div>
                    </div>
            
        </div>
        <div className="navigation-container">
            <a href="#">Předchozí</a>
            <a onClick={nextMovie}>Další</a>
        </div>
    </section>
    
}

export default Card