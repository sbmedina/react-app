import React, { Component } from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Header from './components/layout/Header';
import mockAppointments from './mock/MOCK_DATA.json';
import AddAppointment from './components/AddAppointment';
import uuid from 'uuid';

class App extends Component {
  state = {mockAppointments}

  delAppointment = (appoint) => {
    this.setState({ mockAppointments: [...this.state.mockAppointments.filter(appointments => appointments.appoint !==appoint)] });
  }

  addAppointment = ({id, buildingId, boilerId, date, estimatedTime, maintenanceType}) => {
    const newAppointment = {
      id, 
      buildingId, 
      boilerId, 
      date, 
      estimatedTime, 
      maintenanceType
    }
    this.setState({ mockAppointments: [...this.state.mockAppointments, newAppointment] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Appointments 
            appointments={this.state.mockAppointments} 
            delAppointment={this.delAppointment}/>
          <AddAppointment addAppointment={this.addAppointment} />
        </div>        
      </div>
    );
  }
}

export default App;