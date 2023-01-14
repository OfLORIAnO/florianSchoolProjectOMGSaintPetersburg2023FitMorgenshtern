import React, { useContext } from 'react';

import s from './Path.module.scss';

import { Link } from 'react-router-dom';

import Context from '../../Hooks/Contexs';

export default function Path() {
  const {
    pathFromCatalog,
    setPathFromCatalog,
    pathFromCatalogRus,
    setPathFromCatalogRus,
  } = useContext(Context);
  return (
    <div className={s.path}>
      <div className={s.path__body}>
        <Link
          to='/'
          onClick={() => {
            setPathFromCatalogRus('');
            setPathFromCatalog('');
          }}
        >
          Главная{' '}
        </Link>
        {pathFromCatalogRus ? <>/ {pathFromCatalogRus}</> : null}
      </div>
    </div>
  );
}
