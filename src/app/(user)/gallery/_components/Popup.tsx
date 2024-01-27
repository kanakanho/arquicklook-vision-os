import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';
import { solidObject } from '@/src/types/solidObject';

type Props = {
  item: solidObject;
};

const PopupContainer = styled.div`
  position: fixed;
  top: 25%;
  left: calc(50vw - 25%);
  z-index: 9999;
  width: 50%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  border: 5px solid rgba(255, 255, 255, 0.5);

  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  border-radius: 20px 0 0 20px;
`;

const Image = styled.img`
  padding: 10%;
  width: 80%;
  height: 80%;
  object-fit: contain;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Item = styled.div`
  padding: 7%;

  display: flex;
  flex-direction: column;

  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 0 20px 20px 0;
`;

const Name = styled.div`
  padding: 20px 0;
  font-size: 24px;
  font-weight: 600;
`;

const User = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`;

const Description = styled.div`
  padding: 20px 0;

  font-size: 16px;
  font-weight: 400;
`;

const Flex = styled.div`
  flex: 1 1;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

const ViewCount = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 300;

  svg {
    padding: 0 5px;
  }
`;

const Popup: FC<Props> = ({ item }) => {
  const date = item.date.toLocaleDateString();
  return (
    <PopupContainer>
      <ImageContainer>
        <Link href={item.usdz} rel='ar'>
          <Image src={item.image} alt={item.user} />
        </Link>
      </ImageContainer>
      <Item>
        <Name>{item.modelName}</Name>
        <User>{item.user}</User>
        <Description>{item.description}</Description>
        <Flex />
        <Items>
          <Date>{date}</Date>
          <ViewCount>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'>
              <path
                fill='currentColor'
                d='M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6c6.56 0 10-4.834 10-5.6c0-.768-3.44-5.6-10-5.6m0 9.907c-2.455 0-4.445-1.928-4.445-4.307c0-2.379 1.99-4.309 4.445-4.309s4.444 1.93 4.444 4.309c0 2.379-1.989 4.307-4.444 4.307M10 10c-.407-.447.663-2.154 0-2.154c-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154c0-.547-1.877.379-2.223 0'
              />
            </svg>
            {item.count}
          </ViewCount>
        </Items>
      </Item>
    </PopupContainer>
  );
};

export default Popup;
