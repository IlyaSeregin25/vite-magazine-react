import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../styles/ui/ButtonSideBar.module.css';
import ARROWS from '../../images/arrows.svg?react';
import ARROWS2 from '../../images/arrow2.svg?react';
import { changeStateButtonSideBar, stateButtonSadeBar } from '../../features/app/appSlice';

function ButtonSideBar(props) {
  const dispatch = useDispatch();
  const stateBtn = useSelector(state => stateButtonSadeBar(state));

  function onBtnClick(e) {
    dispatch(changeStateButtonSideBar());
    e.stopPropagation();
  }

  return (
    <button className={`${classes.sidebar_button} ${stateBtn ? classes.active : ''}`} onClick={onBtnClick} {...props}>
      <ARROWS2 />
    </button>
  );
}

export default ButtonSideBar;
