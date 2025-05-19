import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Flowers.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { usePhones } from '../../hooks/usePhones';
import { Pagination } from '../../components/Pagination/Pagination';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Loader } from '../../components/Loader/Loader';
import { SortType } from '../../types/SortType';
import { PhonesList } from '../../components/PhonesList/PhonesList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectProductsData } from '../../store/products/selectors';
import { getProductsAsync } from '../../store/products/actions';

export const Flowers: React.FC = () => {
  const {
    sortParams,
    perPageParams,
    // products,
    setProducts,
  } = usePhones();

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const productsData = useAppSelector(selectProductsData);

  const { data: products } = productsData ?? { data: [] };

  const searchValue = searchParams.get('search') || '';
  const itemsPerPage = +(searchParams.get('perPage') || 32);
  const sortType = searchParams.get('sortType') || '';

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

    const getSortedProducts = () => {
      switch (sortType as SortType) {
        case SortType.Alphabetically:
          return [...products].sort((prev, next) => (
            next.name.localeCompare(prev.name)
          ));
  
        case SortType.Cheapest:
          return [...products]
            .sort((prev, next) => prev.price - next.price);
  
        default:
          return products;
      }
    }
    

  const filteredProducts = getSortedProducts()
    .filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) && product.categoryId === 'flowers'
    );

  const productsLength = filteredProducts?.length;
  const lastProductIndex = currentPage * itemsPerPage;
  const firstProductIndex = lastProductIndex - itemsPerPage;
  const slicedProducts = filteredProducts?.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    // if (!products.length) {
    //   setIsLoading(true);

    //   client.get<Product[]>('products.json')
    //     .then(setProducts)
    //     .finally(() => setIsLoading(false));
    // }
    if (!products) {
      dispatch(getProductsAsync());
    }
  }, [products, setProducts, dispatch]);

  return (
    <div className="plants">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="plants__breadcrumbs">
            <Breadcrumbs name='Квіти' />
          </div>

          <h1 className="content__title">Квіти</h1>

          <p className="plants__count">
            {`${productsLength} рослин знайдено`}
          </p>

          <section className="section section__plants-pagination">
            {!filteredProducts?.length && (
              <p className="content__not-fount">
                Нічого не знайдено 🌱
              </p>
            )}

            {!!filteredProducts?.length && (
              <>
                <div className="pagination__sort-params">
                  <Dropdown
                    title="Сортування"
                    sortParams={sortParams}
                  />
                  <Dropdown
                    title="Кількість на сторінці"
                    perPageParams={perPageParams}
                    setCurrentPage={setCurrentPage}
                    isItemsPerPage
                    isSmall
                  />
                </div>

                <PhonesList products={slicedProducts} />

                <Pagination
                  productsLength={productsLength}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            )}
          </section>
        </>
      )}
    </div>
  );
};
