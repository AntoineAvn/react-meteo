import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./SearchPage.css";

const apiKey = "baacc5d96dbbffaa9386b21746d7a94b";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`
      );

      if (response.data.cod === "404") {
        setSearchResults([]);
      } else {
        const weatherData = {
          name: response.data.name,
          zipCode: "Code postal non disponible",
          temperature: response.data.main.temp,
          maxTemperature: response.data.main.temp_max,
          minTemperature: response.data.main.temp_min,
          windSpeed: response.data.wind.speed,
        };
        setSearchResults([weatherData]);
        addToHistory(searchTerm);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données météorologiques :", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const addToHistory = (city) => {
    const updatedHistory = [...searchHistory, city];
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="search-page container">
      <h1 className="text-center">Recherche de Ville</h1>
      <form className="input-group mb-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Entrez le nom d'une ville"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Rechercher
          </button>
        </div>
      </form>

      {searchResults.length > 0 ? (
        <div className="search-results">
          <h2>Résultats de la recherche :</h2>
          {searchResults.map((result, index) => (
            <WeatherCard key={index} city={result} />
          ))}
        </div>
      ) : isSearching ? null : (
        <div className="search-results">
          <h2>Aucune ville trouvée</h2>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
