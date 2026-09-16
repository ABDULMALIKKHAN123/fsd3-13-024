import {EventEmitter}from  "node:events";
const task =new EventEmitter();
const sayHi =(name)=>{
    console.log(`welcome to ${name}`)
};
const starts= ()=>{
    console.log("system started")
}
task.once("greet",starts);
task.on("greet",sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts shopping`);
});
task.emit("greet","Abdul Malik Khan");
task.emit("greet","Abdul");
