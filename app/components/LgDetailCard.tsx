import { useNavigate, Link } from '@remix-run/react';
import React from 'react';
import { styled } from 'styled-components';

const SignsWrapper = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const SignContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-width: 200px;
  margin: 10px;
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 16px;
  margin: 10px 20px;
  background-color: #d0d7df;
  min-width: 100px;
  border: none;
  box-shadow: inset -2px -3px 3px #b9b9b9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-content: flex-end;
`;

const ImageContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

interface LgDetailCardProps {
  items: {
    title: string;
    symbolImgSrc: string;
    description: string[];
  }[];
  path?: string;
}

export const LgDetailCard: React.FC<LgDetailCardProps> = ({
  items,
  path = 'aspects',
}) => {
  return (
    <SignsWrapper>
      <SignContainer>
        {items.map((item) => {
          const aspect = item.title.toLowerCase();
          return (
            <ItemWrapper key={item.title}>
              <h3>{item.title}</h3>
              <Link
                to={`/${path}/${aspect}#scroll`}
                preventScrollReset
              >
                <ImageContainer>
                  <img
                    src={item.symbolImgSrc}
                    height='150px'
                    alt={item.title}
                  />
                </ImageContainer>
              </Link>
            </ItemWrapper>
          );
        })}
      </SignContainer>
    </SignsWrapper>
  );
};
