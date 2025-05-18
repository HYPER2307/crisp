import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetailsPage.scss';
import { client } from '../../client/httpClient';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader/Loader';
import { ProductPageHeader } from '../../components/ProductPageHeader/ProductPageHeader';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { usePhones } from '../../hooks/usePhones';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCurrentProduct } from '../../store/currentProduct/selectors';
import { getCurrentProductAsync } from '../../store/currentProduct/actions';
import { ProductOrder } from '../../components/ProductOrder/ProductOrder';
import { ProductAbout } from '../../components/ProductAbout/ProductAbout';
import { ProductSpecs } from '../../components/ProductSpecs/ProductSpecs';

export const ProductDetailsPage: React.FC = () => {
  const { productId = '' } = useParams();

  const {
    products,

  } = usePhones();

  const dispatch = useAppDispatch();
  const currentProduct = useAppSelector(selectCurrentProduct) ?? {} as Product

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(getCurrentProductAsync({ productId }))
  }, [dispatch, productId]);

  const getSuggestedProducts = (productsList: Product[]): Product[] => {
    if (!currentProduct) return [];

    return productsList.filter(
      item =>
        item.category === 'plants' &&
        item.id !== currentProduct.id &&
        item.color === currentProduct.color
    ).slice(0, 4);
  };

  if (isLoading) {
    return <Loader />;
  }

  const {
    name = '',
    mainImage = '',
    descriptionTitle = '',
    descriptionText=''

  } = currentProduct;
  

  return (
    <>
      <section className="product">
        {isLoading && (
          <Loader />
        )}

        {!isLoading && (
          <>
            <ProductPageHeader
              productName={name}
            />

            <div className="product__content">
              <div className="product__photo">
                <img src={mainImage} alt={name} className="product__image" />
              </div>
              {/* <ProductPagePhotos
                images={images}
                currentPhoto={currentPhoto}
                setCurrentPhoto={setCurrentPhoto}
                name={name}
              /> */}

              <ProductOrder
                {...currentProduct}
              />

              <ProductAbout
                title={descriptionTitle}
                description={descriptionText}
              />

              <ProductSpecs
                {...currentProduct}
              />

              <ProductsList
                products={getSuggestedProducts(products)}
                title="You also may like"
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};
