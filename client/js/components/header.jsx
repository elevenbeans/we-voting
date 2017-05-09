'use strict'

import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

	constructor(props) {
    super(props);
  }
  render() {
  	var _imgUrl = appInfo.avatar
    return (
			<div>
				<nav className="navbar navbar-inverse" style={{"margin-bottom": "1px"}}>
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Voting</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
			        <li>
			      		<Link to = "/list">All Polls</Link>
			        </li>
			   
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li>
			        	<a>
				        	{appInfo.userName &&
				        		<img
				        		src={appInfo.avatar}
				        		width="20px"
				        		style={{"border-radius":"3px"}}
				        		/>
				        	}
			        	</a>
			       	</li>
			        <li className="dropdown">
			          <a href="#" className="dropdown-toggle"
			          	data-toggle="dropdown"
			          	role="button"
			          	aria-haspopup="true"
			          	aria-expanded="false">
			          		<span className = "glyphicon glyphicon-user"></span>
			          		<span className = "caret"></span>
			          </a>
			          <ul className="dropdown-menu">
			            <li>
			            	<a href="/login/github">
			            	{appInfo.userName?appInfo.userName:'Sign in'}
			            	</a>
			            </li>
			            {appInfo.userName && <li><a href="#">Setting</a></li>}
			            <li role="separator" className="divider"></li>
			            <li>
			            	<a href="http://bin11.cn" target="_blank">
			            		About author
			            	</a>
			            </li>
			            {appInfo.userName && <li><a href="#">Sign out</a></li>}
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
			</div>
    );
  }
} 
export default Header;