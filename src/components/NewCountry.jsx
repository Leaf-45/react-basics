import React, { Component } from 'react';
import { Button } from '@mui/material';

class NewCountry extends Component
{
    promptUser = () => {
        const countryName = prompt("Enter the name of the country you want to add")
        if (countryName.length !== 0) this.props.addNewCountry(countryName)   
    }
    render()
    {
        return ( 
            <div className='center'>
                <Button onClick={this.promptUser} variant="contained" color="success">Add Country</Button>
            </div>);
    }
}

export default NewCountry