import {
  SextileAspect,
  SextileSymbol,
  SquareAspect,
  SquareSymbol,
  TrineAspect,
  TrineSymbol,
  OppositionAspect,
  OppositionSymbol,
  ConjunctionAspect,
  ConjunctionSymbol,
} from '~/images';

export const findAspect = (aspectTitle?: string) => {
  return MAJOR_ASPECTS.find(
    (aspect) => aspect.title.toLowerCase() === aspectTitle
  );
};

export const MAJOR_ASPECTS = [
  {
    title: 'Conjunction',
    symbolImgSrc: ConjunctionSymbol,
    aspectImgSrc: ConjunctionAspect,
    description: [
      'When two planets are in the same sign and degree of the zodiac, they are in conjunction. This is the most powerful aspect, and it can be either positive or negative depending on the planets involved.',
      'Conjunctions can create a sense of unity and intensity, and they can indicate a merging of energies.',
    ],
    orbLimit: 10,
    examples: [
      'Sun conjunct Moon can help you integrate your conscious and unconscious self.',
      'Mars conjunct Venus can create passion and desire in relationships.',
    ],
  },
  {
    title: 'Opposition',
    symbolImgSrc: OppositionSymbol,
    aspectImgSrc: OppositionAspect,
    description: [
      'When two planets are 180 degrees apart, they are in opposition. This aspect can create tension and conflict, but it can also lead to growth and transformation.',
      'Opposition usually occurs between planets in opposite signs, like Virgo and Pisces, or Aries and Libra.',
    ],
    orbLimit: 8,
    examples: [
      'Sun opposition Moon can create inner conflict but also require balance and integration between two different parts of yourself.',
      'Mars opposition Venus can can create tension in relationships but also help you find balance between passion and harmony.',
    ],
  },
  {
    title: 'Trine',
    symbolImgSrc: TrineSymbol,
    aspectImgSrc: TrineAspect,
    description: [
      'When two planets are 120 degrees apart, they are in trine. This aspect is considered harmonious and can indicate ease and flow in the areas of life ruled by the planets involved.',
      'This aspect can occur with elements of the same element (fire, earth, air, water).',
    ],
    orbLimit: 6,
    examples: [
      'Sun trine Moon can create emotional harmony and balance between your conscious and unconscious self without much effort.',
      'Mars trine Venus can create passion and desire in towards your relationships without much effort.',
    ],
  },
  {
    title: 'Square',
    symbolImgSrc: SquareSymbol,
    aspectImgSrc: SquareAspect,
    description: [
      'When two planets are 90 degrees apart, they are in square. This aspect can create tension and challenges, but it can also be a source of motivation and growth.',
      'Squares usually occur between planets in signs of the same modality (cardinal, fixed, mutable). For example, Aries and Capricorn, or Taurus and Leo.',
    ],
    orbLimit: 6,
    examples: [
      'Sun square Moon can create inner conflict and challenges in finding emotional balance and may require more effort to be addressed.',
      'Mars square Venus can create tension in relationships and may require more effort to find balance between passion and harmony.',
    ],
  },
  {
    title: 'Sextile',
    symbolImgSrc: SextileSymbol,
    aspectImgSrc: SextileAspect,
    description: [
      'When two planets are 60 degrees apart, they are in sextile. This aspect is considered harmonious and can indicate opportunities for growth and development.',
      'This aspect can occur with elements of air and fire or earth and water. For example Aries and Gemini, or Taurus and Cancer',
    ],
    orbLimit: 4,
    examples: [
      'Moon sextile Mars can create emotional harmony between your needs and desires.',
      'Venus sextile Sun can create harmony and balance between your relationships and your sense of self.',
    ],
  },
];
