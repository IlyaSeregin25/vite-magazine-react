import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/ProductsList.module.css';
import ProductCard from './ProductCard';
import { ROUTES } from '../../utils/routes';

function ProductsList({ list = [], amountItems = '5' }) {
  return (
    <div className={classes.products__list}>
      {list.length
        ? list.slice(0, amountItems).map(item => {
            const { id, title, price, images, category } = item;
            return (
              <Link className={classes.products__item} to={`${ROUTES.PRODUCT_PAGE}/${id}`} key={id}>
                <ProductCard
                  url={images[0]}
                  title={title}
                  subtitle={category.name}
                  oldPrice={Math.floor(price * 0.8)}
                  newPrice={price}
                  purchases={Math.floor(Math.random() * 20 + 1)}
                />
              </Link>
            );
          })
        : 'Empty'}
    </div>
  );
}

export default ProductsList;
