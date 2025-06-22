import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { FavoritesList } from '../../components/FavoritesList/FavoritesList';
import { usePhones } from '../../hooks/usePhones';

import './Favorites.scss';
import { client } from '../../client/httpClient';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader/Loader';
import { selectProductsData } from '../../store/products/selectors';
import { selectFertilizersData } from '../../store/fertilizers/selectors';
import { getProductsAsync } from '../../store/products/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getFertilizersAsync } from '../../store/fertilizers/actions';

export const Favorites: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { favoritesIds, setProducts } = usePhones();

  const flowersData = useAppSelector(selectProductsData);
   const fertilizersData = useAppSelector(selectFertilizersData);
 
   const dispatch = useAppDispatch();
 
   const { data: flowers } = flowersData || { data: [] }
   const { data: fertilizers } = fertilizersData || { data: [] }
 
 
   console.log(flowersData, fertilizersData);
   

 
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

  const favoritesProducts = products.filter(({ productId }) => {
    return favoritesIds.includes(productId);
  });

  return (
    <section className="favorites">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="favorites__breadcrumbs">
            <Breadcrumbs name='Улюблені' path='' />
          </div>

          {!favoritesIds.length && (
            <h1 className="content__title">
              Немає товарів в улюблених
            </h1>
          )}

          {!!favoritesIds.length && (
            <>
              <h1 className="content__title">
                Favorites
              </h1>

              <p className="favorites__items-count">
                {`${favoritesIds.length} items`}
              </p>

              <FavoritesList
                favoriteProducts={favoritesProducts}
              />
            </>
          )}
        </>
      )}

    </section>
  );
};
