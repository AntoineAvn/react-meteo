import React, { useState, useEffect } from 'react';

const HistoriquePage = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  return (
    <div className="historique-page container">
      <h1 className="text-center">Historique des Recherches</h1>
      {searchHistory.length > 0 ? (
        <ul>
          {searchHistory.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      ) : (
        <p>Aucune recherche effectuée.</p>
      )}
    </div>
  );
};

export default HistoriquePage;
