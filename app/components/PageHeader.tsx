import React from 'react';
import { styled } from 'styled-components';

interface PageHeaderProps {}

const PageTitleContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  h1 {
    margin: 12px;
    line-height: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <PageTitleContainer>
      <center>
        <h1>
          🔮 Astrology <br />
          <span>&amp;</span> <br />
          {`<`}JavaScript{`/>`} <br />
          Series
        </h1>
      </center>
    </PageTitleContainer>
  );
};

export default PageHeader;
