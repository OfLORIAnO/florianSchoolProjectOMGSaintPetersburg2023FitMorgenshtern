import React, { useRef, useEffect, useState } from 'react';

import s from './PatternItem.module.scss';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { motion } from 'framer-motion';

export default function PatternItem({ item, i }) {
    const [width, setWidth] = useState(0);
    const sliderWidth = useRef();

    const defaultState = {
        center: item.map,
        zoom: item.zoom ? item.zoom : 16.5,
    };

    useEffect(() => {
        setWidth(
            -1 *
                (sliderWidth.current.scrollWidth -
                    sliderWidth.current.offsetWidth)
        );
    }, [sliderWidth]);

    return (
        <div className={s.item}>
            <h1>
                {i + 1 + '. '}
                {item.header}
            </h1>
            <motion.div className={s.slider}>
                <motion.div
                    ref={sliderWidth}
                    drag='x'
                    dragConstraints={{ right: 0, left: width }}
                    className={s.slider__inner}
                >
                    {item.images?.map((img, i) => {
                        return (
                            <motion.div key={i}>
                                <img src={img} alt='Image' />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <p>{item.description}</p>
            {item.oficialSite ? (
                <a href={item.oficialSite} target={'_blank'} className={s.link}>
                    Официальный сайт
                </a>
            ) : null}
            {item.map ? (
                <YMaps>
                    <Map
                        className={s.map}
                        defaultState={defaultState}
                        width='100%'
                    >
                        <Placemark geometry={[55.684758, 37.738521]} />
                    </Map>
                </YMaps>
            ) : null}
            {item.mapLink ? (
                <a className={s.mapLink} href={item.mapLink} target='_blunk'>
                    Посмотреть на карте
                </a>
            ) : null}
        </div>
    );
}
