import { rm } from "fs";
import { mkdir } from "fs/promises";


// comment hai ye pahle se 👇
await mkdir ('upload')
console.log("folder created");

await mkdir ("upload/resume");
console.log("resume created under upload folder");

await mkdir("images/profile/logos",{ recursive:true})
console.log("all folders created");
// comment hai ye pahle se 👆


await rm("upload",{recursive:true});

