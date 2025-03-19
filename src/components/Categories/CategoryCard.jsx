import React from 'react';
import classes from '../../styles/CategoryCard.module.css';

function CategoryCard({ url = '#', title = '...' }) {
  return (
    <article className={classes.category_card}>
      <img className={classes.category_card__img} src={url} alt="" width="230" height="230" loading="lazy" />
      <header className={classes.category_card__header}>
        <h3 className={classes.category_card__title}>{title}</h3>
      </header>
    </article>
  );
}

export default CategoryCard;
