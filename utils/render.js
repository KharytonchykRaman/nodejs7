const render = (template, obj) => {
  const result = template;
  for (const key in obj) {
    let replaceValue = obj[key];
    replaceValue = Array.isArray(replaceValue) ? replaceValue.join("") : replaceValue;
    result.replaceAll(`{{${key}}}`, replaceValue);
  }
  return result;
};

module.exports = { render };
