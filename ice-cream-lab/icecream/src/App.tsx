import './App.css';
import { AdDesign } from './componets/AdDesigner';
import { Header } from "./componets/Header"
import { Votes } from './componets/Votes';


function App(){
  return (
    <>
    <Header />
    <div className ="main">
     <AdDesign />
     <Votes />
    </div>
   
    </>
  )
}

export default App;