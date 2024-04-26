import React from 'react';
import { styled, keyframes } from 'styled-components';

// Keyframes for rotation
const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

// Keyframes for dash
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

// Styled spinner container
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

interface LoadingIndicatorProps {}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = () => {
  return (
    <Spinner>
      <svg viewBox='25 25 50 50'>
        <circle cx='50' cy='50' r='20' fill='none' className='path' />
      </svg>
    </Spinner>
  );
};

export default LoadingIndicator;
