const SessionApiUtil = require('./util/SessionApiUtil.js');
const ReactDOM = require('react-dom');
const React = require('react');
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./store/session_store');

//components
const App = require('./components/app');
const Login = require('./components/login');
const SignUp = require('./components/signup');
const CityShow = require('./components/city_show');
const CityIndex = require('./components/city_index');
const LunchForm = require('./components/lunch_form');
const Dashboard = require('./components/dashboard');
const Homepage = require('./components/homepage');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//modal
const Modal = require('react-modal');

const AppRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      <Route path="login" component={Login}/>
      <Route path="signup" component={SignUp}/>
      <Route path="cities" component={CityIndex}/>
      <Route path="cities/:id" component={CityShow}/>
      <Route path="lunch_events" component={LunchForm}/>
      <Route path="dashboard" component={Dashboard}/>

    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  SessionActions.receiveUser(window.currentUser);
  Modal.setAppElement(document.body);
  const root = document.getElementById('content');
  ReactDOM.render(AppRouter, root);
});

// window.SessionActions = SessionActions;
// window.SessionStore = SessionStore;
