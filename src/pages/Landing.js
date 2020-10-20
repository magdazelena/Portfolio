import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Landing(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'light' })
  }, [dispatch])

  const currentTheme = useSelector(state => state.currentTheme);


  return (<div className={`landing section ${currentTheme}`}>
    <h1 className="intro-text">
      My name is Magdalena <br />
      I'm a frontend developer.
    </h1>
  </div >)
}
export default Landing;