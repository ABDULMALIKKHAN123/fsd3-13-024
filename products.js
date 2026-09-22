const products = [
    {id:1,name:'marker',qty:100,price:15},
    {id:2,name:'pen',qty:100,price:10},
]

let nextId = 3;

// function banaya 
export const getAllProducts = ()=>{
    return products;
}

// Dusra function banaya add products ke liye
export const addProducts = (item)=>{
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};


// tisra function banaya products ko delete karne ke liye
export const deleteProducts = (pid) =>{
    const item = products.findIndex((prd)=>prd.id===pid);
    if(item == -1)
        return false;
    products.splice("products remaining:",products)
    return true;

};



