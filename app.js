const http = require("http");
const router = require("./routers/index");
const { PORT } = require("./data/staticData");

http
  .createServer(router)
  .listen(PORT, () => console.log(`http://localhost:${PORT}/`));
