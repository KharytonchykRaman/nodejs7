const fs = require("fs");
const path = require("path");
const url = require("url");
const { contentTypes } = require("../data/staticData");

const control = (req, res) => {
  const pathname = decodeURI(url.parse(req.url, false).pathname);
  const filePath = path.join(__dirname, "..", "public", pathname);
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Not found</h1>");
    } else {
      const extname = path.extname(filePath);
      const contentType = contentTypes[extname] || "application/octet-stream";

      res.writeHead(200, {
        "Content-Type": contentType,
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
};

module.exports = control;
