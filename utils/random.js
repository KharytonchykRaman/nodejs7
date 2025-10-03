const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRndFloat = (min, max) => {
  return Number(Math.random() * (max - min) + min).toFixed(2);
};

module.exports = { getRndInt, getRndFloat };
