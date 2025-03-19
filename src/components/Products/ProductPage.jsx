import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainProductPage from '../Main/MainProductPage';
import Registration from '../ModalRegistration/Registration';

function ProductPage() {
  return (
    <>
      <Registration />
      <Header />
      <MainProductPage />
      <Footer />
    </>
  );
}

export default ProductPage;
