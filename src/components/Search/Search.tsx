import React, { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Search= () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('search') || '';


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const params = new URLSearchParams(searchParams);

    if (!value) {
      params.delete('search');
    } else {
      params.set('search', value);
    }

    setSearchParams(params);
  };

  return (
    <div className="header__search">
      <input
        type="text"
        className="header__input"
        placeholder={`Пошук ...`}
        value={searchValue}
        onChange={handleInputChange}
      />

      <div className="icon icon--search">
        <img
          src="img/icons/search.svg"
          alt="Icon Search"
        />
      </div>
    </div>
  );
};
