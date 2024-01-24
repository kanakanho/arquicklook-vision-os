import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { TypeCrad } from './types/home';

const FigureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  @media screen and (max-width: 1100px) {
    width: 300px;
    height: 200px;
  }
`;

const Figure = styled.div`
  margin: 0;
  img {
    border-radius: 20px;
  }
`;

const Caption = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 24px;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

export const Card: FC<TypeCrad> = ({ img, text, arrow, link }) => {
  return (
    <FigureContainer>
      <Figure>
        <ImageContainer>
          <Image src={`/${img}`} alt={text} layout='fill' />
        </ImageContainer>
      </Figure>
      <Caption>{text}</Caption>
      <Link href={link}>
        <Text>
          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'>
            <path
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
              d='m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5'
            />
          </svg>
          &nbsp;{arrow}
        </Text>
      </Link>
    </FigureContainer>
  );
};

export default Card;
