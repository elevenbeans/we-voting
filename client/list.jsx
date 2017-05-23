'use strict'

import { Component } from 'react';
import { Link } from 'react-router';

import Loading from './components/loading';

import Footer from './components/footer';

class List extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	loadingPop: true,
    	pollList: []
    };
  }
  componentDidMount() {
    $('#globalTransition').hide();
  	if(this.props.params.name === userInfo.name){
  		this.fetchPollList(this.props.params.name);
  	} else {
  		this.fetchPollList();
  	}
  }
  fetchPollList(userName){
    $.ajax({
      type: "POST",
      url: '/api/getPollList',
      async: true,
      contentType: "application/json;charset=utf-8",
      data: JSON.stringify({'userName': userName}),
      dataType: 'json',
      success: function (data) {
        if(data && data.length !== 0) {
          this.setState({
          	pollList: data,
          	loadingPop: false
          });
        } else {
        	this.setState({
        		loadingPop: false
        	});
        }
      }.bind(this)
  	});
  }

  render() {
    return (
			<div className = "listpage">
				{this.state.pollList.map((item)=>(
					<Link to = {"/detail/" + item.pollID}>
						<div className="panel panel-default">
						  <div className="panel-heading">
						    <h3 className="panel-title">{item.title}</h3>
						  </div>
						  <div className="panel-body">
						  	{item.description}
						  </div>
              <div className="panel-footer">Created by {item.ownerName}</div>
						</div>
					</Link>
				))}
				{this.state.loadingPop && <Loading />}
				{!this.state.loadingPop &&
					this.state.pollList.length === 0 &&
					<div> no result ~ </div>
				}
				<Footer />
			</div>
    );
  }

}

export default List;