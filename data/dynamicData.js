const fs = require("fs");
const path = require("path");
const { getRndInt, getRndFloat } = require("../utils/random");
const {
  schoolNames,
  reviews,
  schoolTypes,
  specializations,
} = require("./staticData");

let id = 1;

const imgs = fs.readdirSync(path.join(__dirname, "..", "public", "img"));

const createSchoolObj = () => {
  const reviewsNum = getRndInt(0, 100);
  return {
    id: id++,
    name: schoolNames[getRndInt(0, schoolNames.length - 1)],
    img: imgs[getRndInt(0, imgs.length - 1)],
    cost: getRndInt(0, 1300),
    rating: getRndFloat(0, 5.13),
    reviewsNum: reviewsNum,
    reviews: Array.from(
      { length: reviewsNum },
      (review) =>
        `<p class="review">${reviews[getRndInt(0, reviews.length - 1)]}</p>`
    ),
    type: schoolTypes[getRndInt(0, schoolTypes.length - 1)],
    specialization: specializations[getRndInt(0, specializations.length - 1)],
  };
};

module.exports = {createSchoolObj}