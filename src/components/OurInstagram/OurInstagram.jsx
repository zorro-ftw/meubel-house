import React from 'react';
import StyledOurInstagram from './OurInstagram-styles';
import ourinsta from '../../assets/svgs/ourinsta.png';

function OurInstagram() {
  return (
    <StyledOurInstagram style={{ backgroundImage: `url(${ourinsta})` }}>
      <div className="container">
        <p>Our Instagram</p>
        <p>Follow our store on Instagram</p>
        <button>Follow Us</button>
      </div>
    </StyledOurInstagram>
  );
}

export default OurInstagram;
