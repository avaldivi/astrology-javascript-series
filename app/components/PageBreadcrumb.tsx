import React from 'react';
import { Link } from '@remix-run/react';
import { styled } from 'styled-components';

interface PageBreadcrumbProps {
  items: { text: string; to: string }[];
}

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 30px;

  a {
    color: black;
    text-decoration: none;
    font-weight: 900;
    font-family: 'Lucida Console', 'Courier New', monospace;
		margin-right: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label='breadcrumb'>
      <StyledUl className='breadcrumb'>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === items.length - 1 ? 'active' : ''
            }`}
          >
            {index < items.length - 1 ? (
              <Link to={item.to}>{item.text}</Link>
            ) : (
              ` / ${item.text}`
            )}
          </li>
        ))}
      </StyledUl>
    </nav>
  );
};
