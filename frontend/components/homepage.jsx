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


        <div className="homepage-description">
          <div className="homepage-part">
            <div className="image-container">
            <img className="hp-img" src="http://res.cloudinary.com/dbewxxs0f/image/upload/v1467935462/realpeople-1d5fb20324228744e992569f082415977c4b3799ef7b14cc5922c2dade18f97c_ydaefi.png"></img>
            </div>
            <div className="basics-container">
              <h2 className="lt-basics">It's weird.</h2>
                  <p className="lt-basics-text">
                  Everyone at Lunch time is stepping a little out of their comfort
                  zone. This makes it so much easier to actually learn something
                  unexpected about the people around you. Because open minds are
                  a prerequisite around here.</p>
              </div>
          </div>


          <div className="homepage-part">

            <div className="basics-container">
              <h2 className="lt-basics">We won't meet otherwise.</h2>
                <p className="lt-basics-text">
                In all likelihood, our paths won’t cross for any reason.
                So often, we only meet people through work, school, or
                friends of friends. And even then, it’s questionable.
                So basically, we manufacture serendipity. </p>
            </div>
            <div className="image-container">
              <img className="hp-img" src="http://res.cloudinary.com/dbewxxs0f/image/upload/v1467935462/nevermeet-55361a98c59cda3fced04c6234e80553c4ed3858c1028008e6fa3642185d57b9_uvstrq.png"></img>
            </div>
          </div>

          <div className="homepage-part">
            <div className="image-container">
              <img className="hp-img" src="http://res.cloudinary.com/dbewxxs0f/image/upload/v1467935462/highfive-e7a173c8a773070abd084deeac2eb53919a70990425599ed5e7164dc143d45c6_qeyq16.png"></img>
            </div>
            <div className="basics-container">
              <h2 className="lt-basics">Your hands are made for high fiving!</h2>
                <p className="lt-basics-text">
                And your eyes are made…for eye contact! Real
                humans are so much cooler than their tweets or
                Instagram pictures. Lunch time has real humans! #nofilter!</p>
            </div>
          </div>

        </div>
      </div>

    );
  }


});



module.exports = Homepage;
