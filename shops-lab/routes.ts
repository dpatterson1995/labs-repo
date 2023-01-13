import {Router, Request, Response } from 'express';
import { Shop} from "./shop";

let shops: Shop[] = [
    {id: 1, name: "Pepper's Pizza", rating: 4.5},
    {id: 2, name: "Clive's Chives", rating: 3.4},
    {id: 3, name: "Betty's Brews", rating: 4.3},
    {id: 4, name: "Sylvester's Shoes", rating: 3.8},
    {id: 5, name: "Teddy's Tunes", rating: 4.7}
];

export const shopRouter = Router();

shopRouter.get("/", async (req:Request, res:Response) : Promise<Response> =>{
    if(req.query.minRating !== undefined){
        let shopRating = shops.filter((x) => x.rating >= Number(req.query.minRating));

        return res.status(200).json(shopRating);
    }
    return res.status(200).json(shops);
});

shopRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let shopIWantToFind = shops.find((x) => x.id ===Number(req.params.id));

    if(shopIWantToFind === undefined){
        return res.status(404).send( `{ "error": "Shop not found: ${req.params.id}" }`
        );
    }
    else{
        return res.status(200).json(shopIWantToFind);
    }
});

shopRouter.post("/",async (req:Request, res:Response) : Promise<Response> =>{
    let newShop:Shop = {
        id: GetNextId(),
        name: req.body.name,
        rating: req.body.rating,
    };

    shops.push(newShop);

    return res.status(201).json(newShop);
});

shopRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> =>{

    let idShop = shops.find((x) => x.id === Number(req.params.id));

    if(idShop !== undefined){
        idShop.id = Number(req.body.id);
        idShop.name = String(req.body.name);
        idShop.rating = Number(req.body.rating);

        return res.status(200).json(idShop);
    }
    else{
        return res.status(404).send("Hey, couldn't find it!")
    }
});

shopRouter.delete("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let shopIWantToDelete = shops.find((x) => x.id === (Number(req.params.id)));

    if(shopIWantToDelete === undefined){
        return res.status(404).send("ID not found")
    }
    else{
        shops = shops.filter((x) => x.id !== Number(req.params.id))

        return res.status(200).send("Item successfully deleted")
    }
})
function GetNextId(){
    return Math.max(...shops.map((x) => x.id)) + 1;
 };