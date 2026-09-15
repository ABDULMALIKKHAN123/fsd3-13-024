import http from 'http';

const server = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET') {

    res.statusCode = 200;
    res.end("GET request");

  }

  else if (req.url === '/' && req.method === 'POST') {

    res.statusCode = 200;
    res.end("POST request");

  }

  else if (req.url === '/' && req.method === 'PUT') {

    res.statusCode = 200;
    res.end("PUT request");

  }

  else if (req.url === '/' && req.method === 'DELETE') {

    res.statusCode = 200;
    res.end("DELETE request");

  }

  else {

    res.statusCode = 404;
    res.end("request not found");

  }

}); // ⭐ VERY IMPORTANT

server.listen(5000, () => console.log("prg6 is running"));