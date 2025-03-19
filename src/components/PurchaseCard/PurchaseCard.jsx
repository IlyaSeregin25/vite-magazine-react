import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from '../../styles/PurchaseCard.module.css';
import { ROUTES } from '../../utils/routes';
import CLOSE from '../../images/close.svg?react';
import { deleteProductFromUserProductsList, upDateProductInUserProductsList } from '../../features/app/appSlice';

function PurchaseCard({ id, title, price, imagesUrl, categoryName, ...props }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const totalCost = amount * price;
  function decreaseAmount() {
    if (amount > 1) setAmount(amount - 1);
  }

  useEffect(() => {
    dispatch(upDateProductInUserProductsList({ id, amount }));
  }, [amount]);

  function deleteProduct() {
    dispatch(deleteProductFromUserProductsList({ id }));
  }

  return (
    <article className={classes.purchase_card} {...props}>
      <div className={classes.purchase_card__description}>
        <img className={classes.purchase_card__img} src={imagesUrl} alt="" width="100" height="46" loading="lazy" />
        <header className={classes.purchase_card__header}>
          <div className={classes.purchase_card__title_box}>
            <Link className={classes.purchase_card__title} to={`${ROUTES.PRODUCT_PAGE}/${id}`}>
              <h3>{title}</h3>
            </Link>
            <p className={classes.purchase_card__subtitle}>{categoryName}</p>
          </div>
          <p className={classes.purchase_card__price}>{price}$</p>
        </header>
      </div>
      <div className={classes.purchase_card__volume}>
        <div className={classes.purchase_card__buttons}>
          <button className={classes.purchase_card__button} onClick={decreaseAmount}></button>
          <span className={classes.purchase_card__amount}>{amount}</span>
          <button
            className={`${classes.purchase_card__button} ${classes.purchase_card__button_plus}`}
            onClick={() => setAmount(amount + 1)}
          ></button>
        </div>
        <p className={classes.purchase_card__total_price}>{totalCost}$</p>
        <CLOSE className={classes.purchase_card__close} width="24" height="24" onClick={deleteProduct} />
      </div>
    </article>
  );
}

export default PurchaseCard;
