const React = require('react');
const Header = require('./header');
const Homepage = require('./homepage');

const App = React.createClass({
  setId(){
    let sticky = "";
    if(this.props.location.pathname === "/login" || this.props.location.pathname === "/signup"){
      sticky = "sticky";
    }
    return sticky;
  },

  render(){

    return(
    <div>
      <Header/>
      {this.props.children}
      <div className="footer" id= {this.setId()}>
        <div className="footer-stuff">
          <div className="logo"/>
          <p>Lunch With Strangers is all about making our cities
           feel more like neighborhoods. All we want to do is
           bring people together because, well, the world is
           better that way.
           </p>
        </div>
      </div>
    </div>
  );
  }

});

module.exports = App;
