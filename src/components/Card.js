import "../styles/Card.css"
import placeholderImg from "../pictures/placeholder.jpg"

const Card = () =>{
    return(
        <div className="card-container">
            <div className="preview-picture-container">
                <img className="preview-picture" src={placeholderImg} alt="placeholder" />
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error ipsa, eveniet quae inventore aperiam corporis sit eius molestiae illo.</p>
            <div className="buttons">
                <button className="btn-like">Like</button>
                <button className="btn-delete">Delete</button>
            </div>
        </div>
    )
}

export default Card