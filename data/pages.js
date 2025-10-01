const fs = require("fs");
const path = require("path");

const getMainPage = () => {
  return fs.readFileSync(
    path.join(__dirname, "..", "public", "html", "main.html")
  );
};

const getTemplatePage = () => {
  return fs.readFileSync(
    path.join(__dirname, "..", "public", "html", "schoolTemplate.html")
  );
};

module.exports = { getMainPage, getTemplatePage };
