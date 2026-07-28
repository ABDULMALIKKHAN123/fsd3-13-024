// const f1 = () =>{
//     console.log("f1");
    
// }
// const f2 = () =>{
//     console.log("f2");
    
// }
// const f3 = () =>{
//     console.log("f3");
   
// }
// const main= (){
//     console.log("main");
    
//     f1();
//     f2();
//     f3();
//     console.log("endl");
    
// }
import { writeFile } from "fs/promises";

const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const f3 = () => {
    console.log("f3");
};

const WriteData = async () => {
    await writeFile("note.txt", "I am fs module");
    console.log("file written");
};

const main = () => {
    console.log("main");

    WriteData();

    // f1();

    setTimeout(f2, 0);
    // setInterval(f2, 1000);

    setImmediate(f3);

    process.nextTick(f1);

    // f2();
    // f3();

    console.log("end");

    new Promise((resolve, reject) => {
        console.log("I am promise1");
        resolve();
    });

    new Promise((resolve, reject) => {
        console.log("I am promise2");
        resolve();
    });
};

main();