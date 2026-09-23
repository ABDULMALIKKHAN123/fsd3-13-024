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

// Create a function to update any products even pid call this function into prg6.js and verify its working by echo api 

export const updateProducts = (pid,updateItem) =>{
    const item = products.findIndex((prd)=>prd.id===pid);

    if(index == -1){
        return false;
    }
    updateItem.id = pid
       products[index] = updateItem;
       return updateItem;

    };


export const getProductById = (pid) =>{
    const index = products.findIndex((prd)=>prd.id===pid);

    if(index == -1){
        return false;
    }
    return products[index];

};
