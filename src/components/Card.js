import "../styles/Card.css"
import data from "../data"
import { useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const Card = () =>{

    const [index, setIndex] = useState(0)
    const {image, title, description} = data[index]

    const checkMovieNumber = (movieIndex) => {
        if(movieIndex < 0){
            return data.length -1
        }else if(movieIndex > data.length -1){
            return 0
        }else{
            return movieIndex
        }
    }
    
    const nextMovie = () =>{
        setIndex((index)=>{
            const newIndex = index + 1
            console.log(newIndex)
            return checkMovieNumber(newIndex)
            
        })
    }

    const prevMovie = () => {
        setIndex((index)=>{
            const newIndex = index - 1
            console.log(newIndex)
            return checkMovieNumber(newIndex)
        })
    }
    


    return<section>
        <div className="cards">
                            <h1 className="movie-count">{index + 1} / {data.length}</h1>
                            <div className="card-container" >
                            <img className="preview-picture" src={image} alt="Obrázek"/>
                            <h1 className="title">{title}</h1>
                            <p className="description">{description}</p>
                            <div className="buttons">
                                <button className="btn-like">Líbí se mi</button>
                                <button className="btn-delete">Vymazat</button>
                            </div>
                    </div>
            
        </div>
        <div className="navigation-container">
            <a onClick={prevMovie}><FaAngleLeft/></a>
            <a onClick={nextMovie}><FaAngleRight/></a>
        </div>
    </section>
    
}

export default Card