webpackJsonp([4],{9:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return React.createElement("div",{className:"container"},React.createElement("hr",null),React.createElement("footer",null,React.createElement("p",{style:{"font-size":"14px"}},"© 2017  ",React.createElement("a",{href:"https://github.com/elevenBeans",target:"_blank"},"@elevenbeans"))))};t.default=n},58:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),s=n(16),u=n(9),f=a(u),m=function(e){function t(e){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),c(t,[{key:"componentDidMount",value:function(){console.log(this.refs.globalTransition),$("#globalTransition").hide()}},{key:"render",value:function(){return React.createElement("div",{className:"homepage"},React.createElement("div",{style:{"background-color":"#eee"}},React.createElement("div",{className:"jumbotron"},React.createElement("div",{className:"container"},React.createElement("h1",{style:{"font-size":"36px"}},"Let's voting!"),React.createElement("p",{className:"lead"},'This voting app is built by @elevenbeans, following the instructions of "Build a Voting App | Free Code Camp".',React.createElement("br",null),"Github Name: elevenBeans"),!userInfo.name&&React.createElement("p",null,React.createElement("a",{style:{"font-weight":"100","font-size":"14px","border-radius":"3px"},className:"btn btn-lg btn-primary",href:"/login/github?currentPath="+location.pathname,role:"button",onClick:this.signIn},"Sign in with Github")),userInfo.name&&React.createElement("p",null,React.createElement(s.Link,{style:{"font-weight":"100","font-size":"14px","border-radius":"3px"},className:"btn btn-lg btn-primary",to:"/new",role:"button"},"Create a new poll >>"))))),React.createElement("div",{className:"container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-12"},React.createElement("h2",null,"View more polls?"),React.createElement("p",{className:"lead"},"You can select a poll to see the results and vote, or sign-in to make a new poll."),React.createElement("p",null,React.createElement(s.Link,{className:"btn btn-default",to:"/list",role:"button"},"View all polls »"))))),React.createElement(f.default,null))}}]),t}(i.Component);t.default=m}});