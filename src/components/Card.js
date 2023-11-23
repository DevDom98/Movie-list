import "../styles/Card.css"
import placeholderImg from "../pictures/placeholder.jpg"

const Card = () =>{
    return(
        <div className="card-container">
            <img className="preview" src={placeholderImg} alt="placeholder" />
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error ipsa, eveniet quae inventore aperiam corporis sit eius molestiae illo.</p>
            <div className="buttons">
                <button className="btn-like">Like</button>
                <button className="btn-delete">Delete</button>
            </div>
        </div>
    )
}

export default Card