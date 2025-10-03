const url = require("url");

const mainController = require("../controllers/mainController");
const schoolsController = require("../controllers/schoolsController");
const defaultController = require("../controllers/defaultController");

const getRouter = (req, res) => {
  const parsedUrl = url.parse(req.url, false);
  switch (parsedUrl.pathname) {
    case "/":
      mainController(req,res);
      break;

    case "/schools":
      schoolsController(req, res);
      break;

    default:
      defaultController(req, res);
      break;
  }
};

module.exports = getRouter;
