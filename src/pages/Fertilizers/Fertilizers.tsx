import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './Fertilizers.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { usePhones } from '../../hooks/usePhones';
import { Pagination } from '../../components/Pagination/Pagination';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Loader } from '../../components/Loader/Loader';
import { SortType } from '../../types/SortType';
import { PhonesList } from '../../components/PhonesList/PhonesList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectFertilizersData } from '../../store/fertilizers/selectors';
import { getFertilizersAsync } from '../../store/fertilizers/actions';

export const Fertilizers: React.FC = () => {
  const {
    sortParams,
    perPageParams,
  } = usePhones();

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const fertilizersData = useAppSelector(selectFertilizersData);

  const { data: products } = fertilizersData ?? { data: [] };

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
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  const productsLength = filteredProducts?.length;
  const lastProductIndex = currentPage * itemsPerPage;
  const firstProductIndex = lastProductIndex - itemsPerPage;
  const slicedProducts = filteredProducts?.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    if (!fertilizersData) {
      dispatch(getFertilizersAsync());
    }
  }, [products, dispatch, fertilizersData]);

  console.log(products);
  

  return (
    <div className="plants">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="plants__breadcrumbs">
            <Breadcrumbs name='Добриво' path='' />
          </div>

          <h1 className="content__title">Добриво</h1>

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
