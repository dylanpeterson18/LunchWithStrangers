const React = require('react');

const CityIndex = React.createClass({
  getInitialState: function () {
    return { cities: [] };
  },
  componentDidMount: function () {
    console.log("component did mount yay!")
    $.get("/api/cities", function (cities) {
      this.setState({cities: cities});
    }.bind(this), console.log("ajax error?"))
      console.log("state:" + this.state);
  },
  render(){
    const backgroundImage = "background-image";
    return(
    <div className="city-index">
    {this.state.cities.map( function(city) {
    return (
      <div className="city">
        <div className="city-image" style={{backgroundImage: `url(${city.image_url})`}}>

            <h2 className="city-name">
              <a className="background-filter"
                href={`cities/${city.id}`}>Hello</a>
              <a className="city-name" href={`cities/${city.id}`}>{city.name}</a>
            </h2>


        </div>
      </div>
      );
      }, this)}
    </div>
    )
  },



})

module.exports = CityIndex;
