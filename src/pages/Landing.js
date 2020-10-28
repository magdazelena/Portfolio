import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Landing(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'light' })
  }, [dispatch])

  const currentTheme = useSelector(state => state.currentTheme);


  return (<div className={`landing section ${currentTheme}`}>
    <h1 className="intro-text">
      My name is Magda. <br />
      I'm a frontend developer.
    </h1>
    <div className="next-page"><Link to={`/work`}>work <span className="dash"></span> Next</Link></div>
  </div >)
}
export default Landing;