import React from 'react';
import classes from '../../styles/ui/Soc1als.module.css';
import { ROUTES } from '../../utils/routes';
import INSTAGRAMM from '../../images/socials/instagram.svg?react';
import FACEBOOK from '../../images/socials/facebook.svg?react';
import YOUTUBE from '../../images/socials/youtube.svg?react';

function Soc1als() {
  return (
    <ul className={classes.soc1als}>
      <li className={classes.soc1als__item}>
        <a
          className={classes.soc1als__link}
          href={ROUTES.SOCIALS.INSTAGRAMM}
          aria-label="Instagram"
          title="Instagram"
          target="_blank"
        >
          <INSTAGRAMM className={classes.soc1als__svg} width="24" height="24" fill="none" />
        </a>
      </li>
      <li className={classes.soc1als__item}>
        <a
          className={classes.soc1als__link}
          href={ROUTES.SOCIALS.FACEBOOK}
          aria-label="Facebook"
          title="Facebook"
          target="_blank"
        >
          <FACEBOOK className={classes.soc1als__svg} width="24" height="24" fill="none" />
        </a>
      </li>
      <li className={classes.soc1als__item}>
        <a
          className={classes.soc1als__link}
          href={ROUTES.SOCIALS.YOUTUBE}
          aria-label="Youtube"
          title="Youtube"
          target="_blank"
        >
          <YOUTUBE className={classes.soc1als__svg} width="24" height="24" fill="none" />
        </a>
      </li>
    </ul>
  );
}

export default Soc1als;
