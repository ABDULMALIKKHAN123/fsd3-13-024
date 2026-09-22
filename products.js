const products = [
    {id:1,name:'marker',qty:100,price:15},
    {id:2,name:'pen',qty:100,price:10},
]

let nextId = 3;

// function banaya 
export const getAllProducts = ()=>{
    return products;
}

export const addProducts = (item)=>{
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};