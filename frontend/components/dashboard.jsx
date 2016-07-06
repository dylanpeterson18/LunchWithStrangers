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
        console.log(res);
      }
    });
    this.lunchListener = LunchStore.addListener(this.getLunches);
    this.lunchListener2 = LunchStore.addListener(this.forceUpdate.bind(this));
    console.log("mounted Dashboard");
    LunchActions.fetchLunches();
  },

  componentWillUnmount () {
    this.lunchListener.remove();
    this.lunchListener2.remove();
  },

  getLunches () {
    this.setState({lunches: LunchStore.all()});
  },
  _handleClick(){
    hashHistory.push('/cities');
  },
  render () {
    const user = SessionStore.currentUser();
    let joinedLunches = user.lunches;
    let hostedLunches = user.hosted_lunches;
    if(!this.state.lunches){
      return(<div>THERE ARE NO LUNCHES</div>);
    } else {
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
                hostedLunches.map((lunch) =>{
                  return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
                })
              }
            </div>
          </div>
        <div className="lunches-cont">
          <h2 className="lt-basics">JOINED LUNCHES</h2>
          <div className="lunches-index">
              {
                joinedLunches.map((lunch) =>{
                  return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
                })
              }
          </div>
        </div>
      </div>

    </div>
      );
    }
  }
});

module.exports = Dashboard;
