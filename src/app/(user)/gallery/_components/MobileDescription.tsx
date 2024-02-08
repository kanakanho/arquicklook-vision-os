'use client';
import { FC, useState } from 'react';
import { styled } from 'styled-components';

type Props = {
  description: string;
};

const DescriptionContainer = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const SetOpenButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  cursor: pointer;
  svg {
    padding: 0;
    margin: 0;
  }
`;

const MobileDescription: FC<Props> = ({ description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DescriptionContainer>
      {isOpen ? (
        <>
          <SetOpenButton onClick={() => setIsOpen(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 21 21'>
              <g
                fill='none'
                fillRule='evenodd'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                transform='translate(2 2)'
              >
                <circle cx='8.5' cy='8.5' r='8' />
                <path d='m11.5 9.5l-3-3l-3 3' />
              </g>
            </svg>
          </SetOpenButton>
          <p>{description}</p>
        </>
      ) : (
        <SetOpenButton onClick={() => setIsOpen(true)}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 21 21'>
            <g
              fill='none'
              fillRule='evenodd'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(2 2)'
            >
              <circle cx='8.5' cy='8.5' r='8' />
              <path d='m5.466 7.466l3 3.068l3-3.068' />
            </g>
          </svg>
        </SetOpenButton>
      )}
    </DescriptionContainer>
  );
};

export default MobileDescription;
