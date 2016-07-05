const React = require('react');
const SessionStore = require('../store/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const LunchStore = require('../store/lunch_store');
// && this.props.lunch.attendees.id.indexOf(SessionStore.currentUser().id) !== -1

const JoinToggle = React.createClass({


  getInitialState(){
    return({joinState: "JOIN", joinId : "join-lunch-button"});

  },
  componentDidMount(){
    this.lsListener = LunchStore.addListener(this.determineButtonText);
  },
  componentWillUnmount(){
    this.lsListener.remove();
  },
  determineButtonText(){

    if(SessionStore.isUserLoggedIn()){
      const userId = SessionStore.currentUser().id;
      if(this.props.lunch.host_id === userId){
        this.setState({joinState: "YOU'RE HOSTING THIS", joinId:"joined-lunch-button" });
      }
      else if(LunchStore.isUserAttendee(userId, this.props.lunch.id)){
        this.setState({joinState: "JOINED!", joinId: "joined-lunch-button"});
      } else {
        this.setState({joinState: "JOIN", joinId : "join-lunch-button"});
      }
    } else {
      this.setState({joinState: "SIGN IN TO SCHEDULE", joinId : "join-lunch-button"});
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
        this.setState({joinState: "JOIN", joinId:"join-lunch-button"});
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
        this.setState({joinState: "JOINED!", joinId:"joined-lunch-button"});

      }
    });
    }
  },
  render(){
    return(
      <div className="lunch-item-join-button">
         <button id={this.state.joinId} className="commit"
           onClick={this.onClick}
           >{this.state.joinState}</button>
      </div>
    );
  }
});

module.exports = JoinToggle;
