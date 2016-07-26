const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require("./modal_style");
const LunchForm = require('./lunch_form');
const LunchIndex = require('./lunch_index');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../store/session_store');
const LunchStore = require('../store/lunch_store');

const CityShow = React.createClass({
  getInitialState: function () {
    return { city: {}, modalOpen: false };
  },
  componentDidMount: function () {
    $.get(`/api/cities/${this.props.params.id}`, function (city) {
      this.setState({city: city});
    }.bind(this));
  },
  _handleClick(){
    if(SessionStore.isUserLoggedIn()){
      this.setState({modalOpen: true});
    } else {
      hashHistory.push('/login');
    }

  },
  onModalClose(){
    this.setState({modalOpen: false});
  },
  render(){
    let hostEventText = "hi";
    if(SessionStore.isUserLoggedIn()){
      hostEventText="Host Your Own Lunch";
    } else {
      hostEventText="Sign In To Host Your Own Lunch";
    }
    if(!this.state.city.id){
      return(<div/>);
    } else {
    return(
      <div className="one-city">
        <div className="one-city-image" style={{backgroundImage: `url(${this.state.city.image_url})`}}>
          <div className="one-city-color">
            <h2 className="jello one-city-name">{this.state.city.name}</h2>
            <p>LET'S GET LUNCH</p>
          </div>
        </div>

        <div className="host-event-container">
          <button id="host-own-lunch-button" className="commit" onClick={this._handleClick}>
          {hostEventText}
          </button>
        </div>



        <div className="join-for-lunch-wrapper wow rubberBand">
          <div className="join-for-lunch-container">
            <h2 className="lt-basics">Join for lunch time in the next few months!</h2>
            <p className="lt-basics-text">
              Every lunch time is brought together by someone in our host
               community that gets it. Each of them was brought on by hosts
               before them. They’re all awesome.
            </p>
          </div>
        </div>

        <LunchIndex cityid={this.props.params.id}/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <button className="x" onClick={this.onModalClose}>X</button>
            <LunchForm city={this.state.city} closeModal={this.onModalClose}/>

        </Modal>
      </div>
    );

    }

  }

});

module.exports = CityShow;
