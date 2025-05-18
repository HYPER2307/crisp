import React from 'react';
import { v4 as getId } from 'uuid';

type Props = {
  title: string;
  description: string;
};

export const ProductAbout: React.FC<Props> = ({
  title = '',
  description = '',
}) => {
  return (
    <div
      className="product__about"
      data-cy="productDescription"
    >
      <h3 className="product__subtitle">
        Про товар
      </h3>

      <div className="product__line" />

        <div
          className="product__about-descr-wrapper"
        >
          <h4 className="product__about-descr-title">
            {title}
          </h4>

            <p
              className="product__about-descr"
              key={getId()}
            >
              {description}
            </p>
        </div>
    </div>
  );
};
