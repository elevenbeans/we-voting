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
		  <div className="container" style={{"text-align":"center"}}> 
		  	<div
		  		className="jumbotron"
		  		style={{"background-color":"#fff",
		  			"box-shadow": "0 1px 2px rgba(0,0,0,.1)",
		  			"border-radius":"3px"
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
		      		style={{"font-weight":"100","font-size":"14px","border-radius":"3px"}}
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
  	)
  }
}
export default Home;