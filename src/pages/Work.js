import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import '../style/components/work.scss';
function Work(props) {
  const dispatch = useDispatch();
  const slider = useRef();
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'dark' });
    introAnimation();
  }, [dispatch]);

  const introAnimation = () => {
    gsap.to(slider.current, {
      duration: 1,
      top: 200,
      delay: .6
    })
  }

  const currentTheme = useSelector(state => state.currentTheme);

  return (<div className={`work section ${currentTheme}`}>
    <h1 className="section-title outline">
      Work
    </h1>
    <div className="work-slider" ref={slider}>
      <div className="work-single">

      </div>
    </div>
  </div >)
}
export default Work;