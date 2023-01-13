import { Router, Request, Response } from 'express';
import {Item} from "./item";

//hard coded data
let itemArray:Item[] = [                                                                          
    {id: 1, quantity:20, price:10, product:"eggs", isActive: true},
    {id: 2, quantity:18, price:8, product:"bread", isActive: true},
    {id: 3, quantity:16, price:6, product:"cheese", isActive: true},
    {id: 4, quantity:14, price:4, product:"cereal", isActive: true}
];

export const itemRouter = Router();

itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> =>{
    if(req.query.maxPrice !== undefined){
        let underArray = itemArray.filter((x) => x.price <= Number(req.query.maxPrice) && x.isActive);
        return res.status(200).json(underArray);
    }

    else if(req.query.prefix !== undefined){
        let startsWithArray = itemArray.filter((x) => x.product.startsWith(String(req.query.prefix)) && x.isActive);
        return res.status(200).json(startsWithArray);
    }
    else if(req.query.pageSize !== undefined){
        return res.status(200).json(itemArray.filter((x) => x.isActive).slice(0, Number(req.query.pageSize)));
    }
    else{
        return res.status(200).json(itemArray.filter((x) => x.isActive));
    }
});

itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));

    if(itemIWantToFind === undefined){
        return res.status(404).send("ID not found")
    }
    else{
        return res.status(200).json(itemIWantToFind);
    }
});

itemRouter.post("/",async (req:Request, res:Response) : Promise<Response> =>{
    let newItem:Item = {
        id: GetNextId(),
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        isActive: req.body.isActive
    };

    itemArray.push(newItem);

    return res.status(201).json(newItem);
});

itemRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> =>{

    let idItem = itemArray.find((x) => x.id === Number(req.params.id));

    if(idItem !== undefined){
        idItem.price = Number(req.body.price);
        idItem.product = String(req.body.product);
        idItem.quantity = Number(req.body.quantity);
        idItem.isActive = Boolean(req.body.isActive);

        return res.status(200).json(idItem);
    }
    else{
        return res.status(404).send("Hey, couldn't find it!")
    }
});

itemRouter.delete("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let itemIWantToDelete = itemArray.find((x) => x.id === (Number(req.params.id)));

    if(itemIWantToDelete === undefined){
        return res.status(404).send("ID not found")
    }
    else{
        itemArray = itemArray.filter((x) => x.id !== Number(req.params.id))

        itemIWantToDelete.isActive = false;
        return res.status(200).send("Item successfully deleted")
    }
})
function GetNextId(){
    return Math.max(...itemArray.map((x) => x.id)) + 1;
 };