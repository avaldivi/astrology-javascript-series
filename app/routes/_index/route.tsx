import type { MetaFunction } from '@vercel/remix';
import { styled } from 'styled-components';
import { sparkles, celestialDoses } from '~/images';
import SectionAccessArea from '~/components/SectionAccessArea';
import { devices, sectionAreas } from '../../utils/constants';

export const meta: MetaFunction = () => {
  return [
    { title: 'Astrology & Javascript Series' },
    {
      name: 'Project playground to learn the foundational blocks of astrology using Javascript Ecosystem tools',
      content:
        'Welcome to the Astrology & Javascript Series presented by Celestial Doses',
    },
  ];
};

const FooterArea = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
`;

const Header = styled.h1`
  font-family: 'Shrikhand', serif;
  font-size: 40px;
  text-align: center;
  margin: 0px;
  color: ${({ theme }) =>
    theme.colors.secondary ? theme.colors.secondary : 'black'};
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and ${devices.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
`;

const MainSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const PageTitleContainer = styled.div`
  text-align: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;

  h1 {
    font-family: 'Shrikhand', serif;
    margin: 12px;
    line-height: 25px;

    @media only screen and ${devices.md} {
      font-size: 75px;
      line-height: 55px;
    }
  }
`;

const SectionTitlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  justify-content: center;
`;

export default function Index() {
  return (
    <>
      <Header>Welcome!</Header>
      <PageWrapper>
        <MainSectionWrapper>
          <PageTitleContainer>
            <div>
              <h1>
                🔮 Astrology <br />
                <span>&amp;</span> <br />
                {`<`}Javascript{`/>`} <br />
                Series
              </h1>
            </div>
            <img
              src={sparkles}
              height='50px'
              width='150px'
              alt='Sparkle divider between header and logo'
            />
            <img
              src={celestialDoses}
              height='100px'
              width='300px'
              alt='Celestial Doses logo'
            />
          </PageTitleContainer>
          <SectionTitlesContainer>
            {sectionAreas.map((section) => (
              <SectionAccessArea
                key={section.sectionTitle}
                buttonRotation={section.buttonRotation}
                sectionTitle={section.sectionTitle}
                hoverImages={section.hoverImages}
              />
            ))}
          </SectionTitlesContainer>
        </MainSectionWrapper>
      </PageWrapper>
      <FooterArea>
        Made with ❤️ by <b>Celestial Doses</b>
      </FooterArea>
    </>
  );
}
