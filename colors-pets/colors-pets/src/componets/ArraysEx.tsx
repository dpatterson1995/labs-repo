import { useState } from 'react';
import {Pet} from '../models/Pet';


export function ArraysEx () {
  const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "blue"])
  const [pets, setPets] = useState<Pet[]>([{name: "Callie", type:"Dog", id: 1 },
  {name: "Chloe", type:"Dog", id: 2 },
  {name: "George", type:"Dog", id: 3 }])

  function addColor(color:string) : void {
    setColors([...colors, color]);
  }

  function removePet(id:number) : void {
    setPets(pets.filter((pet) => pet.id !== id))
  }

  return (
    <div>
      <h1>Colors</h1>
      <ol>
        { colors.map((color, index) => <li key={index}>{color}</li>)}
      </ol>
      <button onClick={() => addColor("Violet")}>Violet</button>
      <button onClick={() => addColor("Black")}>Black</button>
      <button onClick={() => addColor("Green")}>Green</button>
      <h1>Pets</h1>
      <table>
        <th>Name</th>
        <th>Type</th>
        <th>Action</th>
        { pets.map((pet) =>
        <tr key={pet.id}>
        <td>{pet.name}</td>
        <td>{pet.type}</td>
        <td><button onClick={() => removePet(pet.id)}>Delete</button></td>
        </tr>
        )}
        </table>
    </div>
  );
}