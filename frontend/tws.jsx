const SessionApiUtil = require('./util/SessionApiUtil.js')
const ReactDOM = require('react-dom');
const React = require('react');
const SessionActions = require('./actions/session_actions')
const SessionStore = require('./store/session_store');

//components
const App = require('./components/app');
const Login = require('./components/login');
const SignUp = require('./components/signup');
const CityShow = require('./components/city_show');
const CityIndex = require('./components/city_index');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const AppRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/cities" component={CityIndex}/>
      <Route path="/cities/:id" component={CityShow}/>
    </Route>
  </Router>
)

document.addEventListener('DOMContentLoaded', function() {

  const root = document.getElementById('content');
  ReactDOM.render(AppRouter, root);
});

window.SessionActions = SessionActions;
window.SessionStore = SessionStore;
