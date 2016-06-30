const React = require('react');

const CityIndex = React.createClass({

  render(){
    return(
    <div class="city-image">
      <h2 class="city-name">
        <a class="background-filter" href="cities/SF">San Francisco</a>
        <a class="city-name" href="cities/SF">San Francisco</a>
      </h2>
    </div>
    )
  }

})

module.exports = CityIndex;
