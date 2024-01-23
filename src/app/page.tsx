'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './_components/Card';
import en from './_components/element/en';
import ja from './_components/element/ja';
import { TypeHome } from './_components/types/home';
import { getLang } from './_components/utils/lang';

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
  useEffect(() => {
    setLang(getLang(en, ja));
  }, []);

  return (
    <HomeContainer>
      <Head>
        <Title>{lang.title}</Title>
        <Text>{lang.text}</Text>
      </Head>
      <CardContainer>
        {lang.cards.map((card, index) => (
          <Card key={index} img={card.img} text={card.text} arrow={card.arrow} link={card.link} />
        ))}
      </CardContainer>
    </HomeContainer>
  );
}
