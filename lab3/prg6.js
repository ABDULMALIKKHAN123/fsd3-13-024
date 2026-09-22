// import http from 'http';

// const server = http.createServer((req, res) => {

//   if (req.url === '/' && req.method === 'GET') {

//     res.statusCode = 200;
//     res.end("GET Request");

//   }

//   else if (req.url === '/' && req.method === 'POST') {
//     // console.log("Request:",req);
//        let body ='';
//        req.on('data',(chunk)=>{
//         body += chunk;
//        })
//        req.on("end",()=>{
//         const product = JSON.parse(body);
//         console.log("received product:", product);
//         res.statusCode = 201;
//         res.end(JSON.stringify({msg:'product added',product}));
        
//        });



//   }




//   else if (req.url.startsWith("/products/")  && req.method === 'PUT') {
//     const productID = req.url.split("/").pop();
//     console.log('Update Product id:',productID);
    
//  let body ='';
//        req.on('data',(chunk)=>{
//         body += chunk;
//        })
//        req.on("end",()=>{
//         const product = JSON.parse(body);
//         // console.log("received product:", product);
//         res.statusCode = 200;
//         res.end(JSON.stringify({msg:'product updated ',product}));
        
//        });
     
//     // res.statusCode = 200;
//     // res.end("PUT Request");

//   }




//   else if (req.url === '/' && req.method === 'DELETE') {

//     res.statusCode = 200;
//     res.end("DELETE Request");

//   }

//   else {

//     res.statusCode = 404;
//     res.end("Request not found");

//   }

// }); // ⭐ VERY IMPORTANT

// server.listen(5000, () => console.log("prg6 is running"));


// 👇 sir ka code hai

import http from "http";
import { getAllProducts,addProducts, deleteProducts } from "../products.js";
import { count } from "console";

const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;
     const data = getAllProducts();
     res.setHeader('content-type','application/json')

    // res.end("Get Request");
    res.end(JSON.stringify({
      count:data.length,
      data,
    }),
  );
  } 

  
  else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request:",req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      // console.log("received product:", product);
      const item = addProducts(product);
      res.statusCode = 201;
      res.end(JSON.stringify({ msg: "product added", data:item

       }));
    });
  } 
  
  else if (req.url.startsWith( "/products/") && req.method === "PUT") {
    const productID = req.url.split('/').pop();
    console.log('Update Product id:',productID);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      product.id = productID
      res.statusCode = 200;
      res.end(JSON.stringify({ msg: "product updated", product }));
    });
    
  } 
  
  else if (req.url.startsWith("/api/v1/products/")&& req.method === "DELETE") {
    const pid = Number(req.url.split('/').pop());


    res.statusCode = 200;
    // res.end("DELETE Request");

    if(deleteProducts(pid)){
      res.end(JSON.stringify({msg:'item deleted'}));

  }
  else{
    res.end(JSON.stringify({msg:`products with id $(pid) not found`}));
  }
}
else {
    res.statusCode = 404;
    res.end("request not found");
}
});

server.listen(5000, () => console.log("prg6 is running"));