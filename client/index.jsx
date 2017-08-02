'use strict';

import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { RouteTransition, presets } from 'react-router-transition';

import Header from './components/header';

// import Home from './home'; // Load on demand
// import Detail from './detail';
// import List from './list';
// import New from './new';

if (module.hot && process.env.NODE_ENV === 'dev-HMR') module.hot.accept();

var styles = presets.slideLeft;

const App = function({ children, location }) {
  styles = location.action === 'POP' ? presets.slideRight : presets.slideLeft;
  return (
  <div>
    <Header />
    <RouteTransition
      className="transition-wrapper"
      pathname={location.pathname}
      runOnMount={false}
      {...styles}
    >
      {children}
    </RouteTransition>
  </div>
  );
};

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(nextState, callback){
      require.ensure([], require => {
        callback('', require('home').default);
      },'home');
    }
  },
  childRoutes: [
    {
      path:'new',
      getComponent(nextState, callback){
        $('#globalTransition').css('display', 'block');
        require.ensure([], require => {
          callback(null, require('new').default);
        }, 'new');
       }
    },
    {
      path:'list(/:name)',
      getComponent(nextState, callback){
        $('#globalTransition').css('display', 'block');
        require.ensure([], require => {
          callback(null, require('list').default);
        }, 'list');
      }
    },
    {
      path:'detail(/:id)',
      getComponent(nextState, callback){
        $('#globalTransition').css('display', 'block');
        require.ensure([],require => {
          callback(null, require('detail').default);
        }, 'detail');
      }
    }
  ]
};

render((<Router
          key = {Math.random()}
          history = {browserHistory}
          routes = {rootRoute}
        >
        </Router>
  ), document.getElementById('app')
);
