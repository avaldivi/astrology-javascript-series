import React, { Suspense, lazy } from 'react';
import { Link, Outlet } from '@remix-run/react';
import { styled } from 'styled-components';
import { PageBreadcrumb } from '~/components/PageBreadcrumb';

interface HousesProps {}

const HousesContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  margin-top: 50px;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  min-height: 100vh;
`;

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

const LazyHousesWheel = lazy(() => import('~/components/HousesWheel.client'));

export const handle = {
  breadcrumbLink: () => <Link to='/houses'>Houses</Link>,
  breadcrumbText: () => 'Houses',
};

export default function Houses(props: HousesProps) {
  return (
    <>
      <PageTitleContainer>
        <center>
          <h1>
            🔮 Astrology <br />
            <span>&amp;</span> <br />
            {`<`}Javascript{`/>`} <br />
            Series
          </h1>
        </center>
      </PageTitleContainer>
      <HousesContainer>
        <PageBreadcrumb />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyHousesWheel />
        </Suspense>
      </HousesContainer>
    </>
  );
}
