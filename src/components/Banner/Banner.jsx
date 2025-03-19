import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../styles/Banner.module.css';
import { ROUTES } from '../../utils/routes';
import Button from '../UI/Button';
import IMAGE1 from '../../images/banner/devices.png';
import IMAGE2 from '../../images/banner/shoe.png';
import IMAGE3 from '../../images/banner/banner.png';

function Banner({ semanticId }) {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__left}>
        <h2 className={classes.banner__title} id={semanticId}>
          NEW YEAR <span>sale</span>
        </h2>
        <Link className={classes.banner__link} to={ROUTES.BANNER}>
          <Button>See more</Button>
        </Link>
        <img src={IMAGE1} alt="" className={classes.banner__img_1} width="270" height="150" loading="lazy" />
        <img src={IMAGE2} alt="" className={classes.banner__img_2} width="204" height="170" loading="lazy" />
      </div>
      <div className={classes.banner__right} style={{ backgroundImage: `url(${IMAGE3})` }}>
        <p className={classes.banner__desc}>
          save up to
          <span> 50% </span>off
        </p>
      </div>
    </div>
  );
}

export default Banner;
