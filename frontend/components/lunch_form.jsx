var React = require('react');
var moment = require('moment');
const LunchActions = require('../actions/lunch_actions');

import { DateField, Calendar } from 'react-date-picker';

const LunchForm = React.createClass({
  getInitialState(){
    return({date_time: {}, place: "", details:""})
  },
  placeChange(e){
    this.setState({place: e.currentTarget.value})
  },
  detailsChange(e){
    this.setState({details: e.currentTarget.value})
  },
  dateChange(dateString, { dateMoment, timestamp }){
    this.setState({date_time: dateMoment})
    console.log(dateMoment);
  },
  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date_time: this.state.date_time.toString(),
      place: this.state.place,
      details: this.state.details,
      host_id: 1,
      city_id: this.props.city.id
    };
    LunchActions.createLunch(formData);
    this.setState({date_time: {}, place: "", details:""})

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
            dateFormat="MM-DD-YYYY hh:mm a"
            onChange={this.dateChange}/>
        <input type="submit" value="Create Your Lunch" className="commit" />
      </form>
    </div>
    )
  }

})

module.exports = LunchForm;
