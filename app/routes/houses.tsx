import React, { Suspense, lazy } from 'react';
import { Link, Outlet } from '@remix-run/react';
import { styled } from 'styled-components';
import PageHeader from '~/components/PageHeader';
import LoadingIndicator from '~/components/LoadingIndicator';
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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const LazyHousesWheel = lazy(() => {
  return Promise.all([
    import('~/components/HousesWheel.client'),
    delay(2000),
  ]).then(([moduleExports]) => moduleExports);
});

export const handle = {
  breadcrumbLink: () => <Link to='/houses'>Houses</Link>,
  breadcrumbText: () => 'Houses',
};

export default function Houses(props: HousesProps) {
  return (
    <>
      <PageHeader />
      <HousesContainer>
        <PageBreadcrumb />
        <Suspense fallback={<LoadingIndicator />}>
          <LazyHousesWheel />
        </Suspense>
      </HousesContainer>
    </>
  );
}
