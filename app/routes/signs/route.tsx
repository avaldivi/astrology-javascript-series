import React from 'react';
import { styled } from 'styled-components';
import { Aries } from '~/images';

const SignsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

interface SignsIndexPageProps {}

const Signs = () => {
  return (
    <>
      <h1> Signs </h1>
      <SignsWrapper>
        <SignContainer>
          <h2>Aries</h2>
          <ImageContainer>
            <img src={Aries} height='150px' alt='Aries' />
          </ImageContainer>
          <p>Brave, adventurous, and a pioneer</p>
          <Button>View More</Button>
        </SignContainer>
        <SignContainer>Taurus</SignContainer>
        <SignContainer>Gemini</SignContainer>
        <SignContainer>Cancer</SignContainer>
        <SignContainer>Leo</SignContainer>
      </SignsWrapper>
    </>
  );
};

export default Signs;
