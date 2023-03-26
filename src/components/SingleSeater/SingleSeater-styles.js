import styled from 'styled-components';

const StyledSeater = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-left: 14.027777%;
  background-color: rgb(251, 235, 181);
  aspect-ratio: 1.6 / 1;
  width: 100%;

  img {
    width: 50%;
    aspect-ratio: 0.88667 / 1;
    max-width: 798px;
  }

  .single_seater__text {
    width: 50%;
    margin-bottom: 200px;

    p {
      margin: 0px;
      width: 100%;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 4rem;
      line-height: 96px;
      max-width: 440px;
      min-width: 163px;
    }
  }

  .single_seater__shop-btn {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-top: 35px;
  }

  input {
    outline: none;
    border: none;
    background-color: rgb(251, 235, 181);
    border-bottom: 2px solid black;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    font-weight: 600;
    color: black;
    transition: all 0.3s ease-out;
    padding-bottom: 13px;

    &:hover {
      background-color: rgb(240, 240, 185);
    }
  }

  // RESPONSIVENESS
  @media screen and (max-width: 768px) {
    padding-top: 50px;

    .single_seater__text {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    .single_seater__text {
      p {
        font-size: 40px;
        line-height: 50px;
      }
    }
  }
`;

export default StyledSeater;
