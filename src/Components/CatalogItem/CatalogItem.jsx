import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import style from './CatalogItem.module.scss';

import Context from '../../Hooks/Contexs';

export default function CatalogItem({ item }) {
  const { pathFromCatalog, setPathFromCatalog, setPathFromCatalogRus } =
    useContext(Context);
  const [isHover, setIsHover] = useState(false);
  let cardStyles = {
    background: `url('${item.imageUrl}') no-repeat center center`,
    backgroundSize: 'cover',
    transitionDuration: '.2s',
  };

  return (
    <Link
      to={'place'}
      className={style.card}
      style={cardStyles}
      onClick={() => {
        setPathFromCatalogRus(item.linkRus);
        setPathFromCatalog(item.link);
      }}
    >
      <div className={style.card__wrapper}>
        <h1
          style={
            item.header.length < 8 ? { fontSize: '50px' } : { fontSize: '20px' }
          }
        >
          {item.header}
        </h1>
        <p>{item.description}</p>
      </div>
    </Link>
  );
}
