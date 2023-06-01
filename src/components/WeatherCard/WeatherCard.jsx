import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ city }) => {
  return (
    <div className="weather-card card m-1">
      <div className="card-body">
        <h2 className="card-title">{city.name}</h2>
        <p className="card-text">Code postal : {city.zipCode}</p>
        <p className="card-text">Température : {city.temperature}°C</p>
        <p className="card-text">Température maximale : {city.maxTemperature}°C</p>
        <p className="card-text">Température minimale : {city.minTemperature}°C</p>
        <p className="card-text">Vitesse du vent : {city.windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
