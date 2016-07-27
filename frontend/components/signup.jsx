const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const ErrorStore = require('../store/error_store');
const hashHistory = ReactRouter.hashHistory;


const SignUp = React.createClass({
  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfSignedUp);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  getInitialState(){
    return({username: "", password: "", city: ""});
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
			password: this.state.password,
      city: parseInt(this.state.city)
		};
      SessionActions.signUp(formData);
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
  redirectIfSignedUp() {
    if (SessionStore.isUserLoggedIn()) {
      $.ajax({
        url: "api/lunch_attendees",
        type: "POST",
        data: {lunch_attendees: {user_id: SessionStore.currentUser().id,
        lunch_id: 18}},
        success: (res)=>{
          SessionActions.receiveUser(res);
        }
      });
      hashHistory.push('/dashboard');
    }
  },
  cityChange(e){
    this.setState({city: e.currentTarget.value});
  },
  render(){

    return(
    <div className="wow fadeIn login-form-container">
      <form onSubmit={this.handleSubmit}>
        <h2 className="signup-header"> Join for Lunch! </h2>
        <p className="signup-text"> Thousands of strangers
        across the world have sat together for lunch.
        We can't wait for you to join them. </p>
        <div className="login-form">
            <input type="text"
              value={this.state.username}
              onChange={this.usernameChange}
              className="login-input"
              placeholder="Username"/>

    		          <input type="password"
    		            value={this.state.password}
    		            onChange={this.passwordChange}
    								className="login-input"
                    placeholder="Password (at least 6 characters!)"/>

                    { this.fieldErrors("base") }
                    { this.fieldErrors("password") }
                    { this.fieldErrors("username") }


            <div className="form-select-list">
              <select required className="form-control" id="sel1" onChange={this.cityChange}>
                <option value="">Select a city</option>
                <option value="3">Boston</option>
                <option value="4">Los Angeles</option>
                <option value="1">New York</option>
                <option value="2">San Francisco</option>
              </select>
            </div>
            <input type="submit" value="Let's Get Lunch" className="commit" />
            <button className="commit" id="guest-login" onClick={this.guestLogin}>Guest Login</button>
          </div>
      </form>
    </div>
  );

  }

});

module.exports = SignUp;
