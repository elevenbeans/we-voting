'use strict'

import { Component } from 'react';
import { Link } from 'react-router';

import Footer from './components/footer';

class Home extends Component {

	constructor(props) {
    super(props);
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
			      	<h1 style={{"font-size":"36px"}}>Let's voting!</h1>
			      	<p className="lead">
								This voting app is built by @elevenbeans, 
								following the instructions of "Build a Voting App | Free Code Camp". <br />
								Github Name: elevenBeans
							</p>
			      	<p>
			      		<a
			      			style={{
			      				"font-weight":"100",
			      				"font-size":"14px",
			      				"border-radius":"3px"
			      			}}
			      			className="btn btn-lg btn-primary"
			      			href="/login/github"
			      			role="button"
			      			onClick={this.signIn}
			      		>
			      			Sign in with Github
			      		</a>
			      	</p>
			    	</div>
			  	</div>
				</div>

				<div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2>View more polls?</h2>
		          <p className = "lead">You can select a poll to see the results and vote, or sign-in to make a new poll.</p>
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