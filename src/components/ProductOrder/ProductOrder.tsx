import React, { FC } from 'react';
import cn from 'classnames';
import { v4 as getId } from 'uuid';
import { productsColors } from '../../data/products-colors';

import { Button } from '../Button/Button';
import { usePhones } from '../../hooks/usePhones';
import { Product } from '../../types/Product';

export const ProductOrder: FC<Pick<Product, 'productId' | 'category' | 'color' | 'fertilizer' | 'fullPrice' | 'price' | 'frequencyWatering' | 'humidity' | 'size' | 'soil' | 'sun' | 'type'>> = ({
  productId,
  price,
  fullPrice,
  color,
  type,
  category,
  size,
}) => {
  const {
    favoritesIds,
    cartProducts,
    handleOnCartAdd,
    handleOnLikeClick,
  } = usePhones();

  const isCartItem = cartProducts.find(product => product.id === productId);

  return (
    <div className="product__order">
      <div className="product__order-container">
        <p className="product__order-title">
          Колір
        </p>

        <div className="product__order-area">
        <Button
              key={getId()}
              className={cn(
                'button',
                'button__select-color',
                'button__select-color--active'
              )}
            >
              <div
                className="button__select-color-round"
                style={{
                  backgroundColor: `${productsColors[color]}`,
                }}
              />
            </Button>
        </div>
      </div>

      <div className="product__line" />

      <div className="product__order-container">
        <p className="product__order-title">
          Тип квітки
        </p>

        <div className="product__order-area">
            <Button
              key={getId()}
              className={cn(
                'button',
                'button__select',
                'button__select-capacity',
              )}
            >
              {type}
            </Button>
        </div>
      </div>

      <div className="product__line" />

      <div className="product__price-wrapper">
        <h2 className="product__price price">
          {`₴${price}`}
        </h2>
        <p className="product__full-price price-discount">
          {`₴${fullPrice}`}
        </p>
      </div>

      <div className="product__order-btns">
        <Button
          className={cn(
            'button',
            'button__primary',
            'button--xl',
            {
              button__selected: isCartItem,
            },
          )}
          // onClick={() => handleOnCartAdd(id)}
        >
          Add to cart
        </Button>

        <Button
          className="
            button
            button__like
            button__like--large
          "
          onClick={() => handleOnLikeClick(productId)}
        >
          {
            favoritesIds.includes(productId)
              ? (<img src="img/icons/heart-active.svg" alt="Heart" />)
              : (<img src="img/icons/heart.svg" alt="Heart" />)
          }
        </Button>
      </div>

      <div className="product__order-specs">
        <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Категорія
          </p>
          <p className="product__order-spec-value">
            {category}
          </p>
        </div>
        <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Розмір
          </p>
          <p className="product__order-spec-value">
            {size}
          </p>
        </div>
        {/* <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Тип добрива
          </p>
          <p className="product__order-spec-value">
            {fertilizer}
          </p>
        </div>
        <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Частотат поливу
          </p>
          <p className="product__order-spec-value">
            {frequencyWatering}
          </p>
        </div>
        <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Вологість
          </p>
          <p className="product__order-spec-value">
            {humidity}
          </p>
        </div>
        <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Тип грунту
          </p>
          <p className="product__order-spec-value">
            {soil}
          </p>
        </div>
        <div className="product__order-specs-wrapper">
          <p className="product__order-spec-name">
            Освітлення
          </p>
          <p className="product__order-spec-value">
            {sun}
          </p>
        </div> */}
      </div>
    </div>
  );
};
