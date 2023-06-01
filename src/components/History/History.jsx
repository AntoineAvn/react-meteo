import React, { useState, useEffect } from 'react';

function History() {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');

    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setSearchHistory([]);
  };

  return (
    <div>
      <h1>Historique</h1>
      {searchHistory.length === 0 ? (
        <p>Aucune recherche récente</p>
      ) : (
        <ul>
          {searchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      )}
      <button onClick={clearHistory}>Effacer l'historique</button>
    </div>
  );
}

export default History;
