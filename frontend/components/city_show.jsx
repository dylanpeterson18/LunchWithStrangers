const React = require('react');

const CityShow = React.createClass({
  getInitialState: function () {
    return { city: [] };
  },
  componentDidMount: function () {
    console.log("component did mount yay!")
    $.get(`/api/cities/${this.props.params.id}`, function (city) {
      this.setState({city: city});
    }.bind(this), console.log("ajax error from city show ComDidMount"))
      console.log("state:" + this.state);
  },
  render(){
    return(
    <div className="one-city">
      <div className="one-city-image" style={{backgroundImage: `url(${this.state.city.image_url})`}}>
        <div className="one-city-color">
          <h2 className="one-city-name">{this.state.city.name}</h2>
          <p>LET'S GET LUNCH</p>
          </div>

      </div>
    </div>
    )

  }

});

module.exports = CityShow;
