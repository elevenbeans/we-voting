'use strict'

import React from 'react';
import { Component } from 'react';

import Footer from './components/footer';

class New extends Component {

	constructor(props) {
    super(props);
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    if(!appInfo.name){
      // 不支持未登陆 landing, 滚去登陆!
      location.href = location.origin + '/login/github';
    }
  }
  addOptions(){
    var temp = this.state.options;
    temp.push($('#poll-option').val());

    this.setState({
      options: temp
    });
    $('#poll-option').val('');

  }
  submitPollData(){
    
  }
  render() {
    return (
			<div className = "newpage">
        <h2 className = "left">Create a new poll.</h2>
        <span
          className="input-group-addon"
          style={{"text-align":"left"}}
        >
          Poll title:
        </span> 
        <div className="input-group" style={{"width":"100%"}}>
          <input
            type="text"
            name="title"
            id="poll-title"
            className="form-control"
            placeholder="Please input a title here ..."
            aria-describedby="sizing-addon2"
          />
        </div> <br />
        <span className="input-group-addon" style={{"text-align":"left"}}>Description: </span>
        <div className="input-group" style={{"width":"100%"}}>
          <textarea
            type="text"
            rows="3"
            name="description"
            id="poll-description"
            className="form-control"
            placeholder="Descripte your polls ..."
            aria-describedby="sizing-addon2"
          >
          </textarea>
        </div> <br />
        <span
          className="input-group-addon"
          style={{"text-align":"left"}}
        >
          Options:
        </span> 
        <ul className="list-group">
          {this.state.options.map(
            (item)=>(
              <li className="list-group-item">{item}</li>
            )
          )}
          {this.state.options.length === 0?<li className="list-group-item">To be added ...</li>:''}
        </ul>
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group">
              <input
                type = "text"
                className="form-control"
                id = "poll-option"
                placeholder="Write your options and click the button..."
                name = "option"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  type="button"
                  onClick={this.addOptions.bind(this)}
                >
                  Add
                </button>
              </span>
            </div>
          </div>
        </div><hr />
				<button
          className="btn btn-primary"
          onClick={this.submitPollData.bind(this)}
        >
          Submit
        </button>
        <Footer />
			</div>
    );
  }

} 
export default New;