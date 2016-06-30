const SessionApiUtil = require('../util/SessionApiUtil');
const SessionConstants = require('../constants/session_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const hashHistory = require('react-router').hashHistory;
const ErrorActions = require('./error_actions');

const SessionActions = {
  signUp(form){
    SessionApiUtil.signUp(form, SessionActions.receiveUser, ErrorActions.setErrors);
  },
  logIn(form){
    SessionApiUtil.logIn(form, SessionActions.receiveUser, ErrorActions.setErrors );
  },
  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser, ErrorActions.setErrors);
  },
  receiveUser(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: user
    });
  },
  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }
};

module.exports = SessionActions;
