import React, { useContext, useEffect, useState } from 'react';

import style from './Catalog.module.scss';
import c from '../../../catalog.json';

import CatalogItem from '../../Components/CatalogItem/CatalogItem';
import Path from '../../Components/Path/Path';

import Context from '../../Hooks/Contexs';

export default function Catalog() {
    const { pathFromCatalog, setPathFromCatalog, setPathFromCatalogRus } =
        useContext(Context);
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {
        setPathFromCatalog('');
        setPathFromCatalogRus('');
        setCatalog(c);
    }, []);
    return (
        <div className={style.catalog}>
            <div className={style.catalog__body}>
                {catalog.map((item, i) => {
                    return <CatalogItem key={i} item={item} />;
                })}
            </div>
        </div>
    );
}
