const fs = require("fs");

exports.logFile = (request, response, url) => {
  var date = new Date();

  let logger =
    date +
    ` => ${request.method}: ${url}, status: ${response.statusCode} ` +
    "\n" +
    JSON.stringify(request.headers) +
    "\n" +
    "---------------------" +
    "\n";

  console.log(logger);

  fs.appendFile("logger.txt", logger, "utf8", (err) => {
    if (err) {
      console.log("Error while appending file : ", err);
      throw err;
    } else {
      console.log("The file has been saved!");
    }
  });
};
