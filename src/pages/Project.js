import React, { useEffect, useRef, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';
import { getNextProjectID, getProjectByID } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import '../style/components/project.scss';

function Project(props) {

  const [project, setProject] = useState(null);
  const dispatch = useDispatch();
  const projectDiv = useRef();
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'light' })

  }, [dispatch])

  const currentTheme = useSelector(state => state.currentTheme);
  useEffect(() => {
    let mounted = true;
    getProjectByID(props.id)
      .then(project => {
        if (mounted)
          setProject(project)
      })
      .then(introAnimation());

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, []);


  const introAnimation = () => {
    gsap.to(projectDiv.current, {
      duration: 1,
      top: 0,
      opacity: 1,
      delay: .3
    })

  };
  const outroAnimation = () => {
    gsap.to(projectDiv.current, {
      duration: .5,
      top: '100vh',
      opacity: 0
    })
    history.push('/project/' + getNextProjectID(project.number));
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return <div ref={projectDiv} className="project-container">
    {project && (<div className={`${currentTheme} project`} >
      <h1>{ReactHtmlParser(project.title)}</h1>
      <h2 className="section-title outline">
        Work
    </h2>
      <div className="project-top">
        <div className="project-manchet">
          <div className="project-manchet--description">
            {ReactHtmlParser(project.manchet)}
          </div>
          <div className="project-manchet--tech">
            Technologies: {project.tech.map((item, key) => {
            return <p key={key}>{item}</p>
          })}
          </div>
        </div>
        <div className="project-top-image">
          {project.top_image && (<img src={project.top_image} alt={project.main_title} />)}
          {project.top_video && (<video src={`../${project.top_video}`} muted={true} autoPlay={true} loop />)}
        </div>
      </div>
      <div className="project-media">
        {project.media.map((item, key) => {
          let medium;
          if (item.type === "video") {
            medium = <video src={`../${item.path}`} muted={true} autoPlay={true} loop />
          } else {
            medium = <img src={`../${item.path}`} alt={item.alt} />
          }
          return <div className="project-medium" key={key}>
            {medium}
            {item.caption && (<p className="caption">{item.caption}</p>)}
            {item.description && (<p className="project-medium--description">{ReactHtmlParser(item.description)}</p>)}
          </div>
        })}
      </div>
      <div className="next-page"><span onClick={outroAnimation} >0{project.number + 1} {getNextProjectID(project.number)} <span className="dash"></span> Next</span></div>
    </div>)
    }
    {!project && (<div><h1>Sorry, no project found.</h1></div>)}
  </div>
}
export default Project;