import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/ui/Logo.module.css';

function Logo({ urlLink, urlLogo, description }) {
  return (
    <Link to={urlLink} className={classes.logo} aria-label={description} title={description}>
      <img src={urlLogo} alt="Logo" className={classes.logo__image} width="78" height="32" />
    </Link>
  );
}

export default Logo;
