import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Landing from './Landing';
import Works from './Works';

function Container({ location }) {
  return (<TransitionGroup>
    <CSSTransition key={location.key}
      timeout={{ enter: 600, exit: 600 }}
      classNames={'fade'}>
      <Switch location={location}>
        <Route exact path="/" component={Landing} />
        <Route path="/work" component={Works} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
  )
}

export default withRouter(Container);