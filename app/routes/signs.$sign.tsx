import React from 'react';
import { styled } from 'styled-components';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import { Link } from '@remix-run/react';
import { BreadcrumbArgs } from '~/components/PageBreadcrumb';
import { findSignByTitle } from '~/utils/signs';

interface SignShowProps {}

export const loader: LoaderFunction = async ({ params }) => {
  const [sign] = findSignByTitle(params.sign);
  return json({ sign });
};

export const handle = {
  breadcrumbLink: (data: BreadcrumbArgs) => data.params.sign,
  breadcrumbText: (data: BreadcrumbArgs) => data.params.sign,
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.primary};
  min-width: 200px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  max-width: 500px;

  p {
    font-size: 20px;
  }
`;

const DetailArea = styled.div`
  background-color: white;
  margin: 5px;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50%;
  border: 1px solid black;
`;

const SignDatesText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Sign: React.FC<SignShowProps> = () => {
  const {
    sign: {
      title,
      imageSrc,
      dates,
      fullPageDescription,
      element,
      modality,
      planetaryRuler,
      exaltedPlanet,
      detrimentPlanet,
      fallPlanet,
      oppositeSign,
      associatedHouse,
      traditionalPlanetaryRuler = 'none',
    },
  } = useLoaderData<typeof loader>();

  const hasPlanetaryRuler = traditionalPlanetaryRuler !== 'none';

  const characteristics = [
    { Element: element },
    { Modality: modality },
    { ['Opposite Sign']: oppositeSign },
    { ['Associated House']: associatedHouse },
    ...(hasPlanetaryRuler
      ? [{ ['Traditional Ruler']: traditionalPlanetaryRuler }]
      : []),
    {
      [hasPlanetaryRuler ? 'Modern Ruler' : 'Planetary Ruler']: planetaryRuler,
    },
  ];

  const essentialDignities = [
    { ['Exalted Planet']: exaltedPlanet },
    { ['Detriment Planet']: detrimentPlanet },
    { ['Fall Planet']: fallPlanet },
  ];

  return (
    <CardContainer>
      <SignContainer>
        <h1>{title}</h1>
        <SignDatesText>{dates}</SignDatesText>
        <ImageContainer>
          <img src={imageSrc} alt={title} height='300px' />
        </ImageContainer>

        <p>{fullPageDescription}</p>
      </SignContainer>
      <SignContainer>
        <DetailArea>
          <h2> Characteristics </h2>
          {characteristics.map((characteristic) => {
            const [key, value] = Object.entries(characteristic)[0];
            return (
              <p key={key}>
                <b>{key}:</b> {value}
              </p>
            );
          })}
        </DetailArea>
        <DetailArea>
          <h2> Essential Dignities </h2>
          {essentialDignities.map((essentialDignity) => {
            const [key, value] = Object.entries(essentialDignity)[0];
            return (
              <p key={key}>
                <b>{key}:</b> {value}
              </p>
            );
          })}
        </DetailArea>
      </SignContainer>
    </CardContainer>
  );
};

export default Sign;
