import React from 'react';
import { styled, css } from 'styled-components';
import SectionButton from './SectionButton';

const ImageAndSectionTitleContainer = styled.div`
  position: relative;
  margin: 10px 0px;
`;

type ImageProps = {
  top?: string | null;
  bottom?: string | null;
  left?: string | null;
  right?: string | null;
  height?: string | null;
  width?: string | null;
};

const ImageHover = styled.img<ImageProps>`
  position: absolute;
  ${({ top, left, height, width, bottom, right }) => css`
    ${top && `top: ${top}`};
    ${bottom && `bottom: ${bottom}`};
    ${left && `left: ${left}`};
    ${right && `right: ${right}`};
    height: ${height ? `${height}` : '150px'};
    width: ${width ? `${width}` : '150px'};
  `}
`;

type HoverImage = {
  imagePosition: ImageProps;
  imageSrc: string;
  imageAltText: string;
};

interface SectionAccessAreaProps {
  sectionTitle: string;
  buttonRotation: string;
  hoverImages: HoverImage[];
}

const SectionAccessArea = ({
  sectionTitle,
  buttonRotation,
  hoverImages,
}: SectionAccessAreaProps) => {
  return (
    <ImageAndSectionTitleContainer>
      <SectionButton
        degreeRotation={buttonRotation}
        sectionTitle={sectionTitle}
      />
      {hoverImages.map((hoverImage: HoverImage) => (
        <ImageHover
          top={hoverImage.imagePosition?.top}
          bottom={hoverImage.imagePosition?.bottom}
          left={hoverImage.imagePosition?.left}
          right={hoverImage.imagePosition?.right}
          height={hoverImage.imagePosition?.height}
          width={hoverImage.imagePosition?.width}
          src={hoverImage?.imageSrc}
          alt={hoverImage?.imageAltText}
        />
      ))}
    </ImageAndSectionTitleContainer>
  );
};

export default SectionAccessArea;
