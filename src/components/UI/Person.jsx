import React from 'react';
import classes from '../../styles/ui/Person.module.css';

function Person({ url, name }) {
  return (
    <div className={classes.person}>
      <div className={classes.person__avatar}>
        <img src={url} alt="Avatar" className={classes.person__img} width={36} height={36} />
      </div>
      <span className={classes.person__name}>{name}</span>
    </div>
  );
}

export default Person;
