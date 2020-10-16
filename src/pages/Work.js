import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/components/work.scss';
function Work(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'dark' })
  }, [dispatch])

  const currentTheme = useSelector(state => state.currentTheme);

  return (<div className={`work section ${currentTheme}`}>
    <h1 className="section-title outline">
      Work
    </h1>
  </div >)
}
export default Work;