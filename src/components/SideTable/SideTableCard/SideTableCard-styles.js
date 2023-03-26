import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 45%;
  min-width: 331px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .side_table__img {
    width: 80%;
  }

  .side_table__title {
    max-width: 80%;
    font-weight: 500;
    font-size: 30px;
    line-height: 48px;
  }

  .side_table__btn {
    width: fit-content;
    outline: none;
    border: none;
    background-color: rgb(250, 244, 244);
    border-bottom: 2px solid black;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    cursor: pointer;
    color: black;
    transition: all 0.3s ease-out;
    padding-bottom: 10px;
    padding-top: 5px;

    &:hover {
      background-color: rgb(240, 240, 185);
    }
  }

  // RESPONSIVENESS
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export default StyledDiv;
