import React, { Component } from 'react';
import Medal from './Medal'

class Country extends Component {
  render() { 
    
    const { onAdd, onSubtract, country } = this.props;
    return ( 
    <div className='center'>
        
        <div>{country.name}</div>
        <Medal
        key={country.id} 
        country={country}
        medalName={"Gold"}
        medalCount={"goldMedalCount"}
        medalColor={"Gold"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

        <Medal
        key={country.id} 
        country={country}
        medalName={"Silver"}
        medalCount={"silverMedalCount"}
        medalColor={"silver"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

        <Medal
        key={country.id} 
        country={country}
        medalName={"Bronze"}
        medalCount={"bronzeMedalCount"}
        medalColor={"#FF5733"}
        onAdd={onAdd}
        onSubtract={onSubtract}
        />

    <p>Total Medals: {country.goldMedalCount + country.silverMedalCount + country.bronzeMedalCount}</p>
    </div> );
    }
}

export default Country