const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require("./modal_style");
const LunchForm = require('./lunch_form');
const LunchIndex = require('./lunch_index');

const CityShow = React.createClass({
  getInitialState: function () {
    return { city: {}, modalOpen: false };
  },
  componentDidMount: function () {
    console.log("component did mount yay!");
    $.get(`/api/cities/${this.props.params.id}`, function (city) {
      this.setState({city: city});
    }.bind(this), console.log("ajax error from city show ComDidMount"));
      console.log("state:" + this.state);
  },
  _handleClick(){
    this.setState({modalOpen: true});
  },
  onModalClose(){
    this.setState({modalOpen: false});
  },
  render(){
    if(!this.state.city.id){
      return(<div/>);
    } else {
    return(
      <div className="one-city">
        <div className="one-city-image" style={{backgroundImage: `url(${this.state.city.image_url})`}}>
          <div className="one-city-color">
            <h2 className="one-city-name">{this.state.city.name}</h2>
            <p>LET'S GET LUNCH</p>
          </div>
        </div>

        <div className="host-event-container">
          <button className="commit" onClick={this._handleClick}>
          Host Your Own Lunch
          </button>


        </div>
        <LunchIndex/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <button className="x" onClick={this.onModalClose}>X</button>
            <LunchForm city={this.state.city}/>
        </Modal>
        <div className="massive-block"/>
      </div>
    );

    }

  }

});

module.exports = CityShow;
