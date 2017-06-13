'use strict'

import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import Footer from './components/footer';

// if(process.env.NODE_ENV === 'dev-test'){ // for react unit test
// 	if (typeof userInfo === 'undefined') {
// 		var userInfo = {
// 			name:'Guest'
// 		};
// 	}
// }

class Home extends Component {

	constructor(props) {
    super(props);
  }
  componentDidMount() {
  	$('#globalTransition').hide();
  }
  render(){

  	return(
  		<div className = "homepage">
  			<div style={{"background-color":"#eee"}}>
			  	<div
			  		className="jumbotron"
			  	> 
				  	<div
				  		className="container"
				  	>
			      	<h1 style={{"font-size":"36px"}}>
			      		Let's voting! <br />
			      		<iframe
			      			src = "https://ghbtns.com/github-btn.html?user=elevenBeans&repo=WeVoting&type=star&count=true"
			      			scrolling="0"
			      			width="110px"
			      			height="30px"
									style={{
										"border":"0",
										"position":"absolute",
										"left":"12px",
										"top": "12px"
									}}
			      		>
			      		</iframe>

			      	</h1>
			      	<p className="lead">
								This voting app is built by @elevenbeans, 
								following the instructions of "Build a Voting App | Free Code Camp".<br />
								Github Name: elevenBeans <br />
							</p>
			      	{!userInfo.name &&
			      		<p>
			      		<a
			      			style={{
			      				"font-weight":"100",
			      				"font-size":"14px",
			      				"border-radius":"3px"
			      			}}
			      			className="btn btn-lg btn-primary"
			      			href= {'/login/github' + '?currentPath=' + location.pathname}
			      			role="button"
			      			onClick={this.signIn}
			      		>
			      			Sign in with Github
			      		</a>
			      	</p>}
			      	{userInfo.name &&
			      		<p>
			      		<Link
			      			style={{
			      				"font-weight":"100",
			      				"font-size":"14px",
			      				"border-radius":"3px"
			      			}}
			      			className="btn btn-lg btn-primary"
			      			to = "/new"
			      			role="button"
			      		>
			      			Create a new poll >>
			      		</Link>
			      	</p>}
			    	</div>
			  	</div>
				</div>

				<div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2>View more polls?</h2>
		          <p className = "lead">
		          	You can select a poll to see the results and vote, or sign-in to make a new poll.
		          </p>
		          <p>
		          	<Link className="btn btn-default" to="/list" role="button">
		          		View all polls »
		          	</Link>
		          </p>
		        </div>
		      </div>
    		</div>
    	<Footer />
      </div>
  	)
  }

}
export default Home;