'use client';

import React, { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import MobileCard from '../_components/MobileCard';
import { useIsCardChangeMutators } from '@/src/state/cardChange';
import { SolidObject } from '@/src/types/SolidObject';

type Props = {
  items: SolidObject[];
};

const MobileContainer = styled.div`
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
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
  // スクロールを管理する
  // eslint-disable-next-line no-undef
  const [scrollTimeoutId, setScrollTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [cardWidths, setCardWidths] = useState<number[]>([]);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [isMiniScroll, setIsMiniScroll] = useState<boolean>(false);

  const [nowItem, setNowItem] = useState<SolidObject>(items[0]);

  useEffect(() => {
    const width = window.innerWidth;
    const cardWidth = width * 1.11;
    const cardWidthArray = [];
    for (let i = 0; i < 35; i++) {
      cardWidthArray.push(cardWidth * i);
    }
    setCardWidths(cardWidthArray);
  }, []);

  const choiceNowItem = (closest: number) => {
    if (closest === -457.32000000000005) return setNowItem(items[0]);
    const index = cardWidths.indexOf(closest);
    setNowItem(items[index]);
  };

  const { setIsCardChangePermissionState } = useIsCardChangeMutators();
  useEffect(() => {
    setIsCardChangePermissionState(true);
    setTimeout(() => {
      setIsCardChangePermissionState(false);
    }, 200);
  }, [nowItem, setIsCardChangePermissionState]);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const { scrollLeft } = target;

    if (scrollTimeoutId) {
      clearTimeout(scrollTimeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      const newScrollLeft = target.scrollLeft;
      setCurrentWidth(newScrollLeft);
      if (isMiniScroll) {
        setTimeout(() => {
          setIsMiniScroll(false);
        }, 200);
        return;
      }

      // スクロール量が一定以上ならミニスクロールを実行
      if (Math.abs(newScrollLeft - currentWidth) < Math.floor(window.innerWidth)) {
        // 一番近いカードの位置を取得
        let closest = cardWidths.reduce((prev, curr) => {
          return Math.abs(curr - scrollLeft) < Math.abs(prev - scrollLeft) ? curr : prev;
        });
        setIsMiniScroll(true);
        // 変化量が+か-かで判定
        if (newScrollLeft - currentWidth > 0) {
          // +なら右にスクロール
          closest = closest + window.innerWidth * 1.11;
        } else {
          // -なら左にスクロール
          closest = closest - window.innerWidth * 1.11;
        }
        choiceNowItem(closest);
        target.scrollTo({
          left: closest,
          behavior: 'smooth',
        });
      } else {
        // 通常のスクロール
        // 一番近いカードの位置を取得
        const closest = cardWidths.reduce((prev, curr) => {
          const closestTmp =
            Math.abs(curr - scrollLeft) < Math.abs(prev - scrollLeft) ? curr : prev;
          return closestTmp;
        });
        choiceNowItem(closest);
        target.scrollTo({
          left: closest,
          behavior: 'smooth',
        });
        setIsMiniScroll(true);
      }
    }, 40);

    setScrollTimeoutId(newTimeoutId);
  };

  return (
    <MobileContainer onScroll={scrollHandler}>
      <CardContainer>
        {items.map((item: SolidObject) => (
          <MobileCard item={item} key={item.id} />
        ))}
      </CardContainer>
    </MobileContainer>
  );
};

export default Mobile;
