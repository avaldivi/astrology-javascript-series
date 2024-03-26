import React, { useState } from 'react';
import { Link, Outlet } from '@remix-run/react';
import { styled } from 'styled-components';
import { PageBreadcrumb } from '~/components/PageBreadcrumb';

const SignsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  margin-top: 50px;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
`;

interface SignsIndexPageProps {}

export const handle = {
  breadcrumbLink: () => <Link to='/signs'>Signs</Link>,
  breadcrumbText: () => 'Signs',
};

const Signs = () => {
  return (
    <SignsContainer>
      <PageBreadcrumb />
      <Outlet />
    </SignsContainer>
  );
};

export default Signs;
