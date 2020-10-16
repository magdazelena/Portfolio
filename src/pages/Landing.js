import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Landing(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'light' })
  }, [dispatch])

  const currentTheme = useSelector(state => state.currentTheme);
  const switchToWorks = () => {
    history.push({
      pathname: "/work",
      state: { transition: "fade", duration: 300 }
    });
  }

  return (<div className={`landing section ${currentTheme}`} onWheel={switchToWorks}>
    <h1 className="intro-text">
      My name is Magdalena <br />
      I'm a frontend developer.
    </h1>
  </div >)
}
export default Landing;