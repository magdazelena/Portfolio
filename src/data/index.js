
const loadJson = () => {
  const requireContext = require.context('./projects', false, /\.json$/);
  const json = {};
  requireContext.keys().forEach((key) => {
    const obj = requireContext(key);
    const simpleKey = obj.number;
    json[simpleKey] = obj;
  });
  return json;
}
export const getProjectsList = () => {
  let projects = loadJson();
  return Object.values(projects);
}

export const getProjectByID = id => {
  let projects = loadJson();
  let project = Object.values(projects).filter(item => {
    return item.id === id;
  })
  return project[0];
}
export const getNextProjectID = number => {
  let projects = loadJson();
  if (!((number + 1) in projects)) {
    return projects[1].id;
  } else {
    return projects[number + 1].id
  }
}