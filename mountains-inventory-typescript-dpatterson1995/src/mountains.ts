//string, boolean, number, bigInt, symbol, null, undefined

let fullName: string = "David Patterson";

//objects are a way of grouping data together
//interface
//the ? makes it optional, could be there but doesnt have to be included
interface Moutain {
  name: string;
  height: number;
  hasBeenClimbed?: boolean;
}

//implement interface
let newMoutain: Moutain = {
  name: "Kilmanjaro",
  height: 19341,
};

let moutains: Moutain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

//function signature
function findNameOfTallestMountain(moutains: Moutain[]): string {
  let tallestMoutain = "";
  let newHeight = 0;

  for (let moutain of moutains) {
    if (moutain.height > newHeight) {
      newHeight = moutain.height;
      tallestMoutain = moutain.name;
    }
  }
  return tallestMoutain;
}
console.log(findNameOfTallestMountain(moutains));

//npm run start:dev to run nodemon
//any lets you go back to javascript world, any dataType!
//let thisVariableCanBeAnything:any;

//Could be string, number, or boolean dataType
//let stringOrNumber:string|number|boolean;

export { findNameOfTallestMountain, Moutain };
