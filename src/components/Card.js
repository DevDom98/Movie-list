import "../styles/Card.css"
import data from "../data"
import { useState } from "react"
const Card = () =>{

    const [cards, setCards] = useState(data)

    const loadAllMovies = ()=>{
        setCards(data)
    }

    return<section>
        <div className="allmovies">
            {
                cards.map((card)=>{
                    const {id, previewPicture, title, description} = card

                    return  <div className="card-preview" key={id}>
                            <img className="preview-picture" src={previewPicture} alt="Obrázek"/>
                            <h1 className="title">{title}</h1>
                            <p className="description">{description}</p>
                            <div className="buttons">
                                <button className="btn-like">Líbí se mi</button>
                                <button className="btn-delete">Vymazat</button>
                            </div>
                    </div>
                })
            }

            <button onClick={loadAllMovies}>Načíst</button>
        </div>
    </section>
    
}

export default Card