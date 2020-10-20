import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import _ from 'lodash';
import Landing from './Landing';
import Work from './Work';
import Project from './Project';

function Container({ location }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const routes = ["/", "/work"];
  const currentScreen = routes.indexOf(location.pathname);
  const { state } = location;
  const previousScreen = state ? state.previousScreen : 0;
  const animationClassNames = currentScreen > previousScreen ? 'slide-down' : 'slide-up';
  const history = useHistory();

  useEffect(() => {
    history.push({
      pathname: routes[currentIndex],
      state: { previousScreen: currentScreen }
    })
    // eslint-disable-next-line
  }, [currentIndex]);

  useLayoutEffect(() => {
    let initPos;
    let isScrollingDown = false;

    const switchScenes = (e) => {
      if (e.touches) {
        isScrollingDown = initPos < e.changedTouches[0].clientY;
      } else {
        isScrollingDown = Math.sign(e.wheelDeltaY) < 0;
      }
      if (isScrollingDown) {
        if (currentIndex < routes.length - 1)
          setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        if (currentIndex > 0)
          setCurrentIndex(prevIndex => prevIndex - 1);
      }
    };
    const onWheel = _.debounce(switchScenes, 100);
    const getInitTouch = e => {
      initPos = e.touches[0].clientY;
    }
    window.addEventListener('mousewheel', onWheel);
    window.addEventListener('touchstart', getInitTouch)
    window.addEventListener('touchend', switchScenes);
    return () => {
      window.removeEventListener('mousewheel', onWheel);
      window.removeEventListener('touchend', switchScenes);
      window.removeEventListener('touchstart', getInitTouch);
    }
    // eslint-disable-next-line
  }, [currentIndex]);
  return (<TransitionGroup
    className="transition-group"
    childFactory={child => React.cloneElement(child, {
      classNames: animationClassNames
    })}>
    <CSSTransition key={location.key}
      appear={true}
      timeout={{ enter: 600, exit: 600, appear: 600 }}
      classNames={`${animationClassNames} slide`}>
      <section className="route-section">
        <Switch location={location}>
          <Route exact path={routes[0]} component={Landing} />
          <Route path={routes[1]} component={Work} />
          <Route path="/project/:id" component={routerProps => <Project id={routerProps.match.params.id} />} />
        </Switch>
      </section>

    </CSSTransition>
  </TransitionGroup>
  )
}

export default withRouter(Container);