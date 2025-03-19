import React from 'react';
import classes from '../../styles/ui/Button.module.css';

function Button({ type, children, ...props }) {
  return (
    <span type={type} {...props} className={classes.button}>
      {children}
    </span>
  );
}

export default Button;
