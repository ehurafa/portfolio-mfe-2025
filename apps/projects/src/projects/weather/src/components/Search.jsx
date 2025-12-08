import React from 'react';

import "./SearchStyles";
import { SearchButton, SearchCity, SearchContainer } from './SearchStyles';

const Search = ({ city, setCity, searchWeather}) => {
  return (
    <SearchContainer>
      <SearchCity
        type="text"
        value={ city }
        onChange={ (e) => setCity(e.target.value) }
        placeholder="Digite uma cidade..."
      />
      <SearchButton onClick={ searchWeather }>Buscar</SearchButton>
    </SearchContainer>
  )
}

export default Search