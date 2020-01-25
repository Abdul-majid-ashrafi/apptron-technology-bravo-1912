import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  HomeComponent,
  AboutComponent,
  ContactComponent,
  Navigation
} from './component';

const RouteComponent = () => {
  return (
    <React.Fragment>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/about:name">
            <AboutComponent />
          </Route>
          <Route path="/contactinfo">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default RouteComponent