import React from 'react';
import { styled } from 'styled-components';

interface SeriesSectionCardProps {
  degreeRotation: string;
  sectionTitle: string;
}
const SeriesOuterContainer = styled.div`
  padding: 30px;
`;

const SeriesContainer = styled.div<{ rotate?: string }>`
  border-radius: 100px;
  height: 35px;
  background-color: #dcccfd;
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ rotate }) => (rotate ? `rotate(${rotate}turn)` : null)};
`;

const SeriesSectionCard = ({
  degreeRotation,
  sectionTitle,
}: SeriesSectionCardProps) => {
  return (
    <SeriesOuterContainer>
      <SeriesContainer rotate={degreeRotation}>{sectionTitle}</SeriesContainer>
    </SeriesOuterContainer>
  );
};

export default SeriesSectionCard;
