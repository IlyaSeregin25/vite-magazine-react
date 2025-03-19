import React from 'react';
import classes from '../../styles/ProductCard.module.css';

function ProductCard({ url = '#', title = '...', subtitle = '...', oldPrice = '...', newPrice = '...', purchases = '...' }) {
  return (
    <article className={classes.product_card}>
      <img className={classes.product_card__img} src={url} alt="" width="226" height="410" loading="lazy" />
      <header className={classes.product_card__header}>
        <h3 className={classes.product_card__title}>{title}</h3>
        <p className={classes.product_card__subtitle}>{subtitle}</p>
      </header>
      <footer className={classes.product_card__footer}>
        <div className={classes.product_card__price}>
          <div className={classes.product_card__price_new}>{newPrice}$</div>
          <div className={classes.product_card__price_old}>{oldPrice}$</div>
        </div>
        <div className={classes.product_card__extra}>
          <div className={classes.product_card__purchases}>{purchases} purchased</div>
        </div>
      </footer>
    </article>
  );
}

export default ProductCard;
