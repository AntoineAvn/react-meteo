import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = 'baacc5d96dbbffaa9386b21746d7a94b';

function Home() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cityIds = ['CITY_ID_1', 'CITY_ID_2', 'CITY_ID_3', 'CITY_ID_4', 'CITY_ID_5']; // Remplacez les CITY_ID par les identifiants des villes souhaitées

      const requests = cityIds.map(cityId =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`)
      );

      try {
        const responses = await Promise.all(requests);
        const weatherData = responses.map(response => response.data);

        setCities(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Accueil</h1>
      {cities.map(city => (
        <div key={city.id}>
          <h2>{city.name}</h2>
          <p>Code Postal: {city.cod}</p>
          <p>Température: {city.main.temp}</p>
          <p>Température Maximale: {city.main.temp_max}</p>
          <p>Température Minimale: {city.main.temp_min}</p>
          <p>Vitesse du Vent: {city.wind.speed}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
