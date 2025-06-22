import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonBack } from '../../components/Button/Button';
import { usePhones } from '../../hooks/usePhones';
import { client } from '../../client/httpClient';
import { Product } from '../../types/Product';
import { CartList } from '../../components/CartList/CartList';
import { Loader } from '../../components/Loader/Loader';

import './Cart.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectProductsData } from '../../store/products/selectors';
import { selectFertilizersData } from '../../store/fertilizers/selectors';
import { IFertilizer } from '../../types/Fertilizers';
import { getProductsAsync } from '../../store/products/actions';
import { getFertilizersAsync } from '../../store/fertilizers/actions';
import { OrderPopup } from '../../components/OrderPopup';
import { useModal } from '../../hooks/useModal';

export const Cart: React.FC = () => {
  const flowersData = useAppSelector(selectProductsData);
  const fertilizersData = useAppSelector(selectFertilizersData);

  const dispatch = useAppDispatch();

  const orderModal = useModal();

  const { data: flowers } = flowersData || { data: [] }
  const { data: fertilizers } = fertilizersData || { data: [] }


  console.log(flowersData, fertilizersData);
  

  const [isLoading, setIsLoading] = useState(false);
  const {
    cartProducts,
    setProducts,
    getProductCount,
  } = usePhones();

  useEffect(() => {
    // setIsLoading(true);

    if (!flowersData) {
      dispatch(getProductsAsync())
    }
    if (!fertilizersData) {
      dispatch(getFertilizersAsync())
    }
  }, [dispatch, setProducts, flowersData, fertilizersData]);

  const products = [...flowers, ...fertilizers]

  const preparedCartProducts = products.filter(({ productId }) => {
    return cartProducts.some(({ id }) => id === productId);
  });

  
  const navigate = useNavigate();

  const totalPrice = preparedCartProducts.reduce((acc, product) => {
    return acc + (getProductCount(product.productId) * product.price);
  }, 0);

  const { cartTotalCount, setCartProducts } = usePhones();

  const [phone, setPhone] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (isErrorVisible) {
      setIsErrorVisible(false)
    }
  }

  const handleButtonClick = () => {
    if (!phone) {
      setIsErrorVisible(true)
    }

    setCartProducts([]);

    navigate('/checkout')
  };

  return (
    <>
    
    <section className="cart">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="cart__button-back">
            <ButtonBack />
          </div>

          {!preparedCartProducts.length && (
            <h1 className="content__title cart__title">
              Немає продуктів в корзині
            </h1>
          )}

          {!!preparedCartProducts.length && (
            <>
              <h1 className="content__title cart__title">
                Корзина
              </h1>

              <div className="cart__wrapper">
                <CartList
                  cartItems={preparedCartProducts}
                />

                <div className='phone_wrapper'>
                  <input onChange={handlePhoneChange} value={phone} className='phone' type="tel" placeholder='Введіть номер телефону' />
                </div>

                <div className="cart__order">
                  <h2 className="cart__order-price">
                    {`${totalPrice} грн.`}
                  </h2>

                  <p className="cart__order-count">
                    {`Всього для ${cartTotalCount} ${cartTotalCount > 1 ? 'товарів' : 'товару'}`}
                  </p>

                  <div className="cart__order-line" />

                    <Button
                      onClick={handleButtonClick}
                      className="
                        button
                        button__primary
                        button--large
                        button__cart-order
                        button_checkout
                      "
                      disabled={!phone}
                    >
                      Оформити замовлення
                    </Button>
                </div>

                <p style={{
                  color: 'red',
                  fontSize: 13,
                  visibility: isErrorVisible ? 'visible' : 'hidden'
                }}>Для оформлення заповніть контактний номер телефону</p>
              </div>
            </>
          )}
        </>
      )}
    </section>

    {/* <OrderPopup {...orderModal} isOpenModal/> */}
    </>
  );
};
