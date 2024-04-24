import React from 'react';
import { Link, Outlet } from '@remix-run/react';
import { styled } from 'styled-components';
import { PageBreadcrumb } from '~/components/PageBreadcrumb';

interface planetsProps {}

const PlanetsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  margin-top: 50px;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
`;

export const handle = {
  breadcrumbLink: () => <Link to='/planets'>Planets</Link>,
  breadcrumbText: () => 'Planets',
};

const Planets: React.FC<planetsProps> = () => {
  return (
    <PlanetsContainer>
      <PageBreadcrumb />
      <Outlet />
    </PlanetsContainer>
  );
};

export default Planets;
