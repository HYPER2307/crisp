import React, { useEffect, useState } from 'react';

import { Slider } from '../../components/Slider/Slider';
import './Home.scss';
import { banners } from '../../data/banners-data';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Categories } from '../../components/Categories/Categories';
import { usePhones } from '../../hooks/usePhones';
import { IProductResponse, Product } from '../../types/Product';
import { client } from '../../client/httpClient';
import { Loader } from '../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectProductsData } from '../../store/products/selectors';
import { getProductsAsync } from '../../store/products/actions';

export const Home: React.FC = () => {
  const {
    setProducts,
    preparedHotPriceProducts,
    // products,
  } = usePhones();

  const dispatch = useAppDispatch();
  const productsData = useAppSelector(selectProductsData)

  const [isLoading, setIsLoading] = useState(false);

  const { data: products } = productsData || {};

  useEffect(() => {
    setIsLoading(true);

    client.get<Product[]>('products.json')
      .then(setProducts)
      .finally(() => setIsLoading(false));

    dispatch(getProductsAsync())
  }, [setProducts, dispatch]);

  console.log(products);
  

  if (isLoading) {
    return <Loader />;
  }

  // Вазончики найменшого розміру — як "новенькі моделі", але не айфони
  const miniPlants = [] as Product[]

  return (
    <div className="home">
      <h1 className="home__title">Ласкаво просимо у "Квіти для тебе"!</h1>

      <section className="slider home__slider">
        <Slider banners={banners} />
      </section>

      <section className="section hot-prices home__hot-prices">
        <ProductsList
          products={preparedHotPriceProducts}
          title="Гарячі знижки"
        />
      </section>

      <section className="section categories">
        <Categories products={ []} />
      </section>

      <section className="section brand-new home__brand-new">
        <ProductsList
          products={products || []}
          title="Маленькі новенькі 🌱"
        />
      </section>
    </div>
  );
};
