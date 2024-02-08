'use client';

import React, { FC } from 'react';
import { styled } from 'styled-components';
import MobileCard from '../_components/MobileCard';
import { SolidObject } from '@/src/types/SolidObject';

type Props = {
  items: SolidObject[];
};

const MobileContainer = styled.div`
  overflow-x: auto;
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    display: none;
  }

  scroll-snap-type: x mandatory;
`;

const CardContainer = styled.div`
  padding: 25px 5vw;
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(35, 1fr);
  align-items: start;
  overflow-x: hidden;
  gap: 20vw;
`;

const Mobile: FC<Props> = ({ items }) => {
  return (
    <MobileContainer>
      <CardContainer>
        {items.map((item: SolidObject) => (
          <MobileCard item={item} key={item.id} />
        ))}
      </CardContainer>
    </MobileContainer>
  );
};

export default Mobile;
