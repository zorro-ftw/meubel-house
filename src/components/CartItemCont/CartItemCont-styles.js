import styled from 'styled-components';

const StyledRow = styled.tr.attrs({ className: 'cart__cartItem' })`
  .cart__item-img div {
    width: 106px;
    height: 106px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .cart__item-qty input {
    height: 32px;
    width: 32px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #9f9f9f;
    text-align: center;
  }

  .cart__item-name,
  .cart__item-price,
  .cart__item-subt {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .cart__item-name,
  .cart__item-price {
    color: #9f9f9f;
  }

  td i {
    font-size: 16px;
    color: #fbebb5;
    cursor: pointer;
  }
`;

export default StyledRow;
