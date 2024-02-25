import type { MetaFunction } from '@vercel/remix';
import { styled } from 'styled-components';
import SeriesSectionCard from '~/components/SeriesSectionCard';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const Header = styled.h1<{
  $isError?: boolean;
}>`
  color: ${({ $isError, theme }) =>
    $isError ? theme.colors.primary : theme.colors.secondary};
`;

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Header $isError={true}>Welcome</Header>
      <SeriesSectionCard />
      <ul>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/blog'
            rel='noreferrer'
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://remix.run/tutorials/jokes'
            rel='noreferrer'
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
