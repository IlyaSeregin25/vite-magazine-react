import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFiltered, selectorFilteredProducts, selectorProducts } from '../../features/products/productsSlice';
import { selectorCategories } from '../../features/categories/categoriesSlice';
import Content from '../Content/Content';
import Banner from '../Banner/Banner';
import { SEMANTIC } from '../../utils/routes';

function MainContent() {
  const productsAllList = useSelector(state => selectorProducts(state));
  const categoriesAllList = useSelector(state => selectorCategories(state));
  const productsFiltredList = useSelector(state => selectorFilteredProducts(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFiltered({ price_max: 50 }));
  }, [dispatch]);

  return (
    <>
      <section aria-labelledby={SEMANTIC.TRENDING.id}>
        <Content content={productsAllList} title={'Trending'} semanticId={SEMANTIC.TRENDING.id} type={'products_list'} />
      </section>
      <section style={{ padding: 0 }} aria-labelledby={SEMANTIC.BANNER.id}>
        <Banner semanticId={SEMANTIC.BANNER.id} />
      </section>
      <section aria-labelledby={SEMANTIC.CATEGORIES.id}>
        <Content
          content={categoriesAllList}
          title={'Categories'}
          semanticId={SEMANTIC.CATEGORIES.id}
          type={'categories_list'}
        />
      </section>
      <section aria-labelledby={'Less_than_50'}>
        <Content content={productsFiltredList} title={'Less than 50$'} semanticId={'Less_than_50'} type={'products_list'} />
      </section>
    </>
  );
}

export default MainContent;
