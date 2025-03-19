import React from 'react';
import classes from '../../styles/Content.module.css';
import ProductsList from '../Products/ProductsList';
import CategoriesList from '../Categories/CategoriesList';
import FilterForm from '../UI/FilterForm';

function Content({ content, title = 'empty', semanticId = 'empty', type }) {
  const Empty = <span>Content list is empty</span>;

  return (
    <div className={classes.content}>
      <header className={classes.content__header}>
        <div className={classes.content__header_inner}>
          <h2 className={classes.content__header_title} id={semanticId}>
            {title}
          </h2>
        </div>
      </header>
      <div className={classes.content__body}>
        <div className={classes.content__body_inner}>
          <div className={classes.content__body_info}>
            {type === 'filtred_list' && <FilterForm />}
            {type === 'products_list' ? (
              <ProductsList list={content} amountItems="5" />
            ) : type === 'categories_list' ? (
              <CategoriesList list={content} amountItems="5" />
            ) : type === 'filtred_list' || type === 'related_list' ? (
              <ProductsList list={content} amountItems="10" />
            ) : (
              Empty
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
