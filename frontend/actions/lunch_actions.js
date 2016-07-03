const ActionApiUtil = require('../util/action_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const LunchConstants = require('../constants/lunch_constants.js');

module.exports = {
  fetchLunches () {
    console.log("got to actions api util fetch lunches");

    ActionApiUtil.fetchLunches(this.receiveAll);
  },

  getLunch (id) {
    ActionApiUtil.getLunch(id, this.receiveLunch);
  },

  createLunch (data) {
    ActionApiUtil.createLunch(data, this.receiveLunch);
  },

  receiveAll (lunches) {
    AppDispatcher.dispatch({
      actionType: LunchConstants.LUNCHES_RECEIVED,
      lunches: lunches
    });
  },

  receiveLunch (lunch) {
    AppDispatcher.dispatch({
      actionType: LunchConstants.LUNCH_RECEIVED,
      lunch: lunch
    });
  },

};
