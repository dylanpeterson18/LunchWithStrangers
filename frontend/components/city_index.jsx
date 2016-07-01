const React = require('react');
const Link = require('react-router').Link;

const CityIndex = React.createClass({
  getInitialState: function () {
    return { cities: [] };
  },
  componentDidMount: function () {
    console.log("component did mount yay!")
    $.get("/api/cities", function (cities) {
      this.setState({cities: cities});
    }.bind(this), console.log("ajax error from city index ComDidMount"))
      console.log("state:" + this.state);
  },
  render(){
    const backgroundImage = "background-image";
    return(
    <div className="city-container">
    <div className="city-header">
      <h1 className="find-you">Where can we find you?</h1>
      <p className="choose-city">Choose the city where you'd
      like to join for lunch</p>
    </div>
    <div className="city-index">

    {this.state.cities.map( function(city) {
    return (
      <div className="city">
        <div className="city-image" style={{backgroundImage: `url(${city.image_url})`}}>

            <h2 className="city-name">
              <Link className="background-filter" to={`cities/${city.id}`}></Link>
              <Link className="city-name" to={`cities/${city.id}`}>{city.name}</Link>
            </h2>


        </div>
      </div>
      );
      }, this)}
    </div>
    </div>
    )
  },



})

module.exports = CityIndex;
