import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Analytics } from '@vercel/analytics/react';
import type { LinksFunction } from '@vercel/remix';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
  
  body {
    background-color: #FFF1E1;
  }

  h1, h2 {
    font-family: "Shrikhand", serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='twitter:card'
          content='Astrology & Javascript Series focuses on learning foundational blocks of astrology while using tools within the Javascript ecosystem.'
        />
        <meta name='twitter:site' content='@driannavaldivi' />
        <meta name='twitter:creator' content='@driannavaldivi' />
        <meta
          property='og:url'
          content='https://astrology-javascript-series.vercel.app/'
        />
        <meta property='og:title' content='Astrology & Javascript Series' />
        <meta
          property='og:description'
          content='Astrology & Javascript Series focuses on learning foundational blocks of astrology while using tools within the Javascript ecosystem.'
        />
        <meta
          property='og:image'
          content={
            'https://i.ibb.co/sbG30gZ/astrology-javascript-series-content-image.png'
          }
        />
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <ThemeProvider
          theme={{
            colors: {
              primary: '#DCCCFD',
              secondary: '#FFD200',
              tertiary: '#0000ff',
            },
          }}
        >
          <GlobalStyle />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
