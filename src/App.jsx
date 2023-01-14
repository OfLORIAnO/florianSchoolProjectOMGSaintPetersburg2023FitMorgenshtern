import React, { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import style from './App.module.scss';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import Catalog from './pages/Catalog/Catalog.jsx';
import Pattern from './pages/Pattern/Pattern';
import Layout from './pages/Layout/Layout';

import Context from './Hooks/Contexs';
import About from './pages/About/About';

export default function App() {
  const [pathFromCatalog, setPathFromCatalog] = useState('');
  const [pathFromCatalogRus, setPathFromCatalogRus] = useState('');

  return (
    <div className={style.wrapper}>
      <Context.Provider
        value={{
          pathFromCatalog,
          setPathFromCatalog,
          pathFromCatalogRus,
          setPathFromCatalogRus,
        }}
      >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Catalog />} />
            <Route path='place' element={<Pattern from={pathFromCatalog} />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}
