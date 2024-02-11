'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './_components/Card';
import { getLang, en } from './_components/i18n';
import { TypeHome } from './_components/types/home';

const HomeContainer = styled.div``;

const Head = styled.div`
  text-align: center;
  margin: 10vh 0 8vh 0;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 24px;
`;

const CardContainer = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
    padding: 0;
  }
`;

export default function Home() {
  const [lang, setLang] = useState<TypeHome>(en);
  const [isSmartphone, setIsSmartphone] = useState<boolean>(false);
  useEffect(() => {
    setLang(getLang());
    if (navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
      setIsSmartphone(true);
    }
  }, []);

  return (
    <HomeContainer>
      <Head>
        <Title>{lang.title}</Title>
        <Text>{lang.text}</Text>
      </Head>
      <CardContainer>
        {lang.cards.map((card, index) => {
          if (isSmartphone && index === 0) return;
          return (
            <Card key={index} img={card.img} text={card.text} arrow={card.arrow} link={card.link} />
          );
        })}
      </CardContainer>
    </HomeContainer>
  );
}
