import { createReadStream } from "fs";
import http from "http";
// import { type } from "os";

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("content-type","text/html");
      res.write(`
        <a href="/bottle">Bottle</a>
        <a href="/containerPot">ContainerPot</a>
      `);
      res.end();

}

else if(req.url==="/bottle"){
res.setHeader("content-type","text/html")
const stream = createReadStream("bottle.html",{encoding:"utf-8"});
stream.pipe(res);


}else if(req.url==="/containerPot"){
res.setHeader("content-type","text/html")
const stream = createReadStream("containerPot.html",{encoding:"utf-8"});
stream.pipe(res);
}
else{
    res.statusCode = 404;
    res.end();
  }

});

server.listen(4444, ()=> console.log("prg3 is running"));