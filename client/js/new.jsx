'use strict'

import React from 'react';
import { Component } from 'react';

import Footer from './components/footer';

class New extends Component {

	constructor(props) {
    super(props);
  }
  componentDidMount() {
    if(!appInfo.name){
       location.href = location.origin + '/login/github'; // 不支持 landing! 滚去登陆
    }
  }
  render() {
    return (
			<div className = "newpage">
				new page ~
				<Footer />
			</div>
    );
  }

} 
export default New;