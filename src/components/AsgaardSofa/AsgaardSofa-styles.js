import styled from 'styled-components';

const StyledAsgaardSofa = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  padding-right: 6.9444%;
  background-color: rgb(255, 249, 229);
  width: 100%;
  justify-content: space-between;

  img {
    width: 66%;
    max-width: 947px;
    aspect-ratio: 1.482 / 1;
    min-width: 507px;
  }

  .asgaard__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    font-style: normal;

    .asgaard__title-s {
      margin: 0px;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
    }

    .asgaard__title-l {
      margin: 0px;
      font-weight: 700;
      font-size: 48px;
      line-height: 72px;
    }
  }

  input {
    padding-inline: 75px;
    padding-block: 17px;
    margin-top: 33px;
    background-color: rgb(255, 249, 229);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    &:hover {
      background-color: rgb(240, 240, 185);
    }
  }

  // RESPONSIVENESS
  @media screen and (max-width: 1024px) {
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    padding-inline: 6.9444%;
    row-gap: 15px;

    img {
      width: 100%;
      min-width: 200px;
    }

    .asgaard__text {
      .asgaard__title-s {
        font-size: 16px;
        line-height: 30px;
      }

      .asgaard__title-l {
        margin: 0px;
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
      }
    }

    input {
      margin-top: 16px;
      padding-inline: 30px;
      padding-block: 8px;
      font-size: 14px;
    }
  }
`;

export default StyledAsgaardSofa;
