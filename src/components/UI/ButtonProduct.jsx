import React from 'react';
import classes from '../../styles/ui/ButtonProduct.module.css';

function ButtonProduct({ state, children, ...props }) {
  const buttonClass = `${classes.button} ${state === 'active' ? classes.active : ''}`;

  return (
    <button className={buttonClass} disabled={state !== 'active' ? true : false} {...props}>
      {children}
    </button>
  );
}

export default ButtonProduct;
