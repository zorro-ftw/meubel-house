import styled from 'styled-components';

const StyledOurInstagram = styled.div`
  .container {
    min-height: 450px;
    width: 100%;
    margin-bottom: 93px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  p:first-child {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
  }

  p:nth-child(2) {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  button {
    margin-top: 18px;
    width: 255px;
    height: 64px;
    border: 1px solid rgb(250, 244, 244);
    border-radius: 50px;
    background-color: rgb(250, 244, 244);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    box-sizing: border-box;
    box-shadow: 0px 15px 20px 2px rgb(226, 224, 224);
    transition: all 0.3s ease-out;
    cursor: pointer;

    &:hover {
      background-color: rgb(240, 240, 185);
    }
  }

  // RESPONSIVENESS
  @media screen and (max-width: 425px) {
    p:first-child {
      font-size: 45px;
      line-height: 60px;
    }

    p:nth-child(2) {
      font-size: 16px;
      line-height: 25px;
    }

    button {
      width: 180px;
      font-size: 16px;
    }
  }
`;

export default StyledOurInstagram;
