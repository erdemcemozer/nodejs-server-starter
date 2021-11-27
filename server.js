const http = require("http");
const logger = require("./log4server.js");

// constants
const hostname = "localhost";
const port = 8080;

const requestListener = function (request, response) {
  var url = request.url; // get the url from the request

  if (url === "/") {
    response.statusCode = 200;
    response.write("Welcome to the home page!");
  } else if (url === "/about") {
    response.statusCode = 200;
    response.write(
      "My name is Erdem, you want more info? Try my contact page!"
    );
  } else if (url === "/contact") {
    response.statusCode = 200;
    response.write("You can contact me via social media!");
  } else {
    response.statusCode = 404;
    response.statusMessage = "Page not found!";
    response.write(
      "Yep. You hit the wrong place mate. This page doesn't exist!"
    );
  }

  logger.logFile(request, response, url);
  response.end();
};

// create the server
const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  // start the server
  console.log(`Server running at http://${hostname}:${port}/`);
});
