import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import '../style/components/about.scss';
function About(props) {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.currentTheme);
  const [mobileDir, setMobileDir] = useState(true);
  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'dark' });

  }, [dispatch]);
  const changeDir = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDir(!mobileDir);
  }
  return <div className={`about ${currentTheme}`}>
    <h1 className="section-title outline">
      About
    </h1>
    <div className={`about--texts ${mobileDir ? 'left' : 'right'}`}>
      <div className="about--description">
        <h2>Nice to meet you</h2>
        <p>My name is Magda Żelezik</p>
        <p>I live in Copenahgen, Denmark. I come from Warsaw, Poland.</p>
        <p>I'm a creative coder with a solid Front End Developer knowledge.</p>
        <p>I've been educated in design at one of the best Fine Arts Academies in Poland and I'm engineer of computer science.</p>
        <p>I have always believed in learning through trying, therefore I never refused an opportunity to expand
        my skillset. Thanks to that my developer portfolio varies from experience with building complex,
        scalable applications to creating fun and playful user interfaces using 2D and 3D animation
        techniques. I am not afraid of any challenge since I always seek a way to grow and get better.
          </p>

      </div>
      <div className="about--tech">
        <h2>My technical stack includes:</h2>
        <ul>
          <li>HTML5 and CSS3 with Scss/Sass</li>
          <li>Pure JavaScript</li>
          <li>WebGL and Three.js/Pixi.js</li>
          <li>GSAP and pure CSS3 Animation</li>
          <li>ReactJS with Redux</li>
          <li>PHP and CMS know-how (Wordpress, Drupal, Shoplo)</li>
        </ul>
        <h2>I speak:</h2>
        <ul>
          <li>Polish</li>
          <li>English</li>
          <li>French</li>
          <li>Japanese - basic</li>
        </ul>
        <h2>I love:</h2>
        <ul>
          <li>Cooking</li>
          <li>Dogs</li>
          <li>Knowing things</li>
        </ul>
      </div>
    </div>
    <div className="mobile-more" onClick={changeDir}>{ReactHtmlParser('&LongLeftRightArrow;')}</div>
  </div>
}

export default About;