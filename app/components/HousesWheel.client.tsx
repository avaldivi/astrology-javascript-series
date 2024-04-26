import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Stage, Layer, Wedge, Text, Rect, Group } from 'react-konva';
import HouseThemeDescription from './HouseThemeDescription.client';
import { houseThemes, housePositionTitle } from '~/utils/houses';

interface HousesWheelProps {}

interface HouseThemeDetails {
  title: string;
  description: string;
  otherTopics: string;
  associatedSign: string;
}

export default function HousesWheel(props: HousesWheelProps) {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth] = useState(window.innerWidth);
  const [dimensions] = useState({
    width: containerWidth < 600 ? 380 : window.innerWidth - 500,
    height: window.innerHeight,
  });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [hoverIndex, setHoverIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [text, setText] = useState<HouseThemeDetails | undefined>({
    title: '',
    description: '',
    otherTopics: '',
    associatedSign: '',
  });
  const radius = 300;
  const x = 600;
  const y = 600;

  const findHouseThemeDetails = (
    index: number
  ): HouseThemeDetails | undefined =>
    houseThemes.find((houseTheme) => houseTheme.id === index);

  const segments = Array.from({ length: 12 }).map((_, index) => ({
    angle: 30,
    rotation: 160 + 30 * -index,
  }));

  const returnFillColor = (i: number) => {
    if (clickedIndex === i) return theme.colors.secondary;
    if (
      (clickedIndex !== -1 && hoverIndex === i) ||
      (clickedIndex === -1 && hoverIndex === i)
    )
      return theme.colors.tertiary;
    return theme.colors.primary;
  };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;

        const scaleWidth = containerWidth / dimensions.width;
        const scaleHeight = containerHeight / dimensions.height;
        const additionalScaleFactor = containerWidth < 600 ? 0.63 : 1.4; // Scale down more if width < 600px

        const newScale =
          containerWidth < 600
            ? Math.min(scaleWidth, scaleHeight) * additionalScaleFactor
            : scaleWidth;

        setScale(newScale);

        const offsetX = -290 * newScale;
        const offsetY = -200 * newScale;
        setPosition({ x: offsetX, y: offsetY });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [dimensions]);

  const onHandleHoverOrTap = (i: number) => {
    setHoverIndex(i);
    if (clickedIndex === -1) {
      setText(findHouseThemeDetails(i + 1));
    }
  };

  const onHandleClick = (i: number) => {
    if (clickedIndex !== i) {
      setClickedIndex(i);
      setText(findHouseThemeDetails(i + 1));
    } else {
      setClickedIndex(-1);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      <Stage
        x={position.x}
        y={position.y}
        width={dimensions.width}
        height={dimensions.height}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          <Group x={0} y={0}>
            {segments.map((segment, i) => (
              <>
                <Wedge
                  key={i}
                  x={x}
                  y={y}
                  radius={radius}
                  angle={segment.angle}
                  rotation={segment.rotation}
                  stroke='black'
                  fill={returnFillColor(i)}
                  onMouseEnter={() => onHandleHoverOrTap(i)}
                  onTouchStart={() => onHandleHoverOrTap(i)}
                  onMouseLeave={() => {
                    setHoverIndex(-1);
                  }}
                  onClick={() => onHandleClick(i)}
                  onTouchEnd={() => onHandleClick(i)}
                />
                <Text
                  rotation={30}
                  fontFamily='Raleway'
                  fontStyle={clickedIndex === i ? 'bold' : 'normal'}
                  x={
                    x +
                    (radius / 2) *
                      Math.cos(
                        (segment.rotation + segment.angle / 2) * (Math.PI / 180)
                      ) -
                    20
                  }
                  y={
                    y +
                    (radius / 2) *
                      Math.sin(
                        (segment.rotation + segment.angle / 2) * (Math.PI / 180)
                      ) -
                    20
                  }
                  text={housePositionTitle(i + 1)}
                />
              </>
            ))}
          </Group>

          <HouseThemeDescription
            layoutIsVertical={containerWidth < 600}
            text={text}
            containerWidth={containerWidth}
            x={x}
            y={y}
            radius={radius}
          />
        </Layer>
      </Stage>
    </div>
  );
}
