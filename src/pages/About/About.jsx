import React, { useContext, useEffect } from 'react';

import s from './About.module.scss';

import Context from '../../Hooks/Contexs';

export default function About() {
    const { setPathFromCatalog, setPathFromCatalogRus } = useContext(Context);
    useEffect(() => {
        setPathFromCatalog('О нас');
        setPathFromCatalogRus('О нас');
    }, []);
    return (
        <div className={s.about}>
            <div className={s.container}>
                <h1>
                    Сайт был разработан учеником{' '}
                    <b>11Б класса Руденко Вячеславом Сергеевичем </b> для
                    школьного проекта
                </h1>
                <h2>
                    Почта для обратной связи: <b>slavarumdog@gmail.com</b>
                </h2>
            </div>
        </div>
    );
}
