import React from 'react';
import styles from './SeriesSectionCard.module.css';

interface SeriesSectionCardProps {}

const SeriesSectionCard = () => {
  const inlineStyle: React.CSSProperties = {
    transform: 'rotate(-0.05turn)',
  };

  return (
    <div className={styles.seriesCard}>
      <div className={styles.seriesTitleArea} style={inlineStyle}>
        Signs
      </div>
      <div
        className={styles.seriesTitleArea}
        style={{
          transform: 'rotate(0.03turn)',
        }}
      >
        Planets
      </div>
      <div
        className={styles.seriesTitleArea}
        style={{
          transform: 'rotate(-0.053turn)',
        }}
      >
        Houses
      </div>
      <div className={styles.seriesTitleArea}>Aspects</div>
      <div className={styles.seriesTitleArea}>Midpoints</div>
      <div className={styles.seriesTitleArea}>Natal Chart</div>
    </div>
  );
};

export default SeriesSectionCard;
