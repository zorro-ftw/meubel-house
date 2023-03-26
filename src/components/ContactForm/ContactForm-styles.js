import styled from 'styled-components';

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: 6.9444%;

  .contact__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 98px;
  }

  .contact__title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    margin-bottom: 7px;
    margin-top: 0px;
  }

  .contact__desc {
    margin: 0px;
    max-width: 644px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9f9f9f;
    text-align: center;
    padding: 5px;
    text-transform: capitalize;
  }

  .contact__text span {
    padding-left: 47px;
  }

  .contact__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 60px;
    margin-top: 133px;
  }

  .contact__info {
    max-width: 393px;
    min-height: 537px;
  }

  .contact__info__separated {
    display: flex;
    gap: 30px;
  }

  .phone {
    margin-top: 42px;
  }

  .clock {
    margin-top: 42px;
  }

  .img__text small {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .img__text p {
    margin-top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .contact__form {
    width: 100%;
    max-width: 531px;
    min-height: 734px;
    display: flex;
    flex-direction: column;
    margin-bottom: 70px;
  }

  input {
    margin-top: 22px;
    margin-bottom: 36px;
    box-sizing: border-box;
    width: 100%;
    max-width: 528.75px;
    height: 75px;
    border: 1px solid #9f9f9f;
    border-radius: 10px;
    padding: 26px 30px;
  }

  .contact__form p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    display: flex;
    justify-content: center;
    margin-top: 13px;
    border: 1px solid #000000;
    border-radius: 15px;
    width: 237px;
    height: 48px;
    box-sizing: border-box;
    padding: 12px 89px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: white;

    &:hover {
      background-color: rgb(240, 240, 240);
    }
  }

  // RESPONSIVENESS
  @media screen and (max-width: 425px) {
    .contact__title {
      font-size: 26px;
      line-height: 42px;
    }

    .contact__info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .contact__info__separated {
      width: 100%;
    }

    button {
      width: 150px;
      padding-block: 12px;
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

export default StyledContactForm;
