import './App.css';
import { Ad } from './componets/Ad';
import { AdDesign } from './componets/AdDesigner';
import { Header } from "./componets/Header"
import { Votes } from './componets/Votes';


function App(){
  return (
    <>
    <Header User={"David"} />
    <div className="ads">
      <Ad flavor={"Chocolate"}  isLight={false} fontSize={24} />
      <Ad flavor={"Vanilla"}  isLight={true} fontSize={24} />
      <Ad flavor={"Strawberry"}  isLight={false} fontSize={24} />
    </div>
    <div className ="main">
     <AdDesign />
     <Votes />
    </div>
   
    </>
  )
}

export default App;