'use strict'

import React from 'react';
import { Component } from 'react';

import * as ReactD3 from 'react-d3-components';
import Footer from './components/footer';

import { getDevice } from './lib/utils';

let PieChart = ReactD3.PieChart;

let data = {
  label: 'somethingA',
  values: [
    {x: 'SomethingA', y: 10},
    {x: 'SomethingB', y: 4},
    {x: 'SomethingC', y: 4}
  ]
};

let _width = 320, _height = 200;

if(!getDevice().mobile){
  _width = 600;
  _height = 400;
}

class Detail extends Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
			<div className = "detailpage">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title" style={{"font-size":"20px"}}>
              React and Vue, which do you prefer?
            </h3>
          </div>
          <div className="panel-body">
            React and Vue, which do you prefer? 
            React and Vue, which do you prefer?
            React and Vue, which do you prefer?
          </div>
        </div>
        <ul className="list-group" style={{"line-height": "34px"}}>
          <li
            className="list-group-item"
          >            
            <div className="input-group">
              item
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  type="button"
                  // onClick={this.deleteOptions.bind(this)}
                  // data-index={index}
                >
                  Vote
                </button>
              </span>
            </div>
          </li>
          <li
            className="list-group-item"
          >            
            <div className="input-group">
              item
              <span className="input-group-btn">
                <button
                  className="btn btn-primary"
                  type="button"
                  // onClick={this.deleteOptions.bind(this)}
                  // data-index={index}
                >
                  Vote
                </button>
              </span>
            </div>
          </li>
        </ul>       

        <PieChart
          data={data}
          width={_width}
          height={_height}
          margin={{top: 10, bottom: 10, left: 100, right: 100}}
          sort={null}
        />
				<Footer />
			</div>
    );
  }

} 
export default Detail;