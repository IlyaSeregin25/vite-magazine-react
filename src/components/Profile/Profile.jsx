import React from 'react';
import { useSelector } from 'react-redux';
import classes from '../../styles/Profile.module.css';
import Button from '../UI/Button';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import { selectorUserProductsList } from '../../features/app/appSlice';
import { SEMANTIC } from '../../utils/routes';

function Profile({ productsList }) {
  const userProductsList = useSelector(state => selectorUserProductsList(state));

  const TOTAL_PRICE = userProductsList.reduce((accum, { amount, product }) => {
    return accum + amount * product.price;
  }, 0);

  return (
    <section className={classes.profile} aria-labelledby={SEMANTIC.PROFILE.id}>
      <header className={classes.profile__header}>
        <h2 className={classes.profile__title} id={SEMANTIC.PROFILE.id}>
          Your cart
        </h2>
      </header>
      <div className={classes.profile__body}>
        <ul className={classes.profile__body_list}>
          {productsList.map(item => {
            return (
              <li key={item.id} className={classes.profile__body_list_item}>
                <PurchaseCard
                  id={item.id}
                  title={item.product.title}
                  price={item.product.price}
                  imagesUrl={item.product.images[0]}
                  categoryName={item.product.category.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <footer className={classes.profile__footer}>
        <p className={classes.profile__footer_text}>
          TOTAL PRICE: <span className={classes.profile__footer_price}>{TOTAL_PRICE}$</span>
        </p>
        <button className={classes.profile__footer_button} type="button">
          <Button>Proceed to checkout</Button>
        </button>
      </footer>
    </section>
  );
}

export default Profile;
