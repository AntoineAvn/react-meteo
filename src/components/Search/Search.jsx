import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchCity = async () => {
    // Effectuer la recherche de la ville avec axios
    
    // Mettre à jour l'historique des recherches
    const storedHistory = localStorage.getItem('searchHistory');
    const searchHistory = storedHistory ? JSON.parse(storedHistory) : [];
    searchHistory.push(searchText);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  };

  return (
    <div>
      <h1>Recherche</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={searchCity}>Rechercher</button>
      {/* Le reste du code pour afficher les résultats de la recherche */}
    </div>
  );
}

export default Search;
