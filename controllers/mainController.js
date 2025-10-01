const fs = require("fs");
const path = require("path");
const { getMainPage, getTemplatePage } = require("../data/pages");
const { render } = require("../utils/render");
const { getRndInt } = require("../utils/random");
const { createSchoolObj } = require("../data/dynamicData");

const control = (req, res) => {
  const schoolsNum = getRndInt(30, 40);
  const schoolsObj = Array.from({ length: schoolsNum }, () =>
    createSchoolObj()
  );
  let templatePage = getTemplatePage();
  const mainPage = getMainPage();

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(mainPage);
};

module.exports = { control };
