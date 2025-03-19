import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../styles/Main.module.css';
import {
  changeStateBodyLock,
  changeStateButtonSideBar,
  selectorUserProductsList,
  stateBodyLock,
  stateButtonSadeBar,
  stateModalRegistration,
} from '../../features/app/appSlice';
import { useChangeBodyClassLock } from '../../utils/hooks';
import SideBar from '../SideBar/SideBar';
import ButtonSideBar from '../UI/ButtonSideBar';
import Profile from '../Profile/Profile';
import { getCategories } from '../../features/categories/categoriesSlice';

function MainProfilePage() {
  const dispatch = useDispatch();
  const sideBarState = useSelector(state => stateButtonSadeBar(state));
  const modalRegistrationState = useSelector(state => stateModalRegistration(state));
  const bodyLockState = useSelector(state => stateBodyLock(state));
  const userProductsList = useSelector(state => selectorUserProductsList(state));

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

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <main className={`${classes.main} container`} onClick={disableSideBar}>
      <ButtonSideBar />
      <div className={`${classes.section__sideBar} ${sideBarState ? classes.active : ''}`}>
        <SideBar />
      </div>
      <div className={classes.section__promo}>
        <Profile productsList={userProductsList} />
      </div>
    </main>
  );
}

export default MainProfilePage;
