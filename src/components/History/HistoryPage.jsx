import React, { useState, useEffect } from 'react';
import './HistoryPage.css';

const HistoriquePage = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <div className="historique-page container">
      <h1 className="text-center">Historique des Recherches</h1>
      {searchHistory.length > 0 ? (
        <div>
          <button onClick={clearHistory} className='btn btn-danger mt-4'>Effacer l'historique</button>
          <ul>
            {searchHistory.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Aucune recherche effectuée.</p>
      )}
    </div>
  );
};

export default HistoriquePage;
