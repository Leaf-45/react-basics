import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Country from './components/Country';
import NewCountry from './components/NewCountry';

const App = () => 
{
  const [countries, setMedals] = useState([]);
  //const apiEndpoint = "https://localhost:5001/api/country";
  const apiEndpoint = "https://medals-api.azurewebsites.net/api/country"

  useEffect(() => {
    async function fetchData() {
      const { data: fetchedMedals } = await axios.get(apiEndpoint);
      setMedals(fetchedMedals);
    }
    fetchData();
  }, []);

  const handleIncrement = (id, medal) => 
    {
      const country = [...countries];
      const idx = country.findIndex((c) => c.id === id);
      country[idx][medal] += 1;

      setMedals(country)
    }
    const handleDecrement = (id, medal) => 
    {
      const country = [...countries];
      const idx = country.findIndex((c) => c.id === id);
      if (country[idx][medal] > 0)
      {
      country[idx][medal] -= 1;

      setMedals(country)
      }
    }

    const totalMedals = () => 
    {
      const gold = countries.reduce((a, b) => a + b.goldMedalCount, 0);
      const silver = countries.reduce((a, b) => a + b.silverMedalCount, 0);
      const bronze = countries.reduce((a, b) => a + b.bronzeMedalCount, 0);
      return gold + silver + bronze;
    }
    const handleDelete = async (countryID) => {
      const originalCountries = countries
      setMedals(countries.filter(c => c.id !== countryID));
      try 
      {
        await axios.delete(`${apiEndpoint}?id=${countryID}`);
      } catch (error) 
      {
        if (error.response && error.response.status === 404) 
        {
          console.log("The record does not exist - it may have already been deleted");
        }
        else 
        {
          alert('An error occurred while deleting a word');
          setMedals(originalCountries);
        }
      }
    }
    const addNewCountry = async (countryName) => 
    {
      const { data: post } = await axios.post(apiEndpoint, { name: countryName, goldMedalCount: 0, silverMedalCount: 0, bronzeMedalCount: 0 });
      setMedals(countries.concat(post))
    }


  return ( 
      <div>
        <h1 style={{textAlign: "center"}}>Total Medals: {totalMedals()}</h1>
        {countries.map(country =>
        <Country
          key={country.id} 
          country={country}
          onAdd={handleIncrement}
          onSubtract={handleDecrement}
          onDelete={handleDelete}
          />) 
        }
        <NewCountry addNewCountry={addNewCountry}/>
      </div>
     );
}

export default App;
