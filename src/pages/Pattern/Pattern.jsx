import React, { useEffect, useState, useContext } from 'react';

import s from './Pattern.module.scss';

import catalog from '../../../catalog.json';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import PatternItem from './PatternItem/PatternItem';

export default function Pattern({ from }) {
    const [data, setData] = useState({});
    useEffect(() => {
        from ? setData(catalog.filter((item) => item.link == from)) : null;
        data ? (from ? setData((data) => data[0]) : null) : null;
    }, []);

    if (!from) {
        return <NotFound />;
    }
    return (
        <div className={s.pattern}>
            {data.items?.map((item, i) => {
                return <PatternItem key={i} item={item} i={i} />;
            })}
        </div>
    );
}
