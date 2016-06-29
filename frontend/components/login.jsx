const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;

const Login = React.createClass({
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
  },
  getInitialState(){
    return({username: "", password: ""})
  },
  passwordChange(e){
    this.setState({password: e.currentTarget.value})
  },
  usernameChange(e){
    this.setState({username: e.currentTarget.value})
  },
  handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.logIn(formData);
    }
	},
  formType() {
    return this.props.location.pathname.slice(1);
  },
  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      console.log("you logged in");
    }
  },
  render(){

    return(
    <div className="login-form-container">
      <form onSubmit={this.handleSubmit}>
      <h2 className="signup-header"> Hey, stranger! </h2>
      <p className="signup-text"> Sign in to set up your next lunch! </p>
    <div className="login-form">
      <br />
        <input type="text"
          value={this.state.username}
          onChange={this.usernameChange}
          className="login-input"
          placeholder="Username"/>
        <br/>
		          <input type="password"
		            value={this.state.password}
		            onChange={this.passwordChange}
								className="login-input"
                placeholder="Password (at least 6 characters you won't forget!)"/>
        <br/>
        <input type="submit" value="Let's Get Lunch" className="commit" />
      </div>
      </form>
    </div>
    )

  }

})

module.exports = Login;
