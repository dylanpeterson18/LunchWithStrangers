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


    return(

      <div className="lunch-index-item">
        <div className="lunch-item-box">
          <div className="lunch-item-top">

            <div className="lunch-item-date-time">
              <div>
              </div>
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
          </div>
          <div className="lunch-item-place">
            {lunch.place}
          </div>
          <div className="lunch-item-place">
            {lunch.details}
          </div>
        </div>
        <JoinToggle lunch={lunch}/>

      </div>
    );
  }


});

module.exports = LunchIndexItem;
