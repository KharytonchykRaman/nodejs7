const url = require("url");
const { getSchools } = require("../data/dynamicData");
const filter = require("../utils/schoolFilter");

const control = (req, res) => {
  const {
    minRating,
    maxRating,
    type,
    minCost,
    maxCost,
    minReviews,
    specialization,
  } = url.parse(req.url, true).query;

  const filteredSchools = filter(
    getSchools(),
    minRating,
    maxRating,
    type,
    minCost,
    maxCost,
    minReviews,
    specialization
  );

  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(
    JSON.stringify({
      schools: filteredSchools,
    })
  );
};

module.exports = control;
