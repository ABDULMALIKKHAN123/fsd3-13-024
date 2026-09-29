import express from "express"


const app = express()

// request goes here
app.get("/get",(req,res)=>{
    res.send("<h1>Hello Express</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h2>About Page</h2>");
});

const products = [
    {id:1, name: "Marker", qty:100,price:15},
    {id:2, name: "Duster", qty:50,price:15},
]

app.get("/products",(req,res)=>{
    // res.status(200).send(products);
    res.status(200).json(products);
});

app.use((req,res)=>{
    res.status(404).send("<h1>Page not found</h1>");
});



// always listen at last
app.listen(3333,()=>console.log("prg1 is running at 3333"));
