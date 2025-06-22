import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Categories.scss';
import { Product } from '../../types/Product';
import { PATHNAMES } from '../../constants/routes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectProductsData } from '../../store/products/selectors';
import { selectFertilizersData } from '../../store/fertilizers/selectors';
import { getProductsAsync } from '../../store/products/actions';
import { getFertilizersAsync } from '../../store/fertilizers/actions';

type Props = {
  products: Product[] 
};

export const Categories: React.FC<Props> = () => {
  const productsData = useAppSelector(selectProductsData);
  const fertilizersData = useAppSelector(selectFertilizersData);

  const { data: products } = productsData || { data: [] }
  const { data: fertilizers } = fertilizersData || { data: [] }

  const dispatch = useAppDispatch();

  const noFlowers = [...products].filter(({ categoryId }) => categoryId === 'plants')

  const flowers = [...products].filter(({ categoryId }) => categoryId === 'flowers');



  console.log(fertilizers);
  

  useEffect(() => {
    if (!productsData) {
      dispatch(getProductsAsync());
    }

    if (!fertilizersData) {
      dispatch(getFertilizersAsync());
    }
  }, [dispatch, productsData, fertilizersData]);

  return (
    <>
      <h1 className="section__title categories__title">
        Shop by category
      </h1>

      <div className="categories__list">
        <div className="categories__item">
          <Link to="/phones">
            <div className="categories__img-wrapper">
              <img
                className="categories__img categories__img-phones"
                src="img/plants/plants.png"
                alt="Plants"
              />
            </div>
          </Link>

          <Link to={PATHNAMES.PLANTS} className="categories__subtitle-link">
            <h3 className="categories__subtitle">
              Plants
            </h3>
          </Link>

          <p className="categories__count">
            {`${noFlowers?.length} товари`}
          </p>
        </div>

        <div className="categories__item">
          <Link to="/tablets">
            <div className="categories__img-wrapper">
              <img
                className="categories__img categories__img-tablets"
                src="img/flowers/flowers.png"
                alt="Flowers"
              />
            </div>
          </Link>

          <Link to="/tablets" className="categories__subtitle-link">
            <h3 className="categories__subtitle">
              Flowers
            </h3>
          </Link>

          <p className="categories__count">
          {`${flowers?.length} товари`}
          </p>
        </div>

        <div className="categories__item">
          <Link to="/accessories">
            <div className="categories__img-wrapper">
              <img
                className="categories__img categories__img-accessories"
                src="img/fertilizers/fertilizers.png"
                alt="Fertilizers"
              />
            </div>
          </Link>

          <Link to="/accessories" className="categories__subtitle-link">
            <h3 className="categories__subtitle">
              Fertilizers
            </h3>
          </Link>

          <p className="categories__count">
            {`${fertilizers?.length} товари`}
          </p>
        </div>
      </div>
    </>
  );
};
