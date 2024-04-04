import { useNavigate } from '@remix-run/react';
import React from 'react';
import { styled } from 'styled-components';

const SignsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  button {
    align-self: end;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #d0d7df;
  width: 100px;
  border: none;
  box-shadow: inset -2px -3px 3px #b9b9b9;
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

interface DetailCardProps {
  items: {
    title: string;
    imageSrc: string;
    description: string;
  }[];
  path?: string;
}

export const DetailCard: React.FC<DetailCardProps> = ({
  items,
  path = 'signs',
}) => {
  const navigate = useNavigate();
  return (
    <SignsWrapper>
      {items.map((item) => {
        return (
          <SignContainer key={item.title}>
            <h2>{item.title}</h2>
            <ImageContainer>
              <img src={item.imageSrc} height='150px' alt={item.title} />
            </ImageContainer>
            <p>{item.description}</p>
            <Button
              onClick={() => navigate(`/${path}/${item.title.toLowerCase()}`)}
            >
              View More
            </Button>
          </SignContainer>
        );
      })}
    </SignsWrapper>
  );
};
