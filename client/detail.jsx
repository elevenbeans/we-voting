'use strict'

import React from 'react';
import { Component } from 'react';

import * as ReactD3 from 'react-d3-components';
import Footer from './components/footer';

import { getDevice } from './lib/utils';

let PieChart = ReactD3.PieChart;

let _width = 320, _height = 200;

if(!getDevice().mobile){
  _width = 600;
  _height = 400;
}

class Detail extends Component {
	constructor(props) {
    super(props);
    this.state = {
      pollDetailData: [],
      loadingPop: true
    }
  }
  componentDidMount() {
    this.fetchPollDetail(this.props.params.id);
  }
  fetchPollDetail(id){
    $.ajax({
      type: "POST",
      url: '/api/getPollByID',
      async: true,
      contentType: "application/json;charset=utf-8",
      data: JSON.stringify({'pollID': id}),
      dataType: 'json',
      success: function (data) {
        if(data && data.length !== 0) {
          this.setState({
            pollDetailData: data,
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
  voteOption(e){
    $.ajax({
      type: "POST",
      url: '/api/upDatePollByID',
      async: true,
      contentType: "application/json;charset=utf-8",
      data: JSON.stringify({
        'pollID': this.props.params.id,
        'index': ~~$(e.target).attr('data-index')
      }),
      dataType: 'json',
      success: function (data) {
        if(data && data.result) {
          alert('vote suc');
          this.fetchPollDetail(this.props.params.id);
        } else {
          this.setState({
            loadingPop: false
          });
        }
      }.bind(this)
    });
  }
  render() {
    let _result = this.state.pollDetailData[0];
    let data = {
      label: '',
      values: []
    };
    let _countZero = 0;
    _result && _result.options.map(function(item){
      data.label = item.option;
      if(!item.count){
        item.count = 0;
        _countZero++;
      }

      data.values.push({
        x: item.option,
        y: item.count
      });

    });

    return (
			<div className = "detailpage">
        {this.state.pollDetailData.length !== 0 && 
          <div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title" style={{"font-size":"20px"}}>
                  {_result.title}
                </h3>
              </div>
              <div className="panel-body">
                  {_result.description}
              </div>
            </div>
            <ul className="list-group" style={{"line-height": "34px"}}>
              {_result && _result.options.map( (item, index) => (
                <li
                  className="list-group-item"
                >            
                  <div className="input-group">
                    {item.option}
                    <span className="input-group-btn">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.voteOption.bind(this)}
                        data-index = {index}
                      >
                        Vote
                      </button>
                    </span>
                  </div>
                </li>
                )
              )}
            </ul>       

            { _result.options.length !== _countZero && 
              <PieChart
                data={data}
                width={_width}
                height={_height}
                margin={{top: 10, bottom: 10, left: 100, right: 100}}
                sort={null}
              />
            }
          </div>
        }
        {!this.state.loadingPop &&
          this.state.pollDetailData.length === 0 &&
          <div> no result ~ </div>
        }
				<Footer />
			</div>
    );
  }

} 
export default Detail;