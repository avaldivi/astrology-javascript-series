import type { MetaFunction } from '@vercel/remix';
import { styled, css } from 'styled-components';
import signs from '../../images/signs.png';
import jupiter from '../../images/jupiter-planet.png';
import jupiterSymbol from '../../images/jupiter-symbol.png';
import houses from '../../images/houses.png';
import sextile from '../../images/sextile-symbol.png';
import opposition from '../../images/opposition-symbol.png';
import ascendant from '../../images/ascendant-midpoint.png';
import decendant from '../../images/descendant-midpoint.png';
import midheaven from '../../images/midheaven-midpoint.png';
import imum from '../../images/imum-coeli-midpoint.png';
import SeriesSectionCard from '~/components/SeriesSectionCard';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const SectionTitlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

const ImageAndSectionTitleContainer = styled.div`
  position: relative;
`;

const ImageHover = styled.img<{
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  height?: string;
  width?: string;
}>`
  position: absolute;
  ${({ top, left, height, width, bottom, right }) => `
    ${top && `top: ${top}`};
    ${bottom && `bottom: ${bottom}`};
    ${left && `left: ${left}`};
    ${right && `right: ${right}`};
    height: ${height ? `${height}` : '150px'};
    width: ${width ? `${width}` : '150px'};
  `}
`;

const Header = styled.h1<{
  $isError?: boolean;
}>`
  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.primary : theme.colors.secondary};
`;

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Header $isError={true}>Welcome</Header>
      <HomeWrapper>
        <SectionTitlesContainer>
          <h1>Astrology & Javascript Series</h1>
        </SectionTitlesContainer>
        <SectionTitlesContainer>
          <ImageAndSectionTitleContainer>
            <SeriesSectionCard degreeRotation='-0.01' sectionTitle='Signs' />
            <ImageHover
              top='3px'
              left='113px'
              src={signs}
              alt='Twelve zodiac signs in a cirular fashion'
            />
          </ImageAndSectionTitleContainer>
          <ImageAndSectionTitleContainer>
            <SeriesSectionCard degreeRotation='0.02' sectionTitle='Planets' />
            <ImageHover
              src={jupiter}
              top='-15px'
              left='-10px'
              alt='Jupiter planet'
            />
            <ImageHover
              src={jupiterSymbol}
              right='40px'
              top='80px'
              height='70px'
              width='70px'
              alt='Jupiter symbol'
            />
          </ImageAndSectionTitleContainer>
          <ImageAndSectionTitleContainer>
            <SeriesSectionCard degreeRotation='0.02' sectionTitle='Houses' />
            <ImageHover
              src={houses}
              top='20px'
              left='50px'
              height='95px'
              width='95px'
              alt='Houses in natal chart'
            />
          </ImageAndSectionTitleContainer>
          <ImageAndSectionTitleContainer>
            <SeriesSectionCard degreeRotation='0.00' sectionTitle='Aspects' />
            <ImageHover
              src={sextile}
              top='45px'
              left='45px'
              height='60px'
              width='60px'
              alt='Houses in natal chart'
            />
            <ImageHover
              src={opposition}
              bottom='45px'
              right='45px'
              height='60px'
              width='60px'
              alt='Houses in natal chart'
            />
          </ImageAndSectionTitleContainer>

          <ImageAndSectionTitleContainer>
            <SeriesSectionCard
              degreeRotation='-0.01'
              sectionTitle='Sky points'
            />
            <ImageHover
              src={ascendant}
              top='60px'
              left='20px'
              height='60px'
              width='60px'
              alt='Ascendant'
            />
            <ImageHover
              src={midheaven}
              bottom='90px'
              left='150px'
              height='60px'
              width='60px'
              alt='Midheaven symbol'
            />
            <ImageHover
              src={decendant}
              bottom='55px'
              right='20px'
              height='60px'
              width='60px'
              alt='Descendant symbol'
            />
            <ImageHover
              src={imum}
              bottom='5px'
              left='150px'
              height='60px'
              width='60px'
              alt='Imum coeli symbol'
            />
          </ImageAndSectionTitleContainer>
          <SeriesSectionCard degreeRotation='0.01' sectionTitle='Natal Chart' />
        </SectionTitlesContainer>
      </HomeWrapper>

      <ul>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/blog'
            rel='noreferrer'
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/jokes'
            rel='noreferrer'
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
