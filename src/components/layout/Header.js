import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Appointments</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>Id</li>
                <li style={liStyle}>Building Id</li>
                <li style={liStyle}>Boiler Id</li>
                <li style={liStyle}>Date</li>
                <li style={liStyle}>Estimated Time</li>
                <li style={liStyle}>Maintenance Type</li>                
                <li style={liStyle}>Actions</li>
            </ul>
        </header>
    )
}
const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: 'rgb(239,232,216)',
    borderBottom: '1px solid #333', 
}
const liStyle =  {
    float: 'left',
    display: 'block',
    width: '11%',
    color: 'rgb(19,84,76)',
    fontWeight: 800,
    fontSize: 12,
    textAlign: 'center',
    padding: '16px 16px 16px',
}
const headerStyle = {
    background: 'rgb(239,232,216)',
    color: 'rgb(19,84,76)',
    textAlign: 'center',
    padding: '10px',
}

export default Header;