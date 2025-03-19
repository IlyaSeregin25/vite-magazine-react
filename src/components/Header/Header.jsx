import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../styles/Header.module.css';
import { changeStateModalRegistration, selectorCurrentUser, stateUserIsLogIn } from '../../features/app/appSlice';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/LOGO.svg';
import AVATAR from '../../images/avatar.svg';
import SearchForm from '../UI/SearchForm';
import Person from '../UI/Person';
import Logo from '../UI/Logo';
import AccountBox from '../UI/AccountBox';

function Header() {
  const dispatch = useDispatch();
  const userIsLogIn = useSelector(state => stateUserIsLogIn(state));
  const currentUser = useSelector(state => selectorCurrentUser(state));
  const navigate = useNavigate();

  function handleOnPerson() {
    if (userIsLogIn) return navigate(ROUTES.PROFILE_PAGE);
    dispatch(changeStateModalRegistration(true));
  }

  return (
    <>
      <header className={classes.header}>
        <div className={`${classes.header__inner} container`}>
          <div className={classes.header__logo}>
            <Logo urlLink={ROUTES.HOME} urlLogo={LOGO} description="Home" />
          </div>
          <div className={classes.header__body}>
            <div className={classes.header__person} onClick={handleOnPerson}>
              {userIsLogIn ? (
                <Person url={currentUser.avatar} name={currentUser.name} />
              ) : (
                <Person url={AVATAR} name="Guest" />
              )}
            </div>
            <div className={classes.header__search_form}>
              <SearchForm />
            </div>
            <div className={classes.header__account_box} onClick={handleOnPerson}>
              <AccountBox />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
