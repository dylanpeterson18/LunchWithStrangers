const React = require('react');

const Login = React.createClass({
  getInitialState(){
    return({username: "", password: ""})
  },
  passwordChange(e){
    this.setState({password: e.currentTarget.value})
  },
  usernameChange(e){
    this.setState({username: e.currentTarget.value})
  },
  render(){
    const username = "username";
    return(
    <div>
      <form>
        <label for="username">{'Username'}</label>
        <input id="username" type="text" onChange={this.usernameChange} value={this.state.username}/>
        <br/>
        <br/>
        <label for="password">{'Password'}</label>
        <input id="password" type="text" onChange={this.passwordChange} value={this.state.password}/>
      </form>
    </div>
    )

  }

})

module.exports = Login;
