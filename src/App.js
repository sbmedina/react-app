import React, { Component } from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Header from './components/layout/Header';
import mockAppointments from './mock/MOCK_DATA.json';
import AddAppointment from './components/AddAppointment/AddAppointment';

class App extends Component {
  state = {mockAppointments}

  updateAppointment = (editAppointment) => {
    this.setState({
      mockAppointments: [...this.state.mockAppointments.map(appointments => {
        if(appointments.id === editAppointment.id) {
          appointments = editAppointment;
        }
        return appointments;
      })]
    });
  }

  delAppointment = (id) => {
    this.setState({ mockAppointments: [...this.state.mockAppointments.filter(appointments => appointments.id !==id)] });
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
            updateAppointment={this.updateAppointment}
            delAppointment={this.delAppointment}/>
          <AddAppointment addAppointment={this.addAppointment} />
        </div>        
      </div>
    );
  }
}

export default App;