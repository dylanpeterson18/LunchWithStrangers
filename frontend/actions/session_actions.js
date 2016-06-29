const SessionApiUtil = require('../util/SessionApiUtil');
const SessionConstants = require('../constants/session_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  signUp(form){
    SessionApiUtil.signUp(form, SessionActions.receiveUser);
  },
  logIn(form){
    SessionApiUtil.logIn(form, SessionActions.receiveUser, () => {console.log("loggggggERRRORRR");} );
  },
  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
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
