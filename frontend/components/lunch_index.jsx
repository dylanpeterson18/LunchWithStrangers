const React = require('react');
const LunchStore = require('../store/lunch_store.js');
const LunchActions = require('../actions/lunch_actions.js');
const LunchIndexItem = require('./lunch_index_item.jsx');


const LunchIndex = React.createClass({
  getInitialState () {
    return { lunches: [] };
  },

  componentDidMount () {
    this.lunchListener = LunchStore.addListener(this.getLunches);
    console.log("got to component did mount");
    LunchActions.fetchLunches();
  },

  componentWillUnmount () {
    this.lunchListener.remove();
  },

  getLunches () {
    this.setState({lunches: LunchStore.all()});
  },

  render () {
    if(!this.state.lunches){
      return(<div>THERE ARE NO LUNCHES</div>);
    } else {
      return (
        <div className="lunch-index">
          <ul>
            {
              this.state.lunches.map(function (lunch) {
                return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
              })
            }
          </ul>

        </div>
      );
    }
  }
});
// return(<div>
//   WE HAVE LUNCHES
//   {lunch.place}
//   {lunch.date_time}
//   {lunch.details}
// </div>);

module.exports = LunchIndex;
