import {
  Sun,
  Moon,
  Mercury,
  Venus,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Pluto,
} from '~/images';

export const findPlanetByTitle = (title?: string) =>
  planets.filter((planet) => planet.title.toLowerCase() === title);

export const planets = [
  {
    title: 'Sun',
    imageSrc: Sun,
    associatedSigns: ['Leo'],
    description: 'Life, vitality, individuality, ego, self-expression',
    houses: ['Fifth'],
    fullPageDescription:
      'The Sun represents the core of who we are. It is our ego, our identity, and our sense of self. The Sun is the center of our solar system, and in astrology, it is the center of our natal chart. The Sun represents our vitality, our life force, and our creative energy. It is the source of our power and our strength. The Sun is associated with the sign of Leo, which is known for its confidence and charisma. Like the Sun, Leo is bold and dramatic, with a strong sense of self and a natural leadership ability. The Sun is the ruler of Leo, and it is exalted in Aries.',
    houseDescription:
      'The Sun is also associated with the fifth house, which is the house of creativity, self-expression, and romance. When the Sun is prominent in our chart, we are likely to be confident, charismatic, and creative. We are likely to have a strong sense of self and a natural leadership ability.',
  },
  {
    title: 'Moon',
    imageSrc: Moon,
    associatedSigns: ['Cancer'],
    houses: ['Fourth'],
    description: 'Emotions, moods, feelings, sensitivity, instincts',
    fullPageDescription:
      'The Moon represents our emotions, our moods, and our feelings. It is our inner world, our subconscious, and our intuition. The Moon is the ruler of Cancer, which is known for its emotional depth and nurturing nature. Like the Moon, Cancer is protective and caring, with a strong intuition and a deep connection to family and home. The Moon is exalted in Taurus, and it is in its fall in Scorpio.',
    houseDescription:
      'The Moon is also associated with the fourth house, which is the house of home, family, and roots. When the Moon is prominent in our chart, we are likely to be emotional, sensitive, and intuitive. We are likely to be moody and nurturing, with a deep connection to our family and home. We are likely to be protective and caring, with a strong sense of our own emotions and feelings.',
  },
  {
    title: 'Mercury',
    imageSrc: Mercury,
    associatedSigns: ['Gemini', 'Virgo'],
    houses: ['Third', 'Sixth'],
    description: 'Communication, intellect, thought, language, reason',
    fullPageDescription:
      'Mercury represents our communication, our intellect, and our thought process. It is our ability to think, to reason, and to analyze. Mercury is the ruler of Gemini and Virgo, which are known for their communicative and intellectual nature. Like Mercury, Gemini is versatile and adaptable, with a love of learning and sharing information. Virgo is practical and reliable, with a strong connection to the material world. Mercury is exalted in Virgo, and it is in its fall in Pisces.',
    houseDescription:
      'Mercury is also associated with the third house, which is the house of communication, learning, and siblings. When Mercury is prominent in our chart, we are likely to be communicative, intellectual, and adaptable. We are likely to be curious and quick-witted, with a love of learning and sharing information. We are likely to be practical and reliable, with a strong connection to the material world.',
  },
  {
    title: 'Venus',
    imageSrc: Venus,
    associatedSigns: ['Libra', 'Taurus'],
    houses: ['Second', 'Seventh'],
    description: 'Love, beauty, pleasure, harmony, attraction',
    fullPageDescription:
      'Venus represents love, beauty, and pleasure. It is our ability to attract and to be attracted to others. Venus is the ruler of Libra and Taurus, which are known for their love of beauty and harmony. Like Venus, Libra is diplomatic and charming, with a love of balance and peace. Taurus is sensual and enjoys the finer things in life. Venus is exalted in Pisces, and it is in its fall in Virgo.',
    houseDescription:
      'Venus is also associated with the second house, which is the house of money, possessions, and values. When Venus is prominent in our chart, we are likely to be loving, charming, and attractive. We are likely to have a love of beauty and harmony, and a desire for balance and peace. We are likely to be sensual and enjoy the finer things in life.',
  },
  {
    title: 'Mars',
    imageSrc: Mars,
    associatedSigns: ['Aries', 'Scorpio'],
    houses: ['First'],
    description: 'Energy, action, desire, aggression, courage',
    fullPageDescription:
      'Mars represents our energy, our drive, and our ambition. It is our ability to take action, to pursue our desires, and to assert ourselves. Mars is the ruler of Aries and Scorpio, which are known for their passion and intensity. Like Mars, Aries is bold and assertive, with a strong desire to take action and to lead. Scorpio is powerful and transformative, with a deep connection to the darker aspects of life. Mars is exalted in Capricorn, and it is in its fall in Cancer.',
    houseDescription:
      'Mars is also associated with the first house, which is the house of self, identity, and new beginnings. When Mars is prominent in our chart, we are likely to be energetic, assertive, and courageous. We are likely to have a strong desire to take action and to pursue our goals. We are likely to be passionate and intense, with a deep connection to our own power and strength.',
  },
  {
    title: 'Jupiter',
    imageSrc: Jupiter,
    associatedSigns: ['Sagittarius', 'Pisces'],
    houses: ['Ninth'],
    description: 'Expansion, growth, abundance, optimism, wisdom',
    fullPageDescription:
      'Jupiter represents expansion, growth, and abundance. It is our ability to see the big picture, to think optimistically, and to have faith in the future. Jupiter is the ruler of Sagittarius and Pisces, which are known for their wisdom and spirituality. Like Jupiter, Sagittarius is adventurous and optimistic, with a love of learning and exploring. Pisces is compassionate and intuitive, with a deep connection to the spiritual world. Jupiter is exalted in Cancer, and it is in its fall in Capricorn.',
    houseDescription:
      ' Jupiter is also associated with the ninth house, which is the house of travel, higher education, and philosophy. When Jupiter is prominent in our chart, we are likely to be expansive, optimistic, and wise. We are likely to have a love of learning and exploring, and a desire to see the big picture. We are likely to be compassionate and intuitive, with a deep connection to the spiritual world.',
  },
  {
    title: 'Saturn',
    imageSrc: Saturn,
    associatedSigns: ['Capricorn', 'Aquarius'],
    houses: ['Tenth'],
    description:
      'Limitation, restriction, discipline, responsibility, maturity',
    fullPageDescription:
      'Saturn represents limitation, restriction, and discipline. It is our ability to set boundaries, to take responsibility, and to work hard. Saturn is the ruler of Capricorn and Aquarius, which are known for their ambition and independence. Like Saturn, Capricorn is practical and ambitious, with a strong sense of responsibility and a desire for success. Aquarius is innovative and rebellious, with a love of freedom and originality. Saturn is exalted in Libra, and it is in its fall in Aries.',
    houseDescription:
      'Saturn is also associated with the tenth house, which is the house of career, reputation, and public life. When Saturn is prominent in our chart, we are likely to be disciplined, responsible, and hardworking. We are likely to have a strong sense of ambition and a desire for success. We are likely to be practical and independent, with a love of freedom and originality.',
  },
  {
    title: 'Uranus',
    imageSrc: Uranus,
    associatedSigns: ['Aquarius'],
    houses: ['Eleventh'],
    description: 'Innovation, rebellion, freedom, originality, eccentricity',
    fullPageDescription:
      'Uranus represents innovation, rebellion, and freedom. It is our ability to think outside the box, to break free from tradition, and to embrace change. Uranus is the ruler of Aquarius, which is known for its independence and originality. Like Uranus, Aquarius is innovative and rebellious, with a love of freedom and equality. Uranus is exalted in Scorpio, and it is in its fall in Taurus.',
    houseDescription:
      'Uranus is also associated with the eleventh house, which is the house of friends, groups, and social causes. When Uranus is prominent in our chart, we are likely to be innovative, rebellious, and independent. We are likely to have a love of freedom and equality, and a desire to break free from tradition. We are likely to be eccentric and original, with a strong sense of our own uniqueness.',
  },
  {
    title: 'Neptune',
    imageSrc: Neptune,
    associatedSigns: ['Pisces'],
    houses: ['Twelfth'],
    description:
      'Dreams, illusions, spirituality, psychic abilities, compassion',
    fullPageDescription:
      'Neptune represents dreams, illusions, and spirituality. It is our ability to connect with the divine, to tap into our intuition, and to experience the mystical. Neptune is the ruler of Pisces, which is known for its compassion and creativity. Like Neptune, Pisces is sensitive and intuitive, with a deep connection to the spiritual world. Neptune is exalted in Cancer, and it is in its fall in Capricorn.',
    houseDescription:
      'Neptune is also associated with the twelfth house, which is the house of spirituality, dreams, and the subconscious. When Neptune is prominent in our chart, we are likely to be dreamy, intuitive, and compassionate. We are likely to have a deep connection to the spiritual world, and a desire to tap into our intuition. We are likely to be creative and sensitive, with a strong sense of empathy and compassion.',
  },
  {
    title: 'Pluto',
    imageSrc: Pluto,
    associatedSigns: ['Scorpio'],
    houses: ['Eighth'],
    description: 'Transformation, power, regeneration, death, rebirth',
    fullPageDescription:
      'Pluto represents transformation, power, and regeneration. It is our ability to let go of the old and to embrace the new, to face our fears and to grow. Pluto is the ruler of Scorpio, which is known for its intensity and depth. Like Pluto, Scorpio is powerful and transformative, with a deep connection to the darker aspects of life.',
    houseDescription:
      'Pluto is also associated with the eighth house, which is the house of death, rebirth, and transformation. When Pluto is prominent in our chart, we are likely to be intense, powerful, and transformative. We are likely to have a deep connection to the darker aspects of life, and a desire to face our fears and to grow. We are likely to be strong and resilient, with a deep sense of our own power and strength.',
  },
];
