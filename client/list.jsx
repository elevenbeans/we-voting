'use strict'

import { Component } from 'react';
import { Link } from 'react-router';
import Footer from './components/footer';

class List extends Component {

	constructor(props) {
    super(props);
  }
  componentDidMount() {
		console.log(this.props.params.name);
  }
  render() {
    return (
			<div className = "listpage">
			<Link to="/detail">
				<div className="panel panel-default">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content,Panel contentPanel contentPanel contentPanel content,Panel contentPanel contentPanel contentPanel content
				  </div>
				</div>
			</Link>
			<Link to="/detail">
				<div className="panel panel-info">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content,Panel contentPanel content,Panel content,Panel content
				  </div>
				</div>
			</Link>
			<Link to="/detail">
				<div className="panel panel-warning">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content,Panel content
				  </div>
				</div>
			</Link>
			<Link to="/detail">
				<div className="panel panel-success">
				  <div className="panel-heading">
				    <h3 className="panel-title">Panel title</h3>
				  </div>
				  <div className="panel-body">
				    Panel content
				  </div>
				</div>
				</Link>
				<Footer />
			</div>
    );
  }

}

export default List;