import { FC } from 'react';
import { styled } from 'styled-components';
import { SolidObject } from '@/src/types/SolidObject';

type Props = {
  item: SolidObject;
  // eslint-disable-next-line no-unused-vars
  choseItem: (id: string) => void;
};

const Item = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0 2px 10px #999;

  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 14px orange;
  }
`;

const CardThumbnail = styled.img`
  width: auto;
  height: 400px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  padding: 10px 0;
  background-color: #eee;
  border-radius: 0 0 16px 16px;
  border: 5px solid rgba(255, 255, 255, 0.5);
  flex: 1;
`;

const ModelName = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const AdditionalInfo = styled.div`
  padding: 10px 25px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    padding: 0 5px;
  }
`;

const DateText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

const ViewCount = styled.p`
  margin: 0;
  display: flex;
  font-size: 14px;
  font-weight: 300;
  .svg {
    vertical-align: bottom;
  }
  .text {
    line-height: 10px;
  }
`;

const Card: FC<Props> = ({ item, choseItem }) => {
  const date = item.date.toLocaleDateString();
  return (
    <Item onClick={() => choseItem(item.id)}>
      <CardThumbnail src={item.image} alt={item.modelName} />
      <TextContainer>
        <ModelName>{item.modelName}</ModelName>
        <UserName>{item.user}</UserName>
        <AdditionalInfo>
          <DateText>{date}</DateText>
          <ViewCount>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'>
              <path
                fill='currentColor'
                d='M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6c6.56 0 10-4.834 10-5.6c0-.768-3.44-5.6-10-5.6m0 9.907c-2.455 0-4.445-1.928-4.445-4.307c0-2.379 1.99-4.309 4.445-4.309s4.444 1.93 4.444 4.309c0 2.379-1.989 4.307-4.444 4.307M10 10c-.407-.447.663-2.154 0-2.154c-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154c0-.547-1.877.379-2.223 0'
              />
            </svg>
            {item.count}
          </ViewCount>
        </AdditionalInfo>
      </TextContainer>
    </Item>
  );
};

export default Card;
