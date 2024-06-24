import React from 'react';
import './erreur.sass';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez est introuvable.</p>
      {/* Vous pouvez ajouter un lien pour retourner à la page d'accueil ou une autre action */}
    </div>
  );
};

export default NotFound;
