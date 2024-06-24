import React from 'react';
import ReactDOM from 'react-dom';
import './_index.sass';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez BrowserRouter, Routes et Route
import NotFound from './features/NotFound/NotFound';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Gestion de l'erreur 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Provider>
);
