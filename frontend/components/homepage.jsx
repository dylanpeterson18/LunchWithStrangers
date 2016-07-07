const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../store/session_store');


const Homepage = React.createClass({
  render(){
    let linkLoc = "";
    if(SessionStore.isUserLoggedIn()){
      linkLoc="/cities";
    } else {
      linkLoc="/signup";
    }
    return(
      <div className="home-content">

        <div className="one-city-image" style={{backgroundImage: `url("http://res.cloudinary.com/dbewxxs0f/image/upload/v1467705192/friends-at-the-dinner-table_l8s4t6.jpg")`}}>
          <div className="one-city-color">
            <h2 className="one-city-name" id="homepage-header">Everyone is interesting</h2>
            <p id="homepage-text">But you don't discover that
                    when you're staring at a screen.</p>
                  <Link className="commit" id="home-signup" to={linkLoc}>Let's Get Lunch</Link>
          </div>


        </div>

        <div className="what-is-lt-wrapper">
          <div className="what-is-lt-container">
            <div className="lt-part">
              <h2 className="lt-basics">Show Up</h2>
              <p className="lt-basics-text">You and a few others
              join a host at a lunch spot.</p>
            </div>
            <div className="lt-part">
            <h2 className="lt-basics">Be Present</h2>
              <p className="lt-basics-text">Engage. Be yourself. Meet
              cool people. </p>
            </div>
            <div className="lt-part">
            <h2 className="lt-basics">See What Happens</h2>
              <p className="lt-basics-text">
              Make lifelong friends. Or have one enjoyable lunch.
              No strings attached.</p>
            </div>
          </div>
        </div>


      </div>

    );
  }


});



module.exports = Homepage;
