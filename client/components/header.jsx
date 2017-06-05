'use strict'

// import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import Transition from './transition';

import { getCookie, setCookie, base64, getPageType} from '../lib/utils';

class Header extends Component {

	constructor(props) {
    super(props);
  }
  componentWillMount() {
  	userInfo.name = base64.decode(getCookie('name'));
  	userInfo.avatar = base64.decode(getCookie('avatar'));
  	// userInfo.id = base64.decode(getCookie('id'));
  }
  signOut() {
  	setCookie('name','', { path: '/'});
  	setCookie('avatar','', { path: '/'});
  	setCookie('id','', { path: '/'});
  	setCookie('email','', { path: '/'});
  	location.reload();
  }
  render() {
  	var _imgUrl = userInfo.avatar;
    return (
			<div>
			  <Transition />
				<nav className="navbar navbar-inverse" style={{"margin-bottom": "1px"}}>
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="/">Voting

			      </a>
			    </div>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li className="active">
			        	<a href="/">Home 
			        		<span className="sr-only">(current)</span>
			        	</a>
			        </li>
			        {
			        	!getPageType(location.pathname).listPage &&
			        	<li>
			      			<Link to = "/list">All Polls</Link>
			        	</li>
			      	}
			   			{
			   				!getPageType(location.pathname).specialListPage && userInfo.name &&
			   				<li>
			      			<Link to = {"/list/" + userInfo.name}>My Polls</Link>
			        	</li>
			       	}
			   			{
			   				!getPageType(location.pathname).newPage && userInfo.name &&
			   				<li>
			      			<Link to = "/new">Create a new Poll</Link>
			        	</li>
			       	}
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li>
			        	<a>
				        	{userInfo.name &&
				        		<img
				        			src={userInfo.avatar}
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
			            	<a href={'/login/github' + '?currentPath=' + location.pathname}>
			            	{userInfo.name?userInfo.name:'Sign in'}
			            	</a>
			            </li>
			            <li>
			            	<a href="https://github.com/elevenBeans/WeVoting" target="_blank">
			            		Github resposity
			            	</a>
			            </li>
			            <li role="separator" className="divider"></li>
			            <li>
			            	<a href="http://bin11.cn" target="_blank">
			            		About author
			            	</a>
			            </li>
			            {userInfo.name &&
			            	<li><a href = "" onClick={this.signOut} > Sign out </a></li>
			            }
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