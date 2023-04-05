import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .subtotal {
    display: flex;
    align-items: center;
  }

  .subtotal h2 {
    margin-right: 10px;
  }
  .total {
    display: flex;
    align-items: center;
  }

  .total h2 {
    margin-right: 30px;
  }
`;
function CartTotals(props) {
  return (
    <StyledDiv>
      <h1>Cart Totals</h1>
      <div className="total-container">
        <div className="subtotal">
          <h2>Subtotal</h2>
          <p>Rs.200,000</p>
        </div>
        <div className="total">
          <h2>Total</h2>
          <p>{props.total}</p>
        </div>
      </div>
    </StyledDiv>
  );
}

export default CartTotals;
