import React, { Component } from 'react'

export class AddAppointment extends Component {
    state = {
        id: '',
        buildingId: '',
        boilerId: '',
        date: '',
        estimatedTIme: '',
        maintenanceType: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addAppointment(this.state);
        this.setState(
            {
                id: '',
                buildingId: '',
                boilerId: '',
                date: '',
                estimatedTIme: '',
                maintenanceType: ''
            });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="number" 
                    name="Id" 
                    placeholder="Id"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.id}
                    onChange={this.onChange}
                ></input>
                <input
                    type="number" 
                    name="buildingId" 
                    placeholder="Building Id"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.buildingId}
                    onChange={this.onChange}
                ></input>
                <input
                    type="number" 
                    name="boilerId" 
                    placeholder="Boiler Id"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.boilerId}
                    onChange={this.onChange}
                ></input>
                <input
                    type="date" 
                    name="date" 
                    placeholder="Date"
                    style={{ flex: '1', padding: '3px'}}
                    value={this.state.date}
                    onChange={this.onChange}
                ></input>
                <input
                    type="number" 
                    name="Estimated Time" 
                    placeholder="Estimated Time"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.estimatedTIme}
                    onChange={this.onChange}
                ></input>
                <input
                    type="text" 
                    name="Maintenance Type" 
                    placeholder="Maintenance Type"
                    style={{ flex: '1', padding: '5px'}}
                    value={this.state.maintenanceType}
                    onChange={this.onChange}
                ></input>                
                <input 
                    type="submit" 
                    value="Add Appointment"
                    className="btn"
                    style={{color: 'rgb(239,232,216)',backgroundColor: 'rgb(19,84,76)',border: '1px solid #333',fontWeight: '600', flex: '1', padding: '4px'}}
                ></input>
            </form>
        )
    }
}

export default AddAppointment
