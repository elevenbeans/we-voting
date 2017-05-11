'use strict'

import React from 'react';
import { Component } from 'react';

import Footer from './components/footer';

class New extends Component {

	constructor(props) {
    super(props);
  }
  render() {
    return (
			<div className = "newpage">
				new page~
				<Footer />
			</div>
    );
  }

} 
export default New;