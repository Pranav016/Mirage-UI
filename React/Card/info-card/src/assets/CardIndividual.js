import React from 'react';
import image from "./logo.png";

const CardIndividual = () => {
    return (
        <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="profile" />
          </div>
          <div className="details">
            <h2>
              Mirage UI
              <br />
              <span className="description">
                Mirage-UI is a set of easily accessible, reusable, and
                composable design components.
              </span>
            </h2>
          </div>
        </div>
      </div>
    );

};

export default CardIndividual;