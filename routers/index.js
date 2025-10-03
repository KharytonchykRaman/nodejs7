const getRouter = require("./getRouter");

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      getRouter(req, res);
      break;

    default:
      res.end();
      break;
  }
};

module.exports = handler;
