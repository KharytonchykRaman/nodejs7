const fetchSchools = async (reqPath) => {
  const response = await fetch(reqPath);
  const data = await response.json();
  return data;
};

const buildSchoolTemplate = (obj) => {
  let result = schoolTemplate.innerHTML;
  for (const key in obj) {
    let replaceValue = obj[key];
    replaceValue = Array.isArray(replaceValue)
      ? replaceValue.join("\n")
      : replaceValue;
    result = result.replaceAll(`{{${key}}}`, replaceValue);
  }
  return result;
};

const render = (objs) => {
  let content = "";
  for (let i = 0; i < objs.length; i++) {
    content += buildSchoolTemplate(objs[i]);
  }
  main.innerHTML = content;
};

filterButton.addEventListener("click", async () => {
  const query = "";

  const data = await fetchSchools(query);
  const { schools } = data;
  render(schools);
});

const start = async () => {
  const data = await fetchSchools("/schools");
  const { schools } = data;
  render(schools);
};

start();
