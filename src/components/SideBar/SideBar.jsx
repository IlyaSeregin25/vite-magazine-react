import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../styles/SideBar.module.css';
import { ROUTES, SEMANTIC as semanticId } from '../../utils/routes';
import { useSelector } from 'react-redux';
import { selectorCategories } from '../../features/categories/categoriesSlice';

function SideBar({ amountItems = '10' }) {
  const categoriesAllList = useSelector(state => selectorCategories(state)) || [];
  return (
    <section className={classes.sideBar} aria-labelledby={semanticId.SIDEBAR.id}>
      <header className={classes.sideBar__header}>
        <div className={classes.sideBar__header_inner}>
          <div className={classes.sideBar__header_info}>
            <h2 className={classes.sideBar__title} id={semanticId.SIDEBAR.id}>
              CATEGORIES
            </h2>
          </div>
        </div>
      </header>
      <div className={classes.sideBar__body}>
        <div className={classes.sideBar__body_inner}>
          <div className={classes.sideBar__body_info}>
            {categoriesAllList.length ? (
              <ul className={classes.sideBar__list}>
                {categoriesAllList.slice(0, amountItems).map(category => {
                  const { id, name } = category;
                  return (
                    <li className={classes.sideBar__item} key={id}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? `${classes.sideBar__link} ${classes.active}` : classes.sideBar__link
                        }
                        to={`${ROUTES.SORT_BY_CATEGORIES}/${id}`}
                      >
                        {name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className={classes.sideBar__list}>...</p>
            )}
            <ul className={classes.sideBar__extra_list}>
              <li className={classes.sideBar__extra_list_item}>
                <NavLink className={classes.sideBar__extra_list_link} to={ROUTES.HELP}>
                  Help
                </NavLink>
              </li>
              <li className={classes.sideBar__extra_list_item}>
                <NavLink className={classes.sideBar__extra_list_link} to={ROUTES.TERMS}>
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
