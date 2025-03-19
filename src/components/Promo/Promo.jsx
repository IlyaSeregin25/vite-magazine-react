import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/Promo.module.css';
import { ROUTES, SEMANTIC } from '../../utils/routes';
import Button from '../UI/Button';
import IMAGE from '../../images/promo/computer.png';

function Promo() {
  return (
    <section className={classes.promo} aria-labelledby={SEMANTIC.PROMO.id}>
      <header className={classes.promo__header}>
        <div className={classes.promo__header_inner}>
          <div className={classes.promo__header_info}>
            <h2 className={classes.promo__header_title} id={SEMANTIC.PROMO.id}>
              BIG SALE 20%
            </h2>
          </div>
        </div>
      </header>

      <div className={classes.promo__body}>
        <div className={classes.promo__body_inner}>
          <div className={classes.promo__body_info}>
            <p className={classes.promo__body_subtitle}>the bestseller of 2022</p>
            <h3 className={classes.promo__body_title}>LENNON r2d2 with NVIDIA 5090 TI</h3>
            <Link className={classes.promo__body_link} to={ROUTES.PROMO}>
              <Button>Shop now</Button>
            </Link>
          </div>
          <div className={classes.promo__body_image_box}>
            <img
              src={IMAGE}
              className={classes.promo__body_image}
              alt="Promo image"
              width="460"
              height="360"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
