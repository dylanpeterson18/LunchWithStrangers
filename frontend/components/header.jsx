const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');



const Header = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  _handleLogOut(e){
    e.preventDefault();
    SessionActions.logOut();
  },
  onClick(){
    hashHistory.push('/');
  },
  greeting(){
    if (SessionStore.isUserLoggedIn()) {
    return(
      <div className="allthelinks">
        <Link className="link" to="/cities">Cities</Link>
        <a className="link" onClick={ this._handleLogOut }>LogOut</a>
      </div>
    );
    } else {
      return (
        <div className="allthelinks">
            <Link className="link" to="/cities">Cities</Link>
            <Link className="link" to="/dashboard">Guest Login</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/signup">Sign Up</Link>
        </div>
      );}
  },
  render(){
    return(
    <div className="header cf">
      <div className="cf header-stuff">
        <div className="cf logo-div">
          <div className="cf logo">
            <img src="https://res.cloudinary.com/dbewxxs0f/image/upload/v1467672346/LunchWithStrangers-logo_hmu0hb.png"
              onClick={this.onClick}></img>
          </div>
          <ul>
            <li>
              <Link className="link" to="/">Lunch With Strangers</Link>
            </li>
          </ul>
        </div>
        <div className="navlinks">
              {this.greeting()}
        </div>

      </div>
    </div>);

  }

});

module.exports = Header;
