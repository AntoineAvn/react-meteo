import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage.jsx';
import HistoriquePage from './components/HistoryPage.jsx';
import NavBar from './components/NavBar.jsx'
import NotFound from './components/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>

  <NavBar />

  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/history" element={<HistoriquePage />} />
    <Route path ="*" element={<NotFound />} />
  </Routes>

</BrowserRouter>,
)
