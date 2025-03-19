import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../styles/Main.module.css';
import {
  changeStateBodyLock,
  changeStateButtonSideBar,
  stateBodyLock,
  stateButtonSadeBar,
  stateModalRegistration,
} from '../../features/app/appSlice';
import { useChangeBodyClassLock } from '../../utils/hooks';
import SideBar from '../SideBar/SideBar';
import ButtonSideBar from '../UI/ButtonSideBar';
import Product from '../Products/Product';
import { SEMANTIC } from '../../utils/routes';
import {
  getProductsById,
  getProductsRelated,
  selectorProduct,
  selectorRelatedProducts,
} from '../../features/products/productsSlice';
import Content from '../Content/Content';
import { getCategories } from '../../features/categories/categoriesSlice';

function MainProductPage() {
  const dispatch = useDispatch();
  const sideBarState = useSelector(state => stateButtonSadeBar(state));
  const modalRegistrationState = useSelector(state => stateModalRegistration(state));
  const bodyLockState = useSelector(state => stateBodyLock(state));

  useChangeBodyClassLock(bodyLockState);

  useEffect(() => {
    if (sideBarState || modalRegistrationState) {
      dispatch(changeStateBodyLock(true));
    } else {
      dispatch(changeStateBodyLock(false));
    }
  }, [sideBarState, modalRegistrationState]);

  function disableSideBar(e) {
    if (sideBarState) return dispatch(changeStateButtonSideBar());
    e.stopPropagation();
  }

  const product = useSelector(state => selectorProduct(state));
  const relatedProductsList = useSelector(state => selectorRelatedProducts(state));
  const { productId } = useParams();
  useEffect(() => {
    dispatch(getProductsById(productId));
    dispatch(getProductsRelated(productId));
    dispatch(getCategories());
  }, [dispatch, productId]);

  return (
    <main className={`${classes.main} container`} onClick={disableSideBar}>
      <ButtonSideBar />
      <div className={`${classes.section__sideBar} ${sideBarState ? classes.active : ''}`}>
        <SideBar />
      </div>
      <div className={classes.section__promo}>
        <Product product={product} />
      </div>
      <section aria-labelledby={SEMANTIC.RELATED}>
        <Content
          content={relatedProductsList}
          title={'Related products'}
          semanticId={SEMANTIC.RELATED}
          type={'related_list'}
        />
      </section>
      <Outlet />
    </main>
  );
}

export default MainProductPage;
