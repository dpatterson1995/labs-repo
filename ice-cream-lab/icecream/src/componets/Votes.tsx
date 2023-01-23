import '../css/Votes.css';
import { useState } from 'react';

export function Votes(){
    
const[chocolateVotes, setChocolateVotes] = useState(0);
const[strawberryVotes, setStrawberryVotes] = useState(0);
const[vanillaVotes, setVanillaVotes] = useState(0);

    function getTotal(){
        return chocolateVotes + strawberryVotes + vanillaVotes;
    }
    
    function displayPercentage(n:number, total:number){
        if(total === 0){
            return '0.0%';
        }
        else{
            return (n/total * 100).toFixed(1) + "%";
        }
    }
    return(
        <div className="Votes">
            <h2>Vote Here</h2>
            <div className="button-bar">
                <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
                <button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>
                <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
            </div>
            { getTotal() === 0 ?
            <>
            <p>No One Has Voted Yet!</p>
            </>
            :
            <>
            <p>
            <label>Chocolate</label> {chocolateVotes} ({displayPercentage(chocolateVotes, getTotal())})
            </p>
            <progress className="progressChocolate" value={chocolateVotes / getTotal()}></progress>

            <p>
            <label>Strawberry</label> {strawberryVotes} ({displayPercentage(strawberryVotes, getTotal())})
            </p>
            <progress className="progressStrawberry" value={strawberryVotes / getTotal()}></progress>

            <p>
            <label>Vanilla</label> {vanillaVotes} ({displayPercentage(vanillaVotes,getTotal())})
            </p>
            <progress className="progressVanilla" value={vanillaVotes / getTotal()}></progress>
            </>
            }
        </div>
    )
}

