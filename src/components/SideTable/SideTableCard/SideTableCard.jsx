import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledDiv from './SideTableCard-styles';

export default function SideTableCard({ product }) {
  const navigate = useNavigate();

  return (
    <StyledDiv onClick={() => {
      navigate('/shop');
    }}
    >
      <img src={product?.mainImagePath} alt="side_table" className="side_table__img" />
      <p className="side_table__title">{product?.name}</p>
      <button className="side_table__btn">View More</button>
    </StyledDiv>
  );
}
