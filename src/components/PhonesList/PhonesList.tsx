import React, { Fragment } from 'react';
import { v4 as getId } from 'uuid';

import { ProductItem } from '../ProductItem/ProductItem';
import { Product } from '../../types/Product';
import { IFertilizer } from '../../types/Fertilizers';

type Props = {
  products: Product[] | IFertilizer[],
};

export const PhonesList: React.FC<Props> = ({
  products,
}) => {
  return (
    <div className="pagination__list">
      {products.map(phone => (
        <Fragment key={getId()}>
          <ProductItem
            product={phone}
          />
        </Fragment>
      ))}
    </div>
  );
};
