import "./styles/App.css"

import Card from "./components/Card"
import Navigation from "./components/Navigation"

import { useState } from "react"

const App = () => {
  
  const [cardID, setCardID] = useState(1)

  const controlNavigation = (number) =>{
    setCardID(number++)
  }


  return(

    <div className="content">
      <Card />
      <Navigation />
    </div>
  )

}



export default App