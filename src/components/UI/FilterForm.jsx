import React, { useEffect, useState } from 'react';
import { Form, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from '../../styles/ui/FilterForm.module.css';
import { getProductsFiltered } from '../../features/products/productsSlice';
import Button from './Button';
//{ categoryId = '', price_min = '', price_max = '', title = '' }
//НЕОБХОДИМ СОВМЕСТНЫЙ ВВОД price_min  price_max , ИНАЧЕ СЕРВЕР НЕ ОТВЕТИТ. По название такой необходимости нет
function FilterForm() {
  const { sortByCategoriesID } = useParams();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
  });
  function changeInput({ name, value }) {
    setInput({ ...input, [name]: value });
  }
  useEffect(() => {
    setTimeout(() => {}, 300);
  }, [dispatch, input, sortByCategoriesID]);

  function onSummitForm(e) {
    e.preventDefault();
    dispatch(
      getProductsFiltered({
        categoryId: sortByCategoriesID,
        price_min: input.minPrice.length ? input.minPrice : '1',
        price_max: input.maxPrice.length ? input.maxPrice : '10000000',
        title: input.name,
      }),
    );
    setInput({
      name: '',
      minPrice: '',
      maxPrice: '',
    });
  }

  return (
    <Form className={classes.filter_form} onSubmit={onSummitForm}>
      <input
        type="text"
        className={classes.filter_form__input}
        placeholder="product name"
        onChange={ev => changeInput({ name: 'name', value: ev.target.value })}
        value={input.name}
      />
      <div className={classes.filter_form__range}>
        <input
          type="text"
          className={classes.filter_form__input}
          placeholder="Price from"
          onChange={ev => changeInput({ name: 'minPrice', value: ev.target.value })}
          value={input.minPrice}
        />
        <input
          type="text"
          className={classes.filter_form__input}
          placeholder="Price to"
          onChange={ev => changeInput({ name: 'maxPrice', value: ev.target.value })}
          value={input.maxPrice}
        />
      </div>
      <button type="submit" className={classes.filter_form__button}>
        <Button>filter</Button>
      </button>
    </Form>
  );
}

export default FilterForm;
