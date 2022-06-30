// Modules that have been written for us that do the heavy lifting

const http = require('http');                 // Comes with everything we need to create a server, listen to network requests and respond to them
const fs = require('fs')                      // Comes with everything we need to access the disk and grab the files we need
const url = require('url');                   // Look at the url and path that we need to make requests
const querystring = require('querystring');   // Look at the query parameters for the request
const figlet = require('figlet')              // Takes any string and turns it into ASCII art (404)

// We set up our server to listen for specific things.

const server = http.createServer((req, res) => {                // Using the http module to create the server
  const page = url.parse(req.url).pathname;                     // gets the url path
  const params = querystring.parse(url.parse(req.url).query);   // gets the query parameters
  console.log(page);
  if (page == '/') {                                        
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});    // 200 means everything is ok, we're going to send you some html
      res.write(data);                                      // We're gonna pull that html
      res.end();                                            // and send it
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){                          // Was there a student query Param?
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipRes = Math.ceil(Math.random()*2) === 1 ? 'heads' : 'tails'
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
          flip: flipRes
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
