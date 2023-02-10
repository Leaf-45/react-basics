import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import NewCountry from './components/NewCountry';


class App extends Component {
  state =
  {
    countries: [
      { id: 1, name: 'United States', goldMedalCount: 2, silverMedalCount: 2, bronzeMedalCount: 2 },
      { id: 2, name: 'China', goldMedalCount: 3, silverMedalCount: 2, bronzeMedalCount: 2 },
      { id: 3, name: 'Germany', goldMedalCount: 0, silverMedalCount: 2, bronzeMedalCount: 2 },
    ]
  }

  handleIncrement = (id, medal) => 
    {
      const countries = [...this.state.countries];
      const idx = countries.findIndex((c) => c.id === id);
      countries[idx][medal] += 1;

      this.setState({countries: countries})
    }
    handleDecrement = (id, medal) => 
    {
      const countries = [...this.state.countries];
      const idx = countries.findIndex((c) => c.id === id);
      if (countries[idx][medal] > 0)
      {
      countries[idx][medal] -= 1;

      this.setState({countries: countries})
      }
    }

    totalMedals = () => 
    {
      const gold = this.state.countries.reduce((a, b) => a + b.goldMedalCount, 0);
      const silver = this.state.countries.reduce((a, b) => a + b.silverMedalCount, 0);
      const bronze = this.state.countries.reduce((a, b) => a + b.bronzeMedalCount, 0);
      return gold + silver + bronze;
    }
    handleDelete = (countryID) => {
      const countries = this.state.countries.filter(c => c.id !== countryID);
      this.setState({ countries:countries });
    }
    addNewCountry = (countryName) => 
    {
      const { countries } = this.state;
      const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
      const mutableCountries = countries.concat({ id: id, name: countryName, goldMedalCount: 0, silverMedalCount: 0, bronzeMedalCount: 0 });
      this.setState({countries: mutableCountries})
    }
  
  render() { 
    return ( 
      <div>
        <h1 style={{textAlign: "center"}}>Total Medals: {this.totalMedals()}</h1>
        { this.state.countries.map(country =>
        <Country
          key={country.id} 
          country={country}
          onAdd={this.handleIncrement}
          onSubtract={this.handleDecrement}
          onDelete={this.handleDelete}
          />) 
        }
        <NewCountry addNewCountry={this.addNewCountry}/>
      </div>
     );
  }
}

export default App;
