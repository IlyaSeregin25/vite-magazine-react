import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';
import Logo from '../UI/Logo';
import LOGOTIP from '../../images/LOGO.svg';
import Soc1als from '../UI/Soc1als';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__inner} container`}>
        <div className={classes.footer__body}>
          <div className={classes.footer__logo}>
            <Logo urlLink={ROUTES.HOME} urlLogo={LOGOTIP} description="Home" />
          </div>
          <div className={classes.footer__info}>
            <span>Developed by </span>
            <Link to={ROUTES.DEVELOPER}>Developer</Link>
          </div>
          <div className={classes.footer__soc1als}>
            <Soc1als />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
