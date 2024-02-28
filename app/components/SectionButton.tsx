import React from 'react';
import { styled } from 'styled-components';

interface SectionButtonProps {
  degreeRotation: string;
  sectionTitle: string;
}
const SeriesOuterContainer = styled.div`
  padding: 30px;

  a {
    color: black;
    text-decoration: none;
    font-family: 'Lucida Console', 'Courier New', monospace;
  }

  a:hover {
    color: black;
    text-decoration: none;
    font-weight: 900;
    cursor: pointer;
  }
`;

const SeriesContainer = styled.button<{ rotate?: string }>`
  border-radius: 100px;
  height: 65px;
  background-color: #dcccfd;
  border: 1px solid black;
  padding: 5px;
  margin: 10px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}turn)` : null)};

  &:hover {
    background-color: #bb9ef8;
    border: 2px solid black;
    box-shadow: 2px 2px 2px 2px #888888;
  }
`;

const SectionButton = ({
  degreeRotation,
  sectionTitle,
}: SectionButtonProps) => {
  return (
    <SeriesOuterContainer>
      <SeriesContainer as='a' href='/' rotate={degreeRotation}>
        {sectionTitle}
      </SeriesContainer>
    </SeriesOuterContainer>
  );
};

export default SectionButton;
