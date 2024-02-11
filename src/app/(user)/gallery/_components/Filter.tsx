import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Sort } from '../page';
import { en, getLang } from './i18n';
import { TypeFilter } from './types/gallery';

type Props = {
  sort: Sort;
  // eslint-disable-next-line no-unused-vars
  setSort: (sort: Sort) => void;
};

const FilterBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ChoseCheckBox = styled.div`
  margin: 0;
  padding: 10px 20px 8px 20px;
  background-color: rgba(255, 165, 0, 0.7);

  border-radius: 10px;
  box-shadow: 0 0 5px transparent;

  font-weight: 500;
`;

const UnChoseCheckBox = styled.button`
  margin: 1px;
  padding: 9px 19px 7px 19px;
  background-color: white;

  border-radius: 10px;
  box-shadow: 0 0 5px orange;

  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  border: none;
  outline: none;
`;

const Filter: FC<Props> = ({ sort, setSort }) => {
  const [lang, setLang] = useState<TypeFilter>(en);

  useEffect(() => {
    setLang(getLang());
  }, []);

  return (
    <FilterBox>
      {sort === 'latest' ? (
        <>
          <ChoseCheckBox>{lang.latest}</ChoseCheckBox>
          <UnChoseCheckBox onClick={() => setSort('popular')}>{lang.popular}</UnChoseCheckBox>
        </>
      ) : (
        <>
          <UnChoseCheckBox onClick={() => setSort('latest')}>{lang.latest}</UnChoseCheckBox>
          <ChoseCheckBox>{lang.popular}</ChoseCheckBox>
        </>
      )}
    </FilterBox>
  );
};

export default Filter;
