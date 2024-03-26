import React from 'react';
import { Link, useMatches } from '@remix-run/react';
import { styled } from 'styled-components';

export interface BreadcrumbArgs {
  id?: string;
  params: { sign?: string };
  pathname: string;
  data?: any;
  handle: {
    breadcrumbLink: (match: BreadcrumbArgs) => any;
    breadcrumbText: (match: BreadcrumbArgs) => string;
  };
}

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 30px;
  text-transform: capitalize;

  a {
    color: black;
    text-decoration: none;
    font-weight: 900;
    font-family: 'Lucida Console', 'Courier New', monospace;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BreadcrumbSeparator = styled.span`
  color: black;
  margin: 0 25px;
`;

export const PageBreadcrumb = () => {
  const matches = useMatches() as BreadcrumbArgs[];
  const dynamicBreadcrumbRoutes = matches.filter(
    (match) =>
      match.handle &&
      (match.handle.breadcrumbLink || match.handle?.breadcrumbText)
  );

  const homeBreadcrumb = [
    {
      pathname: '/',
      handle: {
        breadcrumbLink: () => <Link to='/'>Home</Link>,
        breadcrumbText: () => 'Home',
      },
      params: {},
    },
  ];

  const breadcrumbRoutes = [...homeBreadcrumb, ...dynamicBreadcrumbRoutes];

  return (
    <nav aria-label='breadcrumb'>
      <StyledUl className='breadcrumb'>
        {breadcrumbRoutes.map((match, index) =>
          index === breadcrumbRoutes.length - 1 ? (
            <li key={index}>{match.handle.breadcrumbText(match)}</li>
          ) : (
            <>
              <li key={index}>{match.handle.breadcrumbLink(match)}</li>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
            </>
          )
        )}
      </StyledUl>
    </nav>
  );
};
