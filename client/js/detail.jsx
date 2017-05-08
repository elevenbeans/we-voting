'use strict'

import React from 'react';
import { Component } from 'react';

import Footer from './components/footer';

class Detail extends Component {

	constructor(props) {
    super(props);
  }
  render() {
    return (
			<div className = "detailpage">
				detail page~
				<Footer />
			</div>
    );
  }

} 
export default Detail;