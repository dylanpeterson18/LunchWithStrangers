const React = require('react');
const LunchStore = require('../store/lunch_store.js');
const LunchActions = require('../actions/lunch_actions.js');
const LunchIndexItem = require('./lunch_index_item.jsx');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require('../actions/session_actions');



const Dashboard = React.createClass({
  getInitialState () {
    return { lunches: [] };
  },

  componentDidMount () {
    $.ajax({
      url: `/api/users/${SessionStore.currentUser().id}`,
      success: (res)=>{
        SessionActions.receiveUser(res);
      }
    });
    this.userListener = SessionStore.addListener(this.forceUpdate.bind(this));

    this.lunchListener = LunchStore.addListener(this.getLunches);
    this.lunchListener2 = LunchStore.addListener(this.forceUpdate.bind(this));

    LunchActions.fetchLunches();
  },

  componentWillUnmount () {
    this.lunchListener.remove();
    this.lunchListener2.remove();
    this.userListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  getLunches () {
    this.setState({lunches: LunchStore.all()});
  },
  _handleClick(){
    hashHistory.push('/cities');
  },
  render () {

    if(this.state.lunches.length === 0){
      return(<div>THERE ARE NO LUNCHES</div>);
    } else {

      const user = SessionStore.currentUser();
      let joined = [];
      let hosted = [];
      let hostedButton = "";
      let joinedButton = "";
      this.state.lunches.forEach((lunch) => {
        if(lunch.host_id === user.id){
          hosted.push(lunch);
        } else if(LunchStore.isUserAttendee(user.id, lunch.id)){
          joined.push(lunch);
        }


      });
      if(hosted.length===0){
        hostedButton =
        <div className="dashboard-no-lunches">
          <h3>You aren't hosting any lunches. Eat guilt free with friends.</h3>
            <p className="quotes">"It is a scientific fact that your body will not absorb cholesterol if you take it from another person's plate."</p>
            <p className="quotes">- Dave Barry</p>
          <button id="host-own-lunch-button" className="commit" onClick={this._handleClick}>
          Create a Lunch!
        </button>
      </div>;
      }
      if(joined.length===0){
        joinedButton =
        <div className="dashboard-no-lunches">
          <h3>You haven't joined any lunches. How will everyone know how amazing you are?
          Get out there and get a drink with someone.</h3>
        <p className="quotes">"Wine is constant proof that God loves us and loves to see us happy."</p>
        <p className="quotes">- Benjamin Franklin</p>
          <button id="host-own-lunch-button" className="commit" onClick={this._handleClick}>
          Join a Lunch!
        </button>
      </div>;
      }


      return (
      <div className="dashboard">
        <div className="welcome">
          <div className="control-panel">
            <h1 className="lt-basics">
              Welcome, {user.username}
            </h1>
            <h3 className="cool-people">What cool people will you meet today?</h3>
            <button id="host-own-lunch-button" className="commit" onClick={this._handleClick}>
            Sign Up for a lunch time!
            </button>
          </div>
          <div className="dashboard-description">
            <p className="quotes">"There are no strangers here, only friends you haven't met"</p>
            <p className="quotes">-William Butler Yeats</p>
          </div>
        </div>
        <div className="dashboard-lunch-index">
          <div className="lunches-cont">
            <h2 className="lt-basics">HOSTED LUNCHES</h2>
            <div className="lunches-index">

              {
                hosted.map((lunch) =>{
                  return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
                })

              }
              {hostedButton}
            </div>
          </div>
        <div className="lunches-cont">
          <h2 className="lt-basics">JOINED LUNCHES</h2>
          <div className="lunches-index">
              {
                joined.map((lunch) =>{
                  return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
                })
              }
              {joinedButton}
          </div>
        </div>
      </div>

    </div>
      );
    }
  }
});

module.exports = Dashboard;
