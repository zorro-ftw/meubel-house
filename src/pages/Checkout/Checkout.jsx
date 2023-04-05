import React from 'react';
import Intro from '../../components/Intro/Intro';
import NavBar from '../../components/NavBar/NavBar';
import BillingForm from '../../components/Billingform/Billingform';
import BankingInfo from '../../components/Bankinfo/Bankinfo';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import StyledMain from './Checkout-styles';

function Checkout() {
  return (
    <>
      <NavBar />
      <Intro />
      <StyledMain>
        <BillingForm />
        <BankingInfo />
      </StyledMain>
      <Banner />
      <Footer />
    </>
  );
}

export default Checkout;
