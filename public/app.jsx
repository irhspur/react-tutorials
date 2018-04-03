var Greeter = React.createClass({
  getDefaultProps: function() {
    return{
      name: 'React',
      message: 'This is from component'
    };
  },
  getInitialState: function () {
    return{
      name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
    
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name == 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }    

    //var name = this.refs.name.value;
    //this.refs.name.value = '';    
    
    //this.setState({
     // name: name
    //});
    // alert(name);
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "!!"}</p>

	<form onSubmit={this.onButtonClick}>
	  <input type="text" ref="name"/>
	  <button>Set Name</button>
	</form>
      </div>
    );
  }
});

var firstName = "Andrew";
var message = "This is a custom message"
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
