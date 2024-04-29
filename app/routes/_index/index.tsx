import type { MetaFunction } from '@vercel/remix';
import { styled } from 'styled-components';
import {
  sparkles,
  celestialDoses,
  Twitch as TwitchIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '~/images';
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
      line-height: 50px;
      letter-spacing: -3px;
    }
  }
`;

const SectionTitlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  margin-bottom: -22px;
`;

const SocialPlatformIcons = styled.div`
  display: flex;
  margin: 10px;

  img {
    margin-top: 5px;
    margin-right: 15px;
  }
`;

export const handle = {
  breadcrumb: 'Home',
};

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
                {`<`}JavaScript{`/>`} <br />
                Series
              </h1>
            </div>
            <img
              src={sparkles}
              height='50px'
              width='150px'
              alt='Sparkle divider between header and logo'
            />
            <h2>Weekly Livestream</h2>
            <div>📅 Every Wednesday</div>
            <div>🕛 12pm EST / 9am PST</div>
            <SocialPlatformIcons>
              <div>
                <a
                  href='https://www.twitch.tv/adriannavaldivia/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    width={20}
                    height={20}
                    src={TwitchIcon}
                    alt='Twitch Icon'
                  />
                </a>
              </div>
              <div>
                <a
                  href='https://www.x.com/driannavaldivia/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    width={20}
                    height={20}
                    src={TwitterIcon}
                    alt='Twitter Icon'
                  />
                </a>
              </div>
              <div>
                <a
                  href='https://www.linkedin.com/in/adriannavaldivia/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    width={20}
                    height={20}
                    src={LinkedInIcon}
                    alt='LinkedIn Icon'
                  />
                </a>
              </div>
            </SocialPlatformIcons>
            <>
              <SectionTitle>Presented by</SectionTitle>
              <img
                src={celestialDoses}
                height='100px'
                width='300px'
                alt='Celestial Doses logo'
              />
            </>
          </PageTitleContainer>
          <SectionTitlesContainer>
            {sectionAreas.map((section) => (
              <SectionAccessArea
                key={section.sectionTitle}
                buttonRotation={section.buttonRotation}
                sectionTitle={section.sectionTitle}
                hoverImages={section.hoverImages}
                path={section.path}
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
