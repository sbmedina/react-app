import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AppointmentItem extends Component {
    getStyle = () => {
         return {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'rgb(239,232,216)'
         }
    }

    liStyle = () => {
        return {
            float: 'left',
            display: 'block',
            width: '11%',
            color: 'rgb(0,0,0)',
            fontWeight: 600,
            fontSize: 13,
            textAlign: 'center',
            padding: '16px 10px 16px',
            borderBottom: '1px solid #333',
        }
    }

    render() {
        const {appoint} = this.props.appointments;
        return (
            <div>               
                <ul style={this.getStyle()}>
                    <li style={this.liStyle()}>{ this.props.appointments.id }</li>
                    <li style={this.liStyle()}>{ this.props.appointments.buildingId }</li>
                    <li style={this.liStyle()}>{ this.props.appointments.boilerId }</li>
                    <li style={this.liStyle()}>{ this.props.appointments.date }</li>
                    <li style={this.liStyle()}>{ this.props.appointments.estimatedTime }</li>
                    <li style={this.liStyle()}>{ this.props.appointments.maintenanceType }</li>                    
                    <div>
                        <button onClick={this.props.delAppointment.bind(this, appoint)} style={btnStyle}>x</button>
                    </div>    
                </ul>
            </div>
        )
    }
}

AppointmentItem.propTypes = {
    appointments: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: ' 5px 10px',
    cursor: 'pointer'
}

export default AppointmentItem
