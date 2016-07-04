const React = require('react');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

  var joinId = "join-lunch-button";

const JoinToggle = React.createClass({

  getInitialState(){
    if(SessionStore.isUserLoggedIn()){
      return({joinState: "JOIN"});
    } else {
      return({joinState: "SIGN IN TO SCHEDULE"});
    }

  },

  onClick(e){
    if (this.state.joinState === "SIGN IN TO SCHEDULE"){
      hashHistory.push("/login");
    } else if(this.state.joinState === "JOINED!"){
      e.preventDefault();
      this.setState({joinState: "UNJOINING..."});

      $.ajax({
      url: "/api/lunch_attendees/1000" ,
      method: "DELETE",
      data: {lunch_attendees: {lunch_id: this.props.lunch.id,
      user_id: SessionStore.currentUser().id}},
      success: ()=> {
        joinId="join-lunch-button";
        this.setState({joinState: "JOIN"});
      }
    });
    } else if (this.state.joinState === "JOIN"){
      e.preventDefault();
      this.setState({joinState: "JOINING..."});

      $.ajax({
      url: "api/lunch_attendees",
      method: "POST",
      dataType: "json",
      data: {lunch_attendees: {lunch_id: this.props.lunch.id,
      user_id: SessionStore.currentUser().id}},
      success: ()=> {
        joinId="joined-lunch-button";
        this.setState({joinState: "JOINED!"});

      }
    });
    }
  },
  render(){
    return(
      <div className="lunch-item-join-button">
         <button id={joinId} className="commit"
           onClick={this.onClick}
           >{this.state.joinState}</button>
      </div>
    );
  }
});

module.exports = JoinToggle;
