const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;
const ErrorStore = require('../store/error_store');

const Login = React.createClass({
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },
  getInitialState(){
    return({username: "", password: ""});
  },
  passwordChange(e){
    this.setState({password: e.currentTarget.value});
  },
  usernameChange(e){
    this.setState({username: e.currentTarget.value});
  },
  handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};
    SessionActions.logIn(formData);
	},
  fieldErrors(field) {
  const errors = ErrorStore.formErrors(this.formType());
  if (!errors[field]) { return; }

  const messages = errors[field].map( (errorMsg, i) => {
    return <li key={ i } className="error-messages">{ errorMsg }</li>;
  });

  return <ul>{ messages }</ul>;
  },
  formType() {
    return this.props.location.pathname.slice(1);
  },
  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      console.log("logged in");
      hashHistory.push("/");
    }
  },
  guestLogin(){
    const guestdata = {
      username: "BarackObama",
      password: "BarackObama"
    };
    SessionActions.logIn(guestdata);
  },
  render(){

    return(
    <div className="login-form-container">
      <h2 className="signup-header"> Hey, stranger! </h2>
      <p className="signup-text"> Sign in to set up your next lunch! </p>
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>


          <input type="text"
            value={this.state.username}
            onChange={this.usernameChange}
            className="login-input"
            placeholder="Username"/>


  		    <input type="password"
  		      value={this.state.password}
  		      onChange={this.passwordChange}
  					className="login-input"
            placeholder="Password"/>

          {  this.fieldErrors("base") }
           { this.fieldErrors("password") }
           { this.fieldErrors("username") }

          <input type="submit" value="Let's Get Lunch" className="commit" />


        </form>
        <button className="commit" id="guest-login" onClick={this.guestLogin}>Guest Login</button>
      </div>

    </div>
  );

  }

});

module.exports = Login;
