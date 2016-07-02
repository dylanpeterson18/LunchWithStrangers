var React = require('react');
var moment = require('moment');

import { DateField, Calendar } from 'react-date-picker';

const LunchForm = React.createClass({
  getInitialState(){
    return({date: "", place: "", time: "", details:""})
  },
  placeChange(e){
    this.setState({place: e.currentTarget.value})
  },
  timeChange(e){
    this.setState({time: e.currentTarget.value})
  },
  detailsChange(e){
    this.setState({details: e.currentTarget.value})
  },
  onChange(dateString, { dateMoment, timestamp }){
    console.log(dateString)
  },
  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date: this.state.date,
      place: this.state.place,
      time: this.state.time
    };
    $.ajax({
      url: `/api/lunch_events`,
      type: "POST",
      data: formData,
      success(city) {
      console.log("code worked- you're so smart and amazing!")
      },
      error(city){
      console.log("create a lunch failedddd: you're pathetic you can't
      code a simple ajax request")
      console.log("this is the city you tried sending:"+city)
    )}
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
            maxDate={moment().add(2, 'months')}
            dateFormat="MM-DD-YYYY hh:mm a"
            onChange={this.onChange}/>
        <input type="submit" value="Create Your Lunch" className="commit" />
      </form>
    </div>
    )
  }

})

module.exports = LunchForm;
