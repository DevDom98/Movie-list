import "../styles/Card.css"
import placeholderImg from "../pictures/placeholder.jpg"

const Card = () =>{
    return(
        <div className="card-container">
            <div className="preview-picture">
            </div>
            <h1 className="title">Harry Potter</h1>
            <p className="description">
Harry Potter, sirotek, se dozví, že je čaroděj. Na svém 11. narozeninách přijímá pozvání na Školu čar a kouzel v Bradavicích, kde začíná jeho dobrodružství.</p>
            <div className="buttons">
                <button className="btn-like">Líbí se mi</button>
                <button className="btn-delete">Vymazat</button>
            </div>
        </div>
    )
}

export default Card