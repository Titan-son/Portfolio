import React from 'react';
import './position.sass';
import background from '../../assets/videos/space_background.mp4';

function Position({ theme }) {
  return (
    <div className={`container_pos ${theme}`}>
      <video autoPlay loop muted className="background-video">
        <source src={background} type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h1><b>Actuellement :</b></h1>
        <h2><b>À la recherche d'opportunités</b></h2>
      </div>
    </div>
  );
}

export default Position;
