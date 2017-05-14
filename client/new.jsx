'use strict'

import React from 'react';
import { Component } from 'react';

import Footer from './components/footer';

class New extends Component {

	constructor(props) {
    super(props);
    this.state = {
      options: [
        'Like ...',
        'Dislike ...',
        'Do not matter ...'
      ]
    }
  }
  componentDidMount() {
    if(!userInfo.name){
      // 不支持未登陆 landing, 滚去首页!
      location.href = location.origin;
    }
  }
  addOptions(){
    var _temp = this.state.options;
    _temp.push($('#poll-option').val());

    this.setState({
      options: _temp
    });
    $('#poll-option').val('');
  }
  deleteOptions(e){
    var _index = $(e.target).attr('data-index');
    var _temp = this.state.options;
    _temp = _temp.filter(function(item, index){
      return index !== ~~_index;
    });
    this.setState({
      options: _temp
    });
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
        <ul className="list-group" style={{"line-height": "34px"}}>
          {this.state.options.map(
            (item, index)=>(
              <li
                className="list-group-item"
              >            
                <div className="input-group">
                  {item}
                  <span className="input-group-btn">
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={this.deleteOptions.bind(this)}
                      data-index={index}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </li>
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
                placeholder="Write your options and click the add button..."
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