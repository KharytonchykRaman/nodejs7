const filter = (
  schools,
  minRating,
  maxRating,
  type,
  minCost,
  maxCost,
  minReviews,
  specialization
) => {
  let result = [...schools];
  if (maxCost) {
    result = result.filter((sch) => sch.cost <= maxCost);
  }
  if (minCost) {
    result = result.filter((sch) => sch.cost >= minCost);
  }
  if (maxRating) {
    result = result.filter((sch) => sch.rating <= maxRating);
  }
  if (minRating) {
    result = result.filter((sch) => sch.rating >= minRating);
  }
  if (type) {
    result = result.filter((sch) => sch.type === type);
  }
  if (minReviews) {
    result = result.filter((sch) => sch.reviewsNum >= minReviews);
  }
  if (specialization) {
    result = result.filter((sch) => sch.specialization === specialization);
  }
  return result;
};

module.exports = filter;
