import React from 'react';
import Asgaardsofa from '../../assets/svgs/Asgaardsofa.png';
import StyledAsgaardSofa from './AsgaardSofa-styles';

function AsgaardSofa() {
  return (
    <StyledAsgaardSofa>
      <img src={Asgaardsofa} alt="Asgaard sofa" />
      <div className="asgaard__text">
        <p className="asgaard__title-s">New Arrivals</p>
        <p className="asgaard__title-l">Asgaard Sofa</p>
        <input type="submit" className="order-btn" value="Order Now" />
      </div>
    </StyledAsgaardSofa>
  );
}

export default AsgaardSofa;
