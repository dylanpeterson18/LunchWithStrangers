const React = require('react');
const Link = require('react-router').Link;
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const hashHistory = ReactRouter.hashHistory;

const CityIndex = React.createClass({
  getInitialState: function () {
    return { cities: [] };
  },
  componentDidMount: function () {
    $.get("/api/cities", function (cities) {
      this.setState({cities: cities});
    }.bind(this));
  },
  render(){
    const backgroundImage = "background-image";
    return(
    <div className="city-container">
    <div className="city-header wow fadeInDown">
      <h1 className="find-you">Where can we find you?</h1>
      <p className="choose-city">Choose the city where you'd
      like to join for lunch</p>
    </div>
    <div className="city-index">

    {this.state.cities.map( function(city) {
    return (
      <div className="city wow fadeInUpBig" key={city.id}>
        <div className="city-image" style={{backgroundImage: `url(${city.image_url})`}}>
          <div className="black">
            <h2 className="city-name">
              <Link className="background-filter" to={`cities/${city.id}`}></Link>
              <Link className="city-name" to={`cities/${city.id}`}>{city.name}</Link>
            </h2>
          </div>
        </div>
      </div>
      );
      }, this)}
    </div>
    </div>
  );
  },



});

module.exports = CityIndex;
