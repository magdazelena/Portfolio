import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import '../style/components/work.scss';
import { getProjectsList } from '../data';
import { Link } from 'react-router-dom';

function Work(props) {
  const [slide, setSlide] = useState(0);
  const dispatch = useDispatch();
  const slider = useRef();
  const currentTheme = useSelector(state => state.currentTheme);
  const list = getProjectsList();

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
  const newSlide = () => {
    if (slide < list.length - 1) {
      setSlide(prevState => prevState + 1);
    } else {
      setSlide(0);
    }
  }

  return (<div className={`work section ${currentTheme}`}>
    <h1 className="section-title outline">
      Work
    </h1>
    <div className="work-slider" ref={slider}>
      {list.map((item, key) => {
        let topImage;
        if (item.top_image !== null) {
          topImage = (<img src={item.top_image} alt={item.main_title} />)
        } else {
          topImage = (<video src={item.top_video} muted={true} autoPlay={true} loop />)
        }
        return (<div className={`work-single ${slide === key ? 'slide-active' : 'slide'}`} key={key}>
          <div className="work-image">{topImage}</div>
          <div className="work-texts">
            <h2>{item.main_title}</h2>
            <Link
              to={`./project/${item.id}`}
              className="headline">0{item.number} See more</Link>
          </div>

        </div>)
      })}

    </div>
    <div className="work-slider-switcher" onClick={newSlide}>Next</div>
  </div >)
}
export default Work;