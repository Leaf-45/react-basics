import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state =
  {
    countries: [
      { id: 1, name: 'United States', goldMedalCount: 2 },
      { id: 2, name: 'China', goldMedalCount: 3 },
      { id: 3, name: 'Germany', goldMedalCount: 0 },
    ]
  }
  
  render() { 
    return ( 
      this.state.countries.map(country => <Country
         key={country.id} 
         name={country.name} 
         gold={country.goldMedalCount}
         onAdd={this.addGold}
         />)
     );
  }
}

export default App;
