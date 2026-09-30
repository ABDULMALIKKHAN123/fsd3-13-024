# Express

1. Create project folder
2. go to project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
5.  install `npm i express`
6. open package.json
   a. change `type:'module'`
   b. update script {
    "start":"Node prg1.js",
    "dev":"nodemon prg1.js"
   }
7. create prg1.js in folder
8. add folderName/node_modules in .gitignore

9. Send method/function is used to revert back contents to the client it may be html,json,html file, plain text 
10. you can also status code with status function it can be change with send function
## Map
This function is used to iterate any array it must return new array
```
array.map((item)=>{
   return
})

array.map((item)=>())
```

1. in syntax 1 we have to use explicit return function whereas not required in 2nd syntax
2. exclude number of properties from any json object
```
const {p1,p2,p3,...rest} = product;
log(rest);
```
3. Search - To search any item in json array we use find method it will return NULL on unsuccessful or object on Successful
```
array.find((item)=>item.id===id);
```