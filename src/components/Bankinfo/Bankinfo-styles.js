import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 532px;
  display: flex;
  flex-direction: column;
  margin-top: 98px;

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .cart-item {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    span:first-child {
      color: #9f9f9f;
    }
  }

  .cart-subt {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .total {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .total__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    width: 90%;
    height: 1px;
    background-color: #d9d9d9;
    align-self: center;
    margin-top: 40px;
    margin-bottom: 22px;
  }

  button {
    padding: 17px 80px;
    max-width: 318px;
    border-radius: 15px;
    border: 1px solid black;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    align-self: center;
    background-color: white;
    cursor: pointer;
  }
`;

export default StyledDiv;
