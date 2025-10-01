const http = require("http");
const url = require("url");
const { PORT } = require("./data/staticData");

const mainController = require("./controllers/mainController");
const defaultController = require("./controllers/defaultController");

const webApp = http
  .createServer((req, res) => {
    switch (url.parse(req.url, true).pathname) {
      case "/":
        mainController.control(req, res);
        break;

      default:
        defaultController.control(req, res);
        break;
    }
  })
  .listen(PORT);
