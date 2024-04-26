import React from 'react';
import { Text, Rect, Group } from 'react-konva';

interface HouseThemeDescriptionProps {
  layoutIsVertical: boolean;
  x: number;
  y: number;
  radius: number;
  text?: {
    title: string;
    description: string;
    otherTopics: string;
    associatedSign: string;
  };
  containerWidth: number;
}

const HouseThemeDescription: React.FC<HouseThemeDescriptionProps> = ({
  layoutIsVertical,
  x,
  y,
  radius,
  text,
}) => {
  const textDescriptions = [
    {
      fontSize: 40,
      fontFamily: 'Shrikhand',
      x: x + radius + 20,
      y: y - 200,
      text: text?.title || '',
      align: 'center',
    },
    {
      fontSize: 20,
      fontFamily: 'Raleway',
      x: x + radius + 35,
      y: y - 100,
      text: text?.description || '',
      margin: 10,
      width: 500,
    },
    {
      fontSize: 20,
      fontFamily: 'Raleway',
      x: x + radius + 35,
      y: y,
      text: text?.otherTopics || '',
      margin: 10,
      width: 500,
    },
    {
      fontSize: 20,
      fontStyle: 'bold',
      fontFamily: 'Raleway',
      x: x + radius + 35,
      y: y + 60,
      text: text?.associatedSign
        ? `Associated Sign: ${text?.associatedSign || ''}`
        : '',
      margin: 10,
      width: 500,
    },
  ];

  return (
    <Group
      x={layoutIsVertical ? -620 : -5} // Horizontal position change
      y={layoutIsVertical ? 600 : 0} // Vertical stacking when needed
    >
      {textDescriptions.map((textDescription, i) => (
        <Text key={i} {...textDescription} />
      ))}
    </Group>
  );
};

export default HouseThemeDescription;
