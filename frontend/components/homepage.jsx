const React = require('react');
const Link = require('react-router').Link;


const Homepage = React.createClass({
  render(){
    return(
      <div className="home-content">
        <div className="home-pic">
          <img src="http://res.cloudinary.com/dbewxxs0f/image/upload/v1467705192/friends-at-the-dinner-table_l8s4t6.jpg"
            className="friends-pic"></img>
            <div className="one-city-color">
              <h2 className="one-city-name">Everyone is interesting</h2>
              <p className="lt-basics-text">But you don't discover that
                when you're staring at a screen.</p>
                <Link className="commit" to="/signup">Let's Get Lunch</Link>

            </div>



        </div>


      </div>

    );
  }


});

module.exports = Homepage;
