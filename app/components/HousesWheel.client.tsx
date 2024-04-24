import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Stage, Layer, Wedge, Text, Rect, Group } from 'react-konva';
import { houseThemes } from '~/utils/houses';

interface HousesWheelProps {}

export default function HousesWheel(props: HousesWheelProps) {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth - 500,
    height: window.innerHeight,
  });
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [hoverIndex, setHoverIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [text, setText] = useState(
    'Hover over a part' || { title: '', description: '' }
  );
  const radius = 300;
  const x = 600;
  const y = 600;

  const houseDetails = (index: number) =>
    houseThemes.find((houseTheme) => houseTheme.id === index);

  const segments = Array.from({ length: 12 }).map((_, index) => ({
    angle: 30,
    rotation: 150 + 30 * -index,
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

  console.log('text', text);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current?.offsetWidth;
        const containerHeight = containerRef.current?.offsetHeight;
        const scaleWidth = containerWidth / dimensions.width;
        const scaleHeight = containerHeight / dimensions.height;
        const newScale =
          containerWidth < 600
            ? Math.min(scaleWidth, scaleHeight) * 2
            : scaleWidth;
        setScale(newScale);

        const offsetX = -290 * newScale; // Maintain the x offset
        const offsetY = -200 * newScale; // Maintain the y offset
        setPosition({ x: offsetX, y: offsetY });

        setContainerWidth(containerRef.current?.offsetWidth);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initial resize

    return () => window.removeEventListener('resize', updateSize);
  }, [dimensions]);

  const thresholdWidth = 600;

  const layoutIsVertical = containerWidth < thresholdWidth;

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    >
      <Stage
        // x={-290}
        // y={-200}
        x={position.x}
        y={position.y}
        width={dimensions.width}
        height={dimensions.height}
        scaleX={scale}
        scaleY={scale}
      >
        <Layer>
          <Group x={0} y={0}>
            <Rect fill='red' />
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
                  onMouseEnter={() => {
                    setHoverIndex(i);
                    if (clickedIndex === -1) {
                      setText(houseDetails(i + 1));
                    }
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(-1);
                    // setText('Hover over a part');
                  }}
                  onClick={() => {
                    setClickedIndex(i);
                    setText(houseDetails(i + 1));
                    if (clickedIndex !== i) {
                      setClickedIndex(i);
                    }
                    if (clickedIndex === i) {
                      setClickedIndex(-1);
                      setText('Hover or click over a part');
                    }
                  }}
                />
                <Text
                  rotation={30}
                  fontFamily='Raleway'
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
                    10
                  }
                  text={`${i + 1}th House`}
                />
              </>
            ))}
          </Group>

          <Group
            x={layoutIsVertical ? -620 : -5} // Horizontal position change
            y={layoutIsVertical ? 600 : 0} // Vertical stacking when needed
          >
            <Rect width={100} height={100} fill='blue' />
            <Text
              fontSize={40}
              fontFamily='Shrikhand'
              x={x + radius + 20}
              y={y - 200}
              width={450}
              text={text?.title || ''}
              align='center'
            />
            <Text
              fontSize={20}
              fontFamily='Raleway'
              x={x + radius + 35}
              y={y - 100}
              text={text?.description || ''}
              margin={10}
              width={500}
            />
            <Text
              fontSize={20}
              fontFamily='Raleway'
              x={x + radius + 35}
              y={y}
              text={text?.otherTopics || ''}
              margin={10}
              width={500}
            />
            {text?.associatedSign && (
              <Text
                fontSize={20}
                fontFamily='Raleway'
                x={x + radius + 35}
                y={y + 60}
                text={`Associated Sign: ${text?.associatedSign || ''}`}
                margin={10}
                width={500}
                fontStyle='bold'
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}
