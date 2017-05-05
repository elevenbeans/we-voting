'use strict'

import { Component } from 'react';
import { Link } from 'react-router';

class List extends Component {

	constructor(props) {
    super(props);
  }
  render() {
    return (
			<div>
			<Link to="/detail">
				<div className="panel panel-default">
				  
					  <div className="panel-heading">
					    <h3 className="panel-title">Panel title</h3>
					  </div>
					  <div className="panel-body">
					    Panel content
					  </div>
				  
				</div></Link>
				<div className="panel panel-info">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
				<div className="panel panel-warning">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
				<div className="panel panel-success">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
			</div>
    );
  }

} 
export default List;