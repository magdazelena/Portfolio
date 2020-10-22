import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/components/contact.scss';

function Contact(props) {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.currentTheme);

  useEffect(() => {
    dispatch({ type: 'SET_THEME', payload: 'light' });

  }, [dispatch]);
  return <div className={`contact ${currentTheme}`}>
    <h1 className="section-title outline">
      Contact
    </h1>
    <div className="contact--links">
      <h2>Let's get to know each other</h2>
      <div className="contact--links--main">
        <h3>Mail me:</h3>
        <a href="mailto:halohalo@magdazelezik.com">halohalo@magdazelezik.com</a>
        <h3>Find me:</h3>
        <a href="https://www.instagram.com/magdazelezik/">Instagram</a>
        <a href="https://github.com/magdazelena">GitHub</a>
        <a href="https://www.linkedin.com/in/magda-zelezik/">LinkedIn</a>
        <a href="https://medium.com/@magdazelena">Medium</a>
      </div>
      {/* <div className="contact--links--sub">
        <h3 className="subheadline">Do you like this website? <a href="https://github.com/magdazelena/Portfolio">Check out the source code!</a></h3>
        <h3 className="subheadline">Or contact me to make one for you.</h3> 
      </div> */}
    </div>
  </div>
}

export default Contact;