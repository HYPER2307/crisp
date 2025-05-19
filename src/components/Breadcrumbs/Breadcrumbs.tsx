import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 as getId } from 'uuid';
import cn from 'classnames';

import './Breadcrumbs.scss';

interface Props {
  name: string;
  path: string;
}

export const Breadcrumbs: React.FC<Props> = ({ name }) => {
  const location = useLocation();
  const currentLocation = location.pathname.split('/').filter(path => (
    path !== ''
  ));

  // currentLocation[currentLocation.length - 1] = name

  let localPath = '';

  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs__home">
        <img src="img/icons/home.svg" alt="Home" />
      </Link>

      {currentLocation.map((path, i, arr) => {
        const newPath = path.split('-').map(p => (
          p.charAt(0).toUpperCase() + p.slice(1)
        )).join(' ');
        
        
        localPath += `/${path}`;

        if (i === arr.length - 1) {
          return (
            <React.Fragment key={getId()}>
            <img
              className="breadcrumbs__arrow"
              src="img/icons/arrow-right.svg"
              alt="Arrow right"
            />

            <Link
              to={localPath}
              className={cn(
                'breadcrumbs__path',
                {
                  'breadcrumbs__path--active': localPath === location.pathname,
                },
              )}
            >
              {name}
            </Link>
          </React.Fragment>
          )
        }

        return (
          <React.Fragment key={getId()}>
            <img
              className="breadcrumbs__arrow"
              src="img/icons/arrow-right.svg"
              alt="Arrow right"
            />

            <Link
              to={localPath}
              className={cn(
                'breadcrumbs__path',
                {
                  'breadcrumbs__path--active': localPath === location.pathname,
                },
              )}
            >
              {newPath}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
