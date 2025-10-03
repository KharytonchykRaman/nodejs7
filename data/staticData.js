const PORT = 3000;

const contentTypes = {
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".mp3": "audio/mpeg",

  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
};

const schoolNames = ["1","2","3"];

const reviews = ["r1","r2"];

const schoolTypes = [
  "Дошкольное",
  "Начальное",
  "Среднее",
  "Профильное",
  "Высшее",
];

const specializations = [
  "Гуманитарное ",
  "Техническое",
  "Спортивное",
  "Медицинское",
  "Экономическое",
];

module.exports = {
  PORT,
  contentTypes,
  schoolNames,
  reviews,
  schoolTypes,
  specializations,
};
