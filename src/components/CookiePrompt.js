import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef, useState } from 'react';
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga';


export default function CookiePrompt() {
  const [consent, setConsent] = useState(false);
  const cookie = useRef();
  useEffect(() => {
    gsap.to(cookie.current, {
      duration: 1,
      y: '90vh'
    })
  })
  useEffect(() => {
    if (consent) {
      launchAnalytics();
    }
  }, [consent]);

  const launchAnalytics = () => {
    ReactGA.initialize('UA-60323034-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (<div className="cookiePrompt" ref={cookie}>
    <CookieConsent
      location="bottom"
      buttonText="Alright"
      declineButtonText="No"
      enableDeclineButton={true}
      cookieName="analyticsCookie"
      cookieValue={true}
      expires={150}
      style={{ maxWidth: "400px", color: "#3b5768", backgroundColor: "rgba(255,255,255,.8)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "2em", border: "2px solid #ff3399" }}
      buttonStyle={{ backgroundColor: "#ff3399", fontFamily: "'Bebas Neue', sans-serif", padding: "1em", width: "100px" }}
      declineButtonStyle={{ backgroundColor: "#a5b5be", fontFamily: "'Bebas Neue', sans-serif", padding: "1em", width: "100px" }}
      onAccept={() => setConsent(true)}
    >
      I would like to track your visit to learn about your experience.
    </CookieConsent>
  </div>)
};
