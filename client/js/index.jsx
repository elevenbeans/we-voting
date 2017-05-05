'use strict';

//import $ from 'zepto';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { RouteTransition, presets } from 'react-router-transition';

import Home from './home';
import Header from './components/header';
import Detail from './detail';
// import FlightList from 'flightlist';
import List from './list';
// import Hotel from 'hotel';

if (module.hot && process.env.NODE_ENV === 'dev-HMR') module.hot.accept();

// console.log('process.env.NODE_ENV in Front-end:', process.env.NODE_ENV);

var styles = presets.slideLeft;

var App = function({ children, location }) {
  styles = location.action === 'POP' ? presets.slideRight : presets.slideLeft;
  // console.log(location.action);
  return (
  <div>
    <Header />
    <RouteTransition
      className="transition-wrapper"
      pathname={location.pathname}
      runOnMount={false}
      {...styles}>
      {children}
    </RouteTransition>

  </div>
  );
};

render((<Router key={Math.random()} history={browserHistory} >
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            
            <Route path="list" component={List}>
            </Route>
            
            <Route path="detail" component={Detail}>
            </Route>

          </Route>
        </Router>
  ), document.getElementById('app')
);
