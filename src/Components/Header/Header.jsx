import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

import Context from '../../Hooks/Contexs';

export default function Header() {
  const {
    pathFromCatalog,
    setPathFromCatalog,
    pathFromCatalogRus,
    setPathFromCatalogRus,
  } = useContext(Context);
  return (
    <>
      <header className={style.header}>
        <div className={style.header__list}>
          <Link
            to='/'
            className={style.header__link}
            onClick={() => {
              setPathFromCatalogRus('');
              setPathFromCatalog('');
            }}
          >
            Главная
          </Link>
          <Link
            to='/about'
            className={style.header__link}
            onClick={() => {
              setPathFromCatalogRus('О нас');
            }}
          >
            О нас
          </Link>
          {/* <Link to='/cold' className={style.header__link}>
            Холод
          </Link> */}
        </div>
      </header>
    </>
  );
}
