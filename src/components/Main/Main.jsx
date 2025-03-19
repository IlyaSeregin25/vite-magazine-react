import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
import Promo from '../Promo/Promo';
import ButtonSideBar from '../UI/ButtonSideBar';
import Product from '../Products/Product';
import { ROUTES } from '../../utils/routes';

function Main() {
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

  const location = useLocation();
  const currentPageURL = location.pathname.replace(/\d/g, '');
  const productPageUrl = ROUTES.PRODUCT_PAGE + '/';

  return (
    <main className={`${classes.main} container`} onClick={disableSideBar}>
      <ButtonSideBar />
      <div className={`${classes.section__sideBar} ${sideBarState ? classes.active : ''}`}>
        <SideBar />
      </div>
      <div className={classes.section__promo}>{currentPageURL === productPageUrl ? <Product /> : <Promo />}</div>
      <Outlet />
    </main>
  );
}

export default Main;
