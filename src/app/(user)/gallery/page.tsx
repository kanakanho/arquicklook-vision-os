'use client';

import React, { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Card from './_components/Card';
import Filter from './_components/Filter';
import Mobile from './_components/Mobile';
import Popup from './_components/Popup';
import demo from './_components/i18n/demo';
import { SolidObject } from '@/src/types/SolidObject';

export type Sort = 'latest' | 'popular';

const FilterContainer = styled.div<{ $isChose: string }>`
  margin: 50px 10% 0 10%;
  opacity: ${(props) => (props.$isChose === 'true' ? '0.4' : '1')};

  @media screen and (max-width: 1400px) {
    margin: 50px 50px 0 50px;
  }
`;

const CardContainer = styled.div<{ $isChose: string }>`
  margin: 0 10%;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
  opacity: ${(props) => (props.$isChose === 'true' ? '0.4' : '1')};

  @media screen and (max-width: 1400px) {
    margin: 0 50px;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Gallery: FC = () => {
  const [items, setItems] = useState<SolidObject[]>(demo);
  const [sort, setSort] = useState<Sort>('latest');
  const [isSmartphone, setIsSmartphone] = useState<boolean>(false);
  const [isChose, setChose] = useState<boolean>(false);
  const [itemId, setId] = useState<string>('');
  const [chosenItem, setItem] = useState<SolidObject | null>(null);
  const choseItem = (id: string) => {
    setId(id);
    setChose(true);
  };

  useEffect(() => {
    const foundItem = items.find((item: SolidObject) => item.id === itemId);
    if (foundItem) {
      setItem(foundItem);
    }
  }, [itemId, items]);

  useEffect(() => {
    if (navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
      setIsSmartphone(true);
    }
  }, []);

  useEffect(() => {
    // 本番ではここでAPIを叩く
    if (sort === 'latest') {
      console.log('新しい順で要求する（デフォルト）');
      setItems(demo);
    } else {
      console.log('人気順で要求する');
      // setItems();
    }
  }, [sort]);

  useEffect(() => {
    if (isChose) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isChose]);

  if (isSmartphone) {
    return <Mobile items={items} />;
  }

  return (
    <>
      {isChose && (
        <>
          <Background onClick={() => setChose(false)} />
          <Popup item={chosenItem} setChose={setChose} />
        </>
      )}
      <FilterContainer $isChose={isChose.toString()}>
        <Filter sort={sort} setSort={setSort} />
      </FilterContainer>
      <CardContainer $isChose={isChose.toString()}>
        {items.map((item: SolidObject) => {
          return <Card key={item.id} item={item} choseItem={choseItem} />;
        })}
      </CardContainer>
    </>
  );
};

export default Gallery;
