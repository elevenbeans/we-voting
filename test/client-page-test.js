import React from 'react';
import TestUtils from 'react-addons-test-utils';
import should from 'should';
import App from '../client/home';

// // debugger
// if(process.env.NODE_ENV === 'dev-test'){ // for unit test
//   if (typeof userInfo === 'undefined') {
//     var userInfo = {
//       name:'Guest'
//     };
//   }
// }

// function shallowRender(Component) {
//   const renderer = TestUtils.createRenderer();
//   renderer.render(<Component />);
//   return renderer.getRenderOutput();
// }

// describe('Shallow Rendering', function () {
//   it('App\'s title should be Todos', function () {
//     const app = shallowRender(App);
//     // component's shallow rendering has props.children
//     // expect(app.props.children[0].type).to.equal('h1');
//     // expect(app.props.children[0].props.children).to.equal('Todos');
//     should.equal('div', app.props.children[0].type);
  
//   });
// });