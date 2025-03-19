import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../features/products/productsSlice';
import { getCategories } from '../../features/categories/categoriesSlice';
import Registration from '../ModalRegistration/Registration';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Registration />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
