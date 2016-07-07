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
    this.lunchListener2 = LunchStore.addListener(this.forceUpdate.bind(this));
    LunchActions.fetchLunches();
  },

  componentWillUnmount () {
    this.lunchListener.remove();
    this.lunchListener2.remove();
  },

  getLunches () {
    this.setState({lunches: LunchStore.all()});
  },

  render () {
    const cityid = this.props.cityid;
    if(!this.state.lunches){
      return(<div>THERE ARE NO LUNCHES</div>);
    } else {
      return (
        <div className="lunch-index">

            {
              this.state.lunches.map((lunch) =>{
                if(lunch.city_id.toString() === cityid){
                  return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
                }
              })
            }


        </div>
      );
    }
  }
});


module.exports = LunchIndex;
