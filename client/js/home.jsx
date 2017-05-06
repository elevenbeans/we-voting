'use strict'

import { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {

	constructor(props) {
    super(props);
  }
  // signIn(){
  // 	var dataStr = (new Date()).valueOf();
  //   $.ajax({
  //     url:'/login',
  //     //url:'https://free-api.heweather.com/v5/now',
  //     type: 'GET',
  //     data: {
  //       client_id:'7d6b761d11f8d943d54f',
  //       redirect_uri: 'json',
  //       scope:'user',
  //       state: dataStr
  //     },
  //     dataType: 'jsonp',

  //     success: function(data) {
  //       $('#city').html(data.result.addressComponent.city);
  //       getWeather(data.result.addressComponent.city);
  //     },
  //     error: function(err) { alert('erro!') },
  //     beforeSend: function(xhr) {}
  //   });
  // }
  render(){
  	return(
  		<div>
  		<div style={{"background-color":"#f1f1f1"}}>
			  <div
			  	className="container"
			  > 
			  	<div
			  		className="jumbotron"
			  		style={{
			  			"background-color":"#f1f1f1"
			  		}}
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
			<div className = "container" >
				<div
		  		className = "jumbotron"
		  		style = {{
		  			"background-color":"#fff"
		  		}}
			  >
					<hr />
					<footer>
		        <p
		        	style = {{"font-size":"14px"}}>
				  		© 2016 elevenbeans.
				  	</p>
		      </footer>
	      </div>
	    </div>
      </div>
  	)
  }
}
export default Home;