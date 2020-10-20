import React, { useEffect, useState } from 'react';
import { getProjectByID } from '../data';
function Project(props) {
  const [project, setProject] = useState(null)
  useEffect(() => {
    let project = getProjectByID(props.id);
    setProject(project);
  }, []);
  return <div>
    {project && (<div><h1>{project.title}</h1></div>)}
    {!project && (<div><h1>Sorry, no project found.</h1></div>)}
  </div>
}
export default Project;