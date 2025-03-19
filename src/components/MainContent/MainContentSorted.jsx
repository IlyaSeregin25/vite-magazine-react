import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../Content/Content';
import { getProductsFiltered, selectorFilteredProducts } from '../../features/products/productsSlice';
import { selectorCategories } from '../../features/categories/categoriesSlice';

function MainContentSorted() {
  //{ categoryId = '', price_min = '', price_max = '', title = '' }
  const { sortByCategoriesID } = useParams();
  const categoriesAllList = useSelector(state => selectorCategories(state));
  const filteredList = useSelector(state => selectorFilteredProducts(state));
  const dispatch = useDispatch();

  const [category] = categoriesAllList.filter(item => item.id == sortByCategoriesID);

  useEffect(() => {
    dispatch(getProductsFiltered({ categoryId: sortByCategoriesID }));
  }, [dispatch, sortByCategoriesID]);

  return (
    <>
      <section aria-labelledby={category.name}>
        <Content content={filteredList} title={category.name} semanticId={category.name} type={'filtred_list'} />
      </section>
    </>
  );
}

export default MainContentSorted;
