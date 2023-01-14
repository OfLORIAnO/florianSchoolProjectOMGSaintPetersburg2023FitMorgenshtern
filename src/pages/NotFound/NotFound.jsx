import React from 'react';
import { Link } from 'react-router-dom';

import s from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={s.wrapperr}>
      <div className={s.notFound}>
        <div>
          Страница не была найдена.
          <Link to='/'>Вернуться обратно</Link>
        </div>
      </div>
    </div>
  );
}
