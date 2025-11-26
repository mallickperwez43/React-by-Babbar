import UserCard from "./components/UserCard"
import "./App.css"
import lovePic from "./assets/lovepic.jpg"
import harryPic from "./assets/harrypic.jpg"

function App() {

  return (
    <div className="container" >
      < UserCard name="Love" image={lovePic} desc="Love" style={{ "borderRadius": "10px" }} />
      < UserCard name="Harry" image={harryPic} desc="Harry" style={{ "borderRadius": "10px" }} />
      < UserCard name="Harry" image={harryPic} desc="Harry" style={{ "borderRadius": "10px" }} />
      < UserCard name="Love" image={lovePic} desc="Love" style={{ "borderRadius": "10px" }} />
    </div>
  )
}

export default App
