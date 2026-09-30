import { products } from "./data.js";
import express from "express"


const app = express();

app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1>
        <a href = "/api/products"> Browser Products </a>
        `);
});


app.get("/api/products",(req,res)=>{
    const items = products.map(({reviews,description,...rest})=>rest);
    res.status(200).json({count:items.length, data:items});
    
});



app.use((req,res)=>{
    res.status(404).send("Route not found");
});
app.listen(3333,()=>console.log("prg4 is running..."));
