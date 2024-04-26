import React from 'react';
import { styled, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
`;

const Spinner = styled.div`
  margin-top: -21px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;

  svg {
    animation: ${rotateAnimation} 2s linear infinite;
    height: 80px;
    width: 80px;
  }

  circle {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #dcccfd;
    stroke-linecap: round;
    animation: ${dashAnimation} 1.5s ease-in-out infinite;
  }
`;

const LoadingIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoadingIndicatorProps {}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = () => {
  return (
    <LoadingIndicatorContainer>
      <Spinner>
        <svg viewBox='25 25 50 50'>
          <circle cx='50' cy='50' r='20' fill='none' className='path' />
        </svg>
      </Spinner>
    </LoadingIndicatorContainer>
  );
};

export default LoadingIndicator;
