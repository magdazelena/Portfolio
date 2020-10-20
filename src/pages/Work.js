import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import '../style/components/work.scss';
import { getProjectsList } from '../data';
import { Link } from 'react-router-dom';
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
  const list = getProjectsList();
  return (<div className={`work section ${currentTheme}`}>
    <h1 className="section-title outline">
      Work
    </h1>
    <div className="work-slider" ref={slider}>
      {list.map((item, key) => {
        return (<div className="work-single" key={key}>
          <div className="work-texts">
            <h2>{item.main_title}</h2>
            <Link
              to={`./project/${item.id}`}
              className="headline">0{item.number} See more</Link>
          </div>
        </div>)
      })}

    </div>
  </div >)
}
export default Work;