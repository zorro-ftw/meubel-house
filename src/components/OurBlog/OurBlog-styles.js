import styled from 'styled-components';

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 944px;
  padding-inline: 6.9444%;
  margin-bottom: 54px;

  .blog__heading {
    max-width: 479px;
    height: 91px;
    text-align: center;
    margin-top: 55px;
    margin-bottom: 65px;
  }

  .blog__heading p:first-child {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }

  .blog__title-s {
    margin: 0px;
    width: 100%;
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #9f9f9f;
  }

  .blog__img {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px 30px;
    margin-bottom: 0px;
    min-height: 555px;
    margin-top: 65px;
  }

  .blog__img__text > img {
    width: 100%;
    max-width: 393px;
    min-width: 280px;
  }

  .blog__img__text p {
    margin-top: 33px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
  }

  .blog__img__text button {
    outline: none;
    border: none;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid black;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
    cursor: pointer;
    color: black;
    transition: all 0.3s ease-out;
    display: block;
    height: 46px;

    &:hover {
      background-color: rgb(240, 240, 185);
    }
  }

  .blog__img__text__small {
    display: flex;
    align-items: center;
    margin-top: 19px;
  }

  .blog__img__text__small small {
    padding-left: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    margin-right: 21px;
    padding-block: 5px;
  }

  .blog__button {
    outline: none;
    border: none;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid black;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
    color: black;
    transition: all 0.3s ease-out;
    display: block;
    margin-top: 76px;

    &:hover {
      background-color: rgb(240, 240, 185);
    }
  }

  // RESPONSIVENESS
  @media screen and (max-width: 768px) {
    .blog__img__text button {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export default StyledBlog;
