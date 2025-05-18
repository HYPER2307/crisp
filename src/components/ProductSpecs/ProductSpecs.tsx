import React from 'react';
import { Product } from '../../types/Product';

export const ProductSpecs: React.FC<Product> = ({
  category,
  color,
  fertilizer,
  frequencyWatering,
  humidity,
  size,
  soil,
  sun,
  type,
}) => {
  return (
    <div className="product__specs">
      <div className="product__subtitle">
        Все про товар 
      </div>

      <div className="product__line" />

      <div className="product__specs-container">
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Категорія
          </p>

          <p className="product__specs-value">
            {category}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Колір
          </p>

          <p className="product__specs-value">
            {color}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Тип добрива
          </p>

          <p className="product__specs-value">
            {fertilizer}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Частота поливу
          </p>

          <p className="product__specs-value">
            {frequencyWatering}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Вологість
          </p>

          <p className="product__specs-value">
            {humidity}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Розмір
          </p>

          <p className="product__specs-value">
            {size}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Тип грунту
          </p>

          <p className="product__specs-value">
            {soil}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Освітлення
          </p>

          <p className="product__specs-value">
            {sun}
          </p>
        </div>
        <div className="product__specs-wrapper">
          <p className="product__specs-name">
            Тип рослини
          </p>

          <p className="product__specs-value">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
};
