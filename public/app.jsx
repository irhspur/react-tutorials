var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Andrew";
var message = "This is a custom message"
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
