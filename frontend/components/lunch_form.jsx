var React = require('react');
var moment = require('moment');
const LunchActions = require('../actions/lunch_actions');
const CityShow = require('./city_show');
const SessionStore = require('../store/session_store');

import { DateField, Calendar } from 'react-date-picker';

const LunchForm = React.createClass({
  getInitialState(){
    return({date_time: {}, place: "", details:"", time: ""});
  },
  placeChange(e){
    this.setState({place: e.currentTarget.value});
  },
  detailsChange(e){
    this.setState({details: e.currentTarget.value});
  },
  dateChange(dateString, { dateMoment, timestamp }){
    this.setState({date_time: dateMoment});
    console.log(dateMoment);
  },
  timeChange(e){
    this.setState({time: e.currentTarget.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    const formData = {
      date_time: this.state.date_time.toString(),
      place: this.state.place,
      details: this.state.details,
      host_id: SessionStore.currentUser().id,
      city_id: this.props.city.id,
      time: this.state.time
    };
    LunchActions.createLunch(formData);
    this.setState({date_time: {}, place: "", details:"", time: ""});

  },
  render(){
    return(
    <div>
      <form onSubmit={this.handleSubmit}>

        <p>City:  {this.props.city.name}</p>

        <label for="lunch-where">Where: </label>
        <input type="text"
          value={this.state.place}
          onChange={this.placeChange}
          id="lunch-where"
          className="lunch-input-where"
          placeholder="e.g. Tacolicious at 714 Valencia St., Tony's Pizza in North Beach"/>

          <label for="lunch-details">Details: </label>
        <input type="textarea"
            value={this.state.details}
            onChange={this.detailsChange}
            id="lunch-details"
            className="lunch-input"
            placeholder="e.g. The reservation is under Dylan! We'll be
            in the back room."/>

            <DateField
                  placeholderText="Click to select a date"
                  minDate={moment()}
                  maxDate={moment().add(4, 'months')}
                  dateFormat="MM-DD-YYYY"
                  onChange={this.dateChange}/>

          <select className="select-time" onChange={this.timeChange}>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
          </select>

        <input type="submit" value="Create Your Lunch" className="commit" />
      </form>
    </div>
  );
  }

});



module.exports = LunchForm;
