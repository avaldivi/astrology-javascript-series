import {
  signs,
  jupiter,
  jupiterSymbol,
  houses,
  sextile,
  opposition,
  ascendant,
  decendant,
  midheaven,
  imum,
  natalChart,
} from '~/images';

const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
};

export const sectionAreas = [
  {
    sectionTitle: 'Signs',
    buttonRotation: '-0.01',
    hoverImages: [
      {
        imagePosition: { top: '3px', left: '113px' },
        imageSrc: signs,
        imageAltText: 'Twelve zodiac signs in a circular fashion',
      },
    ],
  },
  {
    sectionTitle: 'Planets',
    buttonRotation: '0.02',
    hoverImages: [
      {
        imagePosition: { top: '-15px', left: '-10px' },
        imageSrc: jupiter,
        imageAltText: 'Jupiter as a planet',
      },
      {
        imagePosition: {
          top: '80px',
          right: '40px',
          height: '70px',
          width: '70px',
        },
        imageSrc: jupiterSymbol,
        imageAltText: 'Jupiter as a symbol',
      },
    ],
  },
  {
    sectionTitle: 'Houses',
    buttonRotation: '0.02',
    hoverImages: [
      {
        imagePosition: {
          top: '20px',
          left: '50px',
          height: '95px',
          width: '95px',
        },
        imageSrc: houses,
        imageAltText: 'House placements in natal chart',
      },
    ],
  },
  {
    sectionTitle: 'Aspects',
    buttonRotation: '0.00',
    hoverImages: [
      {
        imagePosition: {
          top: '45px',
          left: '45px',
          height: '60px',
          width: '60px',
        },
        imageSrc: sextile,
        imageAltText: 'Sextile aspect symbol',
      },
      {
        imagePosition: {
          bottom: '45px',
          right: '45px',
          height: '60px',
          width: '60px',
        },
        imageSrc: opposition,
        imageAltText: 'Opposition aspect symbol',
      },
    ],
  },
  {
    sectionTitle: 'Sky Points',
    buttonRotation: '-0.01',
    hoverImages: [
      {
        imagePosition: {
          top: '60px',
          left: '20px',
          height: '60px',
          width: '60px',
        },
        imageSrc: ascendant,
        imageAltText: 'Ascendant symbol',
      },
      {
        imagePosition: {
          bottom: '90px',
          left: '150px',
          height: '60px',
          width: '60px',
        },
        imageSrc: midheaven,
        imageAltText: 'Midheaven symbol',
      },
      {
        imagePosition: {
          bottom: '55px',
          right: '20px',
          height: '60px',
          width: '60px',
        },
        imageSrc: decendant,
        imageAltText: 'Descendant symbol',
      },
      {
        imagePosition: {
          bottom: '5px',
          left: '150px',
          height: '60px',
          width: '60px',
        },
        imageSrc: imum,
        imageAltText: 'Imum Coeli symbol',
      },
    ],
  },
  {
    sectionTitle: 'Natal Chart',
    buttonRotation: '0.01',
    hoverImages: [
      {
        imagePosition: {
          top: '50px',
          right: '20px',
          height: '100px',
          width: '100px',
        },
        imageSrc: natalChart,
        imageAltText: 'Natal chart with aspects',
      },
    ],
  },
];
