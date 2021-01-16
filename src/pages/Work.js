import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import ReactHtmlParser from 'react-html-parser';
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
      top: 100,
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
        return (<Link
          to={`./project/${item.id}`}>
          <div className={`work-single ${slide === key ? 'slide-active' : 'slide'}`} key={key}>
            <div className="work-image">{topImage}</div>
            <div className="work-texts">
              <div className="work-title">
                <h2>{item.main_title}</h2>
                <p className="caption">
                  {item.tech.map((tec, key) => {
                    return <span key={key}>{tec}</span>
                  })}
                </p>
              </div>
              <span className="headline">0{item.number} See more</span>
            </div>

          </div>
        </Link>)
      })}

    </div>
    <div className="work-slider-switcher" onClick={newSlide}>
      Next project<span>{ReactHtmlParser("&longrightarrow;")}</span>
    </div>
    <div className="next-page"><Link to={`/about`}>about <span className="dash"></span> Next</Link></div>
  </div >)
}
export default Work;