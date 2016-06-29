const React = require('react');
const Link = require('react-router').Link;

const Header = React.createClass({

  render(){
    return(
    <div className="header cf">
      <div className="cf header-stuff">
        <div className="cf logo-div">
          <div className="cf logo">
          </div>
          <ul>
            <li>
              Lunch With Strangers
            </li>
          </ul>
        </div>
        <ul className="navlinks">
          <li>
            <Link className="link" to="/cities">Cities</Link>
          </li>
          <li>
            <Link className="link" to="/dashboard">Guest Login</Link>
          </li>
          <li>
            <Link className="link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>)

  }

})

module.exports = Header;
