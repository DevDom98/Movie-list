import "./styles/App.css"

import Card from "./components/Card"

import { useState } from "react"

const App = () => {
  
  const [cardID, setCardID] = useState(1)

  /*const nextMovie = () =>{
    if(cardID > )
    setCardID(cardID++)
  }*/


  return(

    <div className="content">
      <Card />
    </div>
  )

}



export default App