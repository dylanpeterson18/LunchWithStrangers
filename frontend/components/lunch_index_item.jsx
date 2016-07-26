const React = require('react');
const JoinToggle = require('./join_toggle');

const weekDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

const months = {
  0: "Jan",
  1: "Feb",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

const LunchIndexItem = React.createClass({

  render(){
    let lunch = this.props.lunch;
    let date = new Date(lunch.date_time);
    let day = weekDays[date.getDay()];
    let month = months[date.getMonth()] + " " + date.getDate();
    let time = lunch.time;
    let host = "no host!!";
    let pic= "http://res.cloudinary.com/dbewxxs0f/image/upload/v1467851907/Screen_Shot_2016-07-06_at_5.38.16_PM_q6lgsv.png";
    let dylanId="";
    if(lunch.host){
      host = lunch.host.username;
      if(host === "DylanPeterson"){
        dylanId= "dylan";
      }
      if(lunch.host.picture_url){
        pic = lunch.host.picture_url;
      }
    }
    return(

      <div className="lunch-index-item wow fadeInUp" id={dylanId}>
        <div className="lunch-item-box">
          <div className="lunch-item-top">

            <div className="lunch-item-date-time">

              <div className="lunch-item-day">
                {day}
              </div>
              <div className="lunch-item-date">
                {month}
              </div>
              <div className="lunch-item-time">
                {time}
              </div>
            </div>

            <div className="profile-container">
              <div className="profile-pic">
                <img className="profile-pic-img" src={pic}></img>
              </div>
              <div className="host-box">
                {host}
              </div>
            </div>


          </div>

          <div className="lunch-item-place">
            Place: <div id="lunch-item-place"> {lunch.place}</div>
          </div>
          <div className="lunch-item-place">
            Details: <div id="lunch-item-place"> {lunch.details}</div>
          </div>
        </div>
        <JoinToggle lunch={lunch}/>

      </div>
    );
  }


});

module.exports = LunchIndexItem;
