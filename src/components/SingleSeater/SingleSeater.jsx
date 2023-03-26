import React from 'react';
import Singleseater from '../../assets/svgs/single_seater.png';
import StyledSeater from './SingleSeater-styles';

function SingleSeater() {
  return (
    <StyledSeater>
      <div className="single_seater__text">
        <p>
          Rocket single seater
        </p>
        <input type="submit" className="single_seater__shop-btn" value="Shop Now" />
      </div>
      <img src={Singleseater} alt="single-seater sofa" />
    </StyledSeater>
  );
}

export default SingleSeater;
