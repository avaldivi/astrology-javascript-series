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
import { devices } from '../../utils/constants';
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
  justify-content: space-evenly;
`;

const PageTitleContainer = styled.div`
  text-align: center;
  max-width: 500px;
  display: flex;
  justify-content: center;
  line-height: 70px;

  h1 {
    font-family: 'Shrikhand', serif;
    font-size: 50px;

    @media only screen and ${devices.md} {
      font-size: 75px;
    }
  }
`;

const SectionTitlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  justify-content: center;
`;

const ImageAndSectionTitleContainer = styled.div`
  position: relative;
  margin: 10px 0px;
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

const FooterArea = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
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
        <PageTitleContainer>
          <h1>
            🔮 Astrology <br />
            <span>&amp;</span>
            <br /> {`<`}Javascript{`/>`} Series
          </h1>
        </PageTitleContainer>
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
      <FooterArea>
        Made with ❤️ by <b>Celestial Doses</b>
      </FooterArea>
    </div>
  );
}
