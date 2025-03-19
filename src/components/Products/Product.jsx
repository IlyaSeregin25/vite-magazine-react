import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from '../../styles/Product.module.css';
import ButtonProduct from '../UI/ButtonProduct';
import { addProductToUserProductsList } from '../../features/app/appSlice';

function Product({ product }) {
  const [currentSize, setCurrentSize] = useState(0);
  const SIZES = [4, 4.5, 5];
  const [currentImg, setCurrentImg] = useState(0);
  const { title, price, images, description } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function changeCurrentSize(value) {
    setCurrentSize(value);
  }
  function addProductToCart() {
    dispatch(addProductToUserProductsList({ size: currentSize, product: product }));
  }

  return (
    <section className={classes.product}>
      {product.id ? (
        <>
          <div className={classes.product__pictures}>
            <div className={classes.product__image}>
              <img
                src={images[currentImg]}
                alt=""
                width={375}
                height={375}
                loading="lazy"
                className={classes.product__image_img}
              />
            </div>
            <div className={classes.product__images}>
              {images.length &&
                images.map((item, index) => (
                  <img
                    key={item}
                    src={item}
                    alt=""
                    width={90}
                    height={90}
                    loading="lazy"
                    className={classes.product__images_img}
                    onClick={() => setCurrentImg(index)}
                  />
                ))}
            </div>
          </div>
          <div className={classes.product__body}>
            <header className={classes.product__header}>
              <h2 className={classes.product__header_title}>{title}</h2>
              <p className={classes.product__header_subtitle}>{price}$</p>
            </header>
            <div className={classes.product__content_box}>
              <div className={classes.product__color}>
                <div className={classes.product__color_title}>Color</div>
                <div className={classes.product__color_value}>Green</div>
              </div>
              <div className={classes.product__size}>
                <div className={classes.product__size_title}>Sizes</div>
                <div className={classes.product__size_buttons}>
                  {SIZES.map(size => {
                    return (
                      <button
                        key={size}
                        type="button"
                        className={`${classes.product__size_button} ${size === currentSize ? classes.active : ''}`}
                        onClick={() => changeCurrentSize(size)}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className={classes.product__decription}>
                <p>{description}</p>
              </div>
              <div className={classes.product__buttons}>
                <ButtonProduct type="button" state={currentSize !== 0 ? 'active' : ''} onClick={addProductToCart}>
                  Add to cart
                </ButtonProduct>
                <ButtonProduct type="button" state="active">
                  Add to favorites
                </ButtonProduct>
              </div>
            </div>
            <footer className={classes.product__footer}>
              <p className={classes.product__footer_text}>19 people purchased</p>
              <Link className={classes.product__footer_link} onClick={() => navigate(-1)}>
                Return to store
              </Link>
            </footer>
          </div>
        </>
      ) : (
        <span>Product deleted</span>
      )}
    </section>
  );
}

export default Product;
