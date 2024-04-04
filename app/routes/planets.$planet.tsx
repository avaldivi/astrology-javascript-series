import React from 'react';
import { styled } from 'styled-components';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { findPlanetByTitle } from '~/utils/planets';
import { devices, breakpoints } from '~/utils/constants';
import { HouseWheel } from '~/images';
import { BreadcrumbArgs } from '~/components/PageBreadcrumb';

interface PlanetsShowProps {}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: 100%;

  @media only screen and ${devices.xs} {
    width: 100%;
  }
`;

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  max-width: 500px;

  @media only screen and ${devices.xs} and (max-width: ${breakpoints.sm}) {
    width: 200px;
  }
`;

const DetailArea = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid black;
  width: 100%;
  img {
    width: 100%; // make the image responsive
    height: auto; // keep the aspect ratio
  }
`;

const ImageContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: 1px solid black;
`;

const StyledImage = styled.img<{ height?: string }>`
  height: ${({ height }) => (height ? height : '300px')};
`;

export const handle = {
  breadcrumbLink: (data: BreadcrumbArgs) => data.params.planet,
  breadcrumbText: (data: BreadcrumbArgs) => data.params.planet,
};

export const loader: LoaderFunction = ({ params }) => {
  const [planet] = findPlanetByTitle(params.planet);
  return json({ planet });
};

const PlanetsShow: React.FC<PlanetsShowProps> = () => {
  const {
    planet: {
      title,
      imageSrc,
      associatedSigns,
      houses,
      fullPageDescription,
      houseDescription,
    },
  } = useLoaderData<typeof loader>();
  return (
    <CardContainer>
      <SignContainer>
        <h1>{title}</h1>
        <ImageContainer>
          <StyledImage src={imageSrc} alt={title} />
        </ImageContainer>
        <p>{fullPageDescription}</p>
        <p>{houseDescription}</p>
      </SignContainer>
      <SignContainer>
        <DetailArea>
          <h2> Sign and House Details </h2>
          <StyledImage
            height='100%'
            src={HouseWheel}
            alt='Astrological Wheel with all 12 signs'
          />
          <p>
            <b>Associated Signs:</b> {associatedSigns.join(', ')}
          </p>
          <p>
            <b>House:</b> {houses.join(', ')}
          </p>
        </DetailArea>
      </SignContainer>
    </CardContainer>
  );
};

export default PlanetsShow;
