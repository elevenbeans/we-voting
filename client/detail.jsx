'use strict'

import React from 'react';
import { Component } from 'react';

import * as ReactD3 from 'react-d3-components';

import Loading from './components/loading';
import Spning from './components/spning';

import Footer from './components/footer';

import { getDevice, formatPercentage } from './lib/utils';

let PieChart = ReactD3.PieChart;

let _width = 320, _height = 200;

if(!getDevice(navigator.userAgent).mobile){
  _width = 600;
  _height = 400;
}

class Detail extends Component {
	constructor(props) {
    super(props);
    this.state = {
      pollDetailData: [],
      loadingPop: true,
      isVoting: false,
      votingIndex: '',
      votable: true
    }
  }
  componentDidMount() {
    $('#globalTransition').css('display', 'none');
    this.fetchPollDetail(this.props.params.id);
  }
  fetchPollDetail(id){
    $.ajax({
      type: 'POST',
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
          data[0] && data[0].voterList && data[0].voterList.map(function(item){
            if(item === userInfo.name){
              this.setState({
                votable: false
              });
            }
          }.bind(this));
        } else {
          this.setState({
            loadingPop: false
          });
        }
      }.bind(this)
    });
  }
  voteOption(e){
    if(!userInfo.name) {
      location.href = '/login/github' + '?currentPath=' + location.pathname;
      return false;
    }
    this.setState({
      isVoting: true,
      votingIndex: $(e.target).attr('data-index')
    });
    $.ajax({
      'type': "POST",
      'url': '/api/upDatePollByID',
      'async': true,
      'contentType': "application/json;charset=utf-8",
      'data': JSON.stringify({
        'pollID': this.props.params.id,
        'index': ~~$(e.target).attr('data-index'),
        'voter': userInfo.name
      }),
      'dataType': 'json',
      success: function (data) {
        if(data && data.result) {
          this.fetchPollDetail(this.props.params.id);
          this.setState({
            isVoting: false,
            votingIndex: ''
          });
        } else {
          this.setState({
            isVoting: false,
            votingIndex: ''
          });
        }
      }.bind(this)
    });
  }
  render() {
    let _result = this.state.pollDetailData[0];
    let data = {
      'label': '',
      'values': []
    };
    let _countZero = 0; // 无人投票的选项数量
    let totalCounts = 0; // 该选项的投票总数

    _result && _result.options.map(function(item){
      totalCounts += item.count;
    });
    _result && _result.options.map(function(item){
      data.label = item.option;
      if(!item.count){
        item.count = 0;
        _countZero++;
      }
      data.values.push({
        'x': item.option + ' (' + formatPercentage(item.count/totalCounts) + '%)',
        'y': item.count
      });
    });

    return (
			<div className = "detailpage">
        {this.state.pollDetailData.length !== 0 &&
          <div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3
                  className="panel-title"
                  style={{"font-size":"20px"}}
                >
                  {_result.title}
                </h3>
              </div>
              <div className="panel-body">
                  {_result.description}
              </div>
            </div>
            <ul
              className="list-group"
              style={{"line-height": "34px"}}
            >
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
                        style={{"position":"relative"}}
                        disabled={this.state.votable?'':'disabled'}
                      >
                        {this.state.isVoting &&
                          ~~this.state.votingIndex === index?<Spning />:'Vote'
                        }
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
                margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
                sort={null}
              />
            }
          </div>
        }
        {this.state.loadingPop && <Loading />}
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
