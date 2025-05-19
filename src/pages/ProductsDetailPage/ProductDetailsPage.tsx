import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import './ProductDetailsPage.scss';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader/Loader';
import { ProductPageHeader } from '../../components/ProductPageHeader/ProductPageHeader';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCurrentProduct, selectIsLoading } from '../../store/currentProduct/selectors';
import { getCurrentProductAsync } from '../../store/currentProduct/actions';
import { ProductOrder } from '../../components/ProductOrder/ProductOrder';
import { ProductAbout } from '../../components/ProductAbout/ProductAbout';
import { ProductSpecs } from '../../components/ProductSpecs/ProductSpecs';
import { selectProductsData } from '../../store/products/selectors';
import { getProductsAsync } from '../../store/products/actions';
import { selectCurrentFertilizer } from '../../store/currentFertilizer/selectors';
import { selectFertilizersData } from '../../store/fertilizers/selectors';
import { getCurrentFertilizerAsync } from '../../store/currentFertilizer/actions';
import { getFertilizersAsync } from '../../store/fertilizers/actions';
import { PATHNAMES } from '../../constants/routes';

export const ProductDetailsPage: React.FC = () => {
  const { productId = '', productType = '' } = useParams();

  const location = useLocation();  

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading)
  const currentProduct = useAppSelector(selectCurrentProduct) || {} as Product
  const currentFertilizer = useAppSelector(selectCurrentFertilizer) || {} as Product
  const productsData = useAppSelector(selectProductsData);
  const fertilizersData = useAppSelector(selectFertilizersData);

  const products = productsData?.data;
  const fertilizers = fertilizersData?.data;

  console.log(currentFertilizer, );
  

  useEffect(() => {
      if (!currentFertilizer.documentId) {
        dispatch(getCurrentFertilizerAsync({ productId }));
      }
      
      if (!fertilizers) {
        dispatch(getFertilizersAsync())
      }

      if (currentProduct) {
        dispatch(getCurrentProductAsync({ productId }));
      }

  
      if (!products) {
        dispatch(getProductsAsync())
      }

    
  }, [dispatch, productId, productType, fertilizers, products]);

  const getSuggestedProducts = (productsList: Product[]): Product[] => {
    // if (!currentProduct) return [];

    return productsList?.filter(
      item =>
        item.categoryId === 'plants'
      && item.productId !== currentProduct.productId
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  const {
    name = '',
    mainImage,
    descriptionTitle = '',
    descriptionText=''
  } = currentProduct;
  
  console.log(getSuggestedProducts(products as Product []));

  const product = currentFertilizer || currentProduct

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
                <img src={'http://localhost:1337' + mainImage?.url} alt={mainImage?.alternativeText} className="product__image" />
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
                products={getSuggestedProducts(products || [])}
                title="Вам також може сподобатись"
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};
