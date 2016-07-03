const Store = require('flux/utils').Store;
const LunchConstants = require('../constants/lunch_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const LunchStore = new Store(AppDispatcher);

let _lunches = {};

const resetLunches = function (lunches) {
  _lunches = {};
  lunches.forEach(function (lunch) {
    _lunches[lunch.id] = lunch;
  });
  debugger
};

const setLunch = function (lunch) {
  _lunches[lunch.id] = lunch;
};


LunchStore.all = function () {
  return Object.keys(_lunches).map(function (lunchId) {
    return _lunches[lunchId];
  });
};

LunchStore.find = function (id) {
  return _lunches[id];
};


LunchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case LunchConstants.LUNCHES_RECEIVED:
      resetLunches(payload.lunches);
      break;
    case LunchConstants.LUNCH_RECEIVED:
      setLunch(payload.lunch);
      break;
  }
  this.__emitChange();
};

module.exports = LunchStore;
