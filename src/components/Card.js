import "../styles/Card.css"
import data from "../data"
import { useState } from "react"
const Card = () =>{

    const [movies, setMovies] = useState(data)
    const [currentMovie, setCurrentMovie] = useState(0)
    
    const nextMovie = ()=>{
        
        setCurrentMovie((prevIndex)=> (prevIndex +1) % movies.length)
        console.log("Další")
    }
    
    const prevMovie = () => {
        setCurrentMovie((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
        console.log("Předchozí")
      };
    
    const deleteMovie = () => {
        const updatedMovies = [...movies];
        updatedMovies.splice(currentMovie, 1);
        setMovies(updatedMovies);
        setCurrentMovie(0);
        console.log("vymazat")
      };

    const currentCard = movies[currentMovie]


    return<section>
        <div className="cards">
                            <h1 className="movie-count">{currentCard.id} / {movies.length}</h1>
                            <div className="card-container" key={currentCard.id}>
                            <img className="preview-picture" src={currentCard.previewPicture} alt="Obrázek"/>
                            <h1 className="title">{currentCard.title}</h1>
                            <p className="description">{currentCard.description}</p>
                            <div className="buttons">
                                <button className="btn-like">Líbí se mi</button>
                                <button onClick={deleteMovie} className="btn-delete">Vymazat</button>
                            </div>
                    </div>
            
        </div>
        <div className="navigation-container">
            <a onClick={prevMovie}>Předchozí</a>
            <a onClick={nextMovie}>Další</a>
        </div>
    </section>
    
}

export default Card