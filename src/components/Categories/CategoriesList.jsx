import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/CategoriesList.module.css';
import CategoryCard from './CategoryCard';

function CategoriesList({ list = [], amountItems = '5' }) {
  return (
    <div className={classes.categories__list}>
      {list.length
        ? list.slice(0, amountItems).map(item => {
            const { name, image, id } = item;
            return (
              <Link className={classes.categories__item} to={'#'} key={id}>
                <CategoryCard url={image} title={name} />
              </Link>
            );
          })
        : 'Empty'}
    </div>
  );
}

export default CategoriesList;
