import React from 'react';
import { v4 as getId } from 'uuid';

import { CartItem } from '../CartItem/CartItem';
import { Product } from '../../types/Product';
import { IFertilizer } from '../../types/Fertilizers';

type Props = {
  cartItems: (Product | IFertilizer)[],
};

export const CartList: React.FC<Props> = ({
  cartItems,
}) => {
  return (
    <div className="cart__list">
      {
        cartItems.map(item => (
          <CartItem
            key={getId()}
            item={item as Product}
          />
        ))
      }
    </div>
  );
};
