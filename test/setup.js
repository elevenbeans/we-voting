
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world" 

const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!doctype html><html><body></body></html>`);

const { window } = dom;

// console.log(typeof document === 'undefined');

if (typeof document === 'undefined') {
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
}