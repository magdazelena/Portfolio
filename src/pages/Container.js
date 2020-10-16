import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Landing from './Landing';
import Work from './Work';

function Container({ location }) {
  return (<TransitionGroup className="transition-group">
    <CSSTransition key={location.key}
      timeout={{ enter: 600, exit: 600 }}
      classNames={'fade'}>
      <section className="route-section">
        <Switch location={location}>
          <Route exact path="/" component={Landing} />
          <Route path="/work" component={Work} />
        </Switch>
      </section>

    </CSSTransition>
  </TransitionGroup>
  )
}

export default withRouter(Container);