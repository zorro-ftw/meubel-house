import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline: 6.9444%;
  margin-top: 72px;
  margin-bottom: 63px;
  gap: 30px;

  .cart__table {
    width: 817px;
    min-width: 687px;
    padding: 0px;
    border: none;
    border-collapse: collapse;

    thead,
    tbody {
      border: none;
    }

    thead {
      width: 100%;
      height: 55px;
      background-color: #fff9e6;
    }

    th {
      padding: 0px;
      text-align: start;
      border: 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    th:first-child {
      width: 106px;
    }

    .cart-empty {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }
  }

  .cart__sidebar {
    width: 100%;
    max-width: 393px;
    min-width: 341px;
    height: 390px;
    background-color: #fff9e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    padding-inline: 75px;

    .cart__sidebar-title {
      margin: 0px 0px 61px 0px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
    }

    .cart__sidebar-sub {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0px;
      margin-bottom: 31px;

      span:nth-child(2) {
        color: #9f9f9f;
      }
    }

    .cart__sidebard-tot {
      font-family: 'Poppins';
      font-style: normal;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0px;
      margin-bottom: 48px;

      span:first-child {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }

      span:nth-child(2) {
        color: #b88e2f;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
      }
    }

    a {
      color: black;
      text-decoration: none;
      padding: 14px 58px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      border: 1px solid black;
      border-radius: 15px;
    }
  }

  // RESPONSIVENESS
  @media only screen and (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;
  }
`;

export default StyledDiv;
