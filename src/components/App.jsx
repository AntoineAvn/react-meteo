import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const App = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cityData = [
        { name: 'Paris', zipCode: '75000' },
        { name: 'London', zipCode: 'SW1A 1AA' },
        { name: 'New York', zipCode: '10001' },
        { name: 'Tokyo', zipCode: '100-0001' },
        { name: 'Sydney', zipCode: '2000' },
      ];

      const apiKey = 'baacc5d96dbbffaa9386b21746d7a94b';

      const requests = cityData.map((city) =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`)
      );

      try {
        const responses = await axios.all(requests);
        const weatherData = responses.map((response, index) => ({
          name: response.data.name,
          zipCode: cityData[index].zipCode,
          temperature: response.data.main.temp,
          maxTemperature: response.data.main.temp_max,
          minTemperature: response.data.main.temp_min,
          windSpeed: response.data.wind.speed,
        }));

        setCities(weatherData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques :', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="app container">
      <h1 className="text-center">Application Météo</h1>
      <div className="row">
        {cities.map((city, index) => (
          <div className="col-md-4" key={index}>
            <WeatherCard city={city} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
