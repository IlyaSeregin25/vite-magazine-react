import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../styles/Registration.module.css';
import { changeStateModalRegistration, createUser, logInUser, stateModalRegistration } from '../../features/app/appSlice';
import Button from '../UI/Button';
import CLOSE from '../../images/close.svg?react';

const initialState = { email: '', name: '', password: '', avatarURL: '' };

function Registration() {
  const [value, setValue] = useState(initialState);
  const [isLogin, setIsLogin] = useState(false);
  const modalRegistrationIsActive = useSelector(state => stateModalRegistration(state));

  const dispatch = useDispatch();
  function registrationUser() {
    dispatch(createUser({ name: value.name, email: value.email, password: value.password, avatar: value.avatarURL }));
  }
  function logIn() {
    dispatch(logInUser({ email: value.email, password: value.password }));
  }
  function handleOnChangeInput(ev, type) {
    setValue({ ...value, [type]: ev.target.value });
  }
  function handleOnSubmitRegistration(ev) {
    ev.preventDefault();
    registrationUser();
    setValue(initialState);
    closeModal();
  }
  function handleOnSubmitLogIn(ev) {
    ev.preventDefault();
    logIn();
    setValue(initialState);
    closeModal();
  }
  function closeModal() {
    dispatch(changeStateModalRegistration(false));
  }
  const clName = modalRegistrationIsActive ? '' : classes.hidden;

  return (
    <div className={`${classes.registration} ${clName}`} onClick={closeModal}>
      <div className={classes.registration__body} onClick={e => e.stopPropagation()}>
        <CLOSE className={classes.registration__close} onClick={closeModal} width="40" height="40" />
        <h3 className={classes.registration__title}>{isLogin ? 'Log In' : 'Sign Up'}</h3>
        {isLogin ? (
          <Form className={classes.registration__form} method="post" onSubmit={handleOnSubmitLogIn}>
            <input
              className={classes.registration__input}
              type="email"
              placeholder="example@gmail.com"
              value={value.email}
              onChange={ev => handleOnChangeInput(ev, 'email')}
              autoComplete="off"
              required
            />
            <input
              className={classes.registration__input}
              type="password"
              placeholder="password"
              value={value.password}
              onChange={ev => handleOnChangeInput(ev, 'password')}
              autoComplete="off"
              minLength="4"
              required
            />
            <span className={classes.registration__choise} onClick={() => setIsLogin(false)}>
              Create an account
            </span>
            <button className={classes.registration__button} type="submit">
              <Button>Login</Button>
            </button>
          </Form>
        ) : (
          <Form className={classes.registration__form} method="post" onSubmit={handleOnSubmitRegistration}>
            <input
              className={classes.registration__input}
              type="email"
              placeholder="example@gmail.com"
              value={value.email}
              onChange={ev => handleOnChangeInput(ev, 'email')}
              autoComplete="off"
              required
            />
            <input
              className={classes.registration__input}
              type="text"
              placeholder="Bob"
              value={value.name}
              onChange={ev => handleOnChangeInput(ev, 'name')}
              autoComplete="off"
              required
            />
            <input
              className={classes.registration__input}
              type="password"
              placeholder="password"
              value={value.password}
              onChange={ev => handleOnChangeInput(ev, 'password')}
              autoComplete="off"
              minLength="4"
              required
            />
            <input
              className={classes.registration__input}
              type="text"
              placeholder="https://....your-avatar.jpg"
              value={value.avatarURL}
              onChange={ev => handleOnChangeInput(ev, 'avatarURL')}
              autoComplete="off"
              required
            />
            <span className={classes.registration__choise} onClick={() => setIsLogin(true)}>
              I already have an account
            </span>
            <button className={classes.registration__button} type="submit">
              <Button>Create an account</Button>
            </button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Registration;
