const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;

const SignUp = React.createClass({
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfSignedUp);
  },
  componentWillUnmount() {
    this.sessionListener.remove();
  },
  getInitialState(){
    return({username: "", password: "", city: ""})
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
			password: this.state.password,
      city: this.state.city
		};
      SessionActions.signUp(formData);
	},
  formType() {
    return this.props.location.pathname.slice(1);
  },
  redirectIfSignedUp() {
    if (SessionStore.isUserLoggedIn()) {
      console.log("signed up");
    }
  },
  cityChange(e){
    console.log(e.currentTarget.value);
    this.setState({city: e.currentTarget.value})
  },
  render(){

    return(
    <div className="login-form-container">
      <form onSubmit={this.handleSubmit}>
        <h2 className="signup-header"> Join for Lunch! </h2>
        <p className="signup-text"> Thousands of strangers
        across the world have sat together for lunch.
        We can't wait for you to join them. </p>
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
            <div class="form-select-list">
              <select class="form-control" id="sel1" onChange={this.cityChange}>
                <option hidden>Select a city</option>
                <option>Boston</option>
                <option>Los Angeles</option>
                <option>New York</option>
                <option>San Francisco</option>
              </select>
            </div>
            <input type="submit" value="Let's Get Lunch" className="commit" />
          </div>
      </form>
    </div>
    )

  }

})

module.exports = SignUp;
