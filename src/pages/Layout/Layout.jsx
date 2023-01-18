import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Path from '../../Components/Path/Path';

import style from './Layout.module.scss';

export default function Layout() {
    return (
        <div className={style.layout}>
            <Header />
            <div className={style.main}>
                <Path />
                <Outlet />
            </div>
        </div>
    );
}
