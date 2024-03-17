import React, { useState } from 'react';
import { useNavigate } from '@remix-run/react';
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
  cursor: pointer;
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
  path?: string;
}

const SectionAccessArea = ({
  sectionTitle,
  buttonRotation,
  hoverImages,
  path = '/',
}: SectionAccessAreaProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(path); // Change to your intended route
  };

  return (
    <ImageAndSectionTitleContainer>
      <SectionButton
        degreeRotation={buttonRotation}
        sectionTitle={sectionTitle}
        isHovered={isHovered}
        path={path}
      />
      {hoverImages.map((hoverImage: HoverImage, key) => (
        <ImageHover
          key={key}
          top={hoverImage.imagePosition?.top}
          bottom={hoverImage.imagePosition?.bottom}
          left={hoverImage.imagePosition?.left}
          right={hoverImage.imagePosition?.right}
          height={hoverImage.imagePosition?.height}
          width={hoverImage.imagePosition?.width}
          src={hoverImage?.imageSrc}
          alt={`Clickable ${hoverImage?.imageAltText} image`}
          onClick={handleImgClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ))}
    </ImageAndSectionTitleContainer>
  );
};

export default SectionAccessArea;
