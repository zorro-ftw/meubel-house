import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 453px;
  margin-top: 98px;

  h2 {
    margin: 0px;
  }

  .billing-info {
    margin: 0 auto;
    border-radius: 5px;
    float: left;
  }

  .billing-info h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .billing-info label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .billing-info select,
  .billing-info input[type='text'],
  .billing-info input[type='email'],
  .billing-info input[type='tel'] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: 16px;
  }

  .billing-info select:focus,
  .billing-info input[type='text']:focus,
  .billing-info input[type='email']:focus {
    border: 1px solid #8a2be2;
    outline: none;
  }

  .billing-info .form-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .billing-info .form-group {
    margin-bottom: 20px;
  }

  .billing-info .form-group .col-md-6 {
    flex-basis: calc(50% - 10px);
  }

  .billing-info .form-group .col-md-6:first-child {
    margin-right: 20px;
  }

  @media screen and (max-width: 480px) {
    .billing-info .form-row {
      flex-direction: column;
    }

    .billing-info .form-group .col-md-6 {
      flex-basis: 100%;
      margin-right: 0;
    }
  }
`;
export default StyledDiv;
