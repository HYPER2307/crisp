import React, { useEffect } from 'react';

import './Checkout.scss';
import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigator('/')
    }, 4000)
  })

  return (
    <section className="checkout">
      <h1 className="content__title">
        Дякуємо за замовлення, з вами звʼяжуться для обговорення деталей замовлення
      </h1>
    </section>
  );
};
