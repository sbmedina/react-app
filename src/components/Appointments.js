import React, { Component } from 'react';
import AppointmentsItem from './Items/AppointmentItem';
import PropTypes from 'prop-types';

class Appointments extends Component {
  render() {
      return this.props.appointments.map((appointments) => (
        <AppointmentsItem 
          key={appointments.id} 
          appointments={appointments} 
          delAppointment={this.props.delAppointment}/>
      ));
  }
}

Appointments.propTypes = {
    appointments: PropTypes.array.isRequired
}

export default Appointments;