import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from '../../styles/ui/AccountBox.module.css';
import { ROUTES } from '../../utils/routes';
import LIKE from '../../images/like.svg?react';
import CART from '../../images/cart.svg?react';
import { selectorUserProductsList } from '../../features/app/appSlice';

function AccountBox() {
  const userProductsList = useSelector(state => selectorUserProductsList(state));
  const count = userProductsList.length;

  return (
    <div className={classes.account_box}>
      <Link href="#" className={classes.account_box__link}>
        <LIKE width="24" height="24" className={classes.account_box__svg_like} />
      </Link>
      <Link href={ROUTES.PROFILE_PAGE} className={classes.account_box__link}>
        <CART width="24" height="24" className={classes.account_box__svg_cart} />
        {count > 0 && <span className={classes.account_box__count}>{count}</span>}
      </Link>
    </div>
  );
}

export default AccountBox;
