import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './ProductItem.scss';
import { Product } from '../../types/Product';
import { Button } from '../Button/Button';
import { usePhones } from '../../hooks/usePhones';
import { IFertilizer } from '../../types/Fertilizers';
import { isProduct } from '../../services/checkIsProduct';

type Props = {
  product: Product | IFertilizer
};
export const ProductItem: React.FC<Props> = ({
  product,
}) => {
  const {
    favoritesIds,
    cartProducts,
    handleOnCartAdd,
    handleOnLikeClick,
  } = usePhones();

  const {
    productId,
    mainImage,
    name,
    price,
    fullPrice,
    category,
    documentId,
  } = product;

  const isFertilizer = !isProduct(product);

  const isCartItem = cartProducts.find(({ id }) => id === productId);

  const productDetailsLink = isFertilizer ? `/product/${documentId}?productType=fertilizer` : `/product/${documentId}`;

  return (
    <div className="product-item">
      <Link to={productDetailsLink}>
        <div className="product-item__img">
          <img src={'http://localhost:1337' + mainImage?.url} alt={mainImage?.alternativeText} />
        </div>
      </Link>

      <Link
        to={productDetailsLink}
        className="product-item__title body-text"
      >
        {name}
      </Link>

      <div className="product-item__price-section">
        <h2 className="price">
          {`${price} грн.`}
        </h2>

        <p className="price-discount">
          {`${fullPrice} грн.`}
        </p>
      </div>

      <hr className="product-item__line" />

      <div className="product-item__descr">
        <div className="product-item__descr-wrapper">
          <p className="product-item__descr-name">
            {isFertilizer ? 'Обʼєм' : 'Розмір'}
          </p>

          <p className="product-item__descr-value">
            {isFertilizer ? product.volume : product.size  }
          </p>
        </div>

        <div className="product-item__descr-wrapper">
          <p className="product-item__descr-name">
            {isFertilizer ? 'Тип' : 'Колір'}
          </p>

          <p className="product-item__descr-value">
          {isFertilizer ? product.type : product.color}

          </p>
        </div>

        <div className="product-item__descr-wrapper">
          <p className="product-item__descr-name">
            Категорія
          </p>

          <p className="product-item__descr-value">
            {category}
          </p>
        </div>
      </div>

      <div className="product-item__btns">
        <Button
          className={cn(
            'button',
            'button__primary',
            'button--large',
            {
              button__selected: isCartItem,
            },
          )}
          onClick={() => handleOnCartAdd(productId)}
        >
          {isCartItem ? 'Додано в корзину' : 'Додати в корзину'}
        </Button>

        <Button
          className="
            button
            button__like
            button--medium
          "
          onClick={() => handleOnLikeClick(productId)}
        >
          {
            favoritesIds?.includes(productId)
              ? (
                <img src="img/icons/heart-active.svg" alt="Heart" />
              )
              : (
                <img src="img/icons/heart.svg" alt="Heart" />
              )
          }
        </Button>
      </div>
    </div>
  );
};
