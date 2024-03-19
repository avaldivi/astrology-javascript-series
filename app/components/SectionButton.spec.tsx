import { render, screen, waitFor } from '@testing-library/react';
import SectionButton from './SectionButton';

describe('SectionButton', () => {
  it('renders the section button', async () => {
    render(
      <SectionButton
        degreeRotation='0.25'
        sectionTitle='Astrology'
        isHovered={false}
      />
    );

    expect(screen.getByText('Astrology')).toBeInTheDocument();
  });

  it('renders hover state styles when isHovered is true', async () => {
    render(
      <SectionButton
        degreeRotation='0.25'
        sectionTitle='Astrology'
        isHovered={true}
      />
    );

    const button = screen.getByText('Astrology');
    const styles = window.getComputedStyle(button);

    expect(styles.backgroundColor).toBe('rgb(187, 158, 248)');
    expect(styles.border).toBe('2px solid black');
    expect(styles.boxShadow).toBe('2px 2px 2px 2px #888888');
  });
});
