import { useRef } from 'react';
import { json, LoaderFunction } from '@remix-run/node';
import type { ActionFunctionArgs } from '@remix-run/node';
import {
  useLoaderData,
  Link,
  Outlet,
  Form,
  useActionData,
} from '@remix-run/react';
import { styled } from 'styled-components';
import PageHeader from '~/components/PageHeader';
import { PageBreadcrumb } from '~/components/PageBreadcrumb';
import { LgDetailCard } from '~/components/LgDetailCard';
import { MAJOR_ASPECTS } from '~/utils/aspects';

const AspectsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  margin-top: 50px;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
`;

const divineApiEndpoint = process.env.DIVINE_API_URL_V2;
const authToken = process.env.DIVINE_API_TOKEN;
const apiKey = process.env.DIVINE_API_KEY;

export const handle = {
  breadcrumbLink: () => <Link to='/aspects'>Aspects</Link>,
  breadcrumbText: () => 'Aspects',
};

export default function Aspects() {
  const actionData = useActionData();

  const MINOR_ASPECTS = [
    {
      title: 'Quincunx',
      imageSrc: '',
      description:
        'When two planets are 150 degrees apart, they are in quincunx. This aspect can create a sense of unease and discomfort, but it can also be a source of growth and learning.',
    },
    {
      title: 'Semi-Sextile',
      imageSrc: '',
      description:
        'When two planets are 30 degrees apart, they are in semi-sextile. This aspect is considered harmonious and can indicate opportunities for growth and development.',
    },
    {
      title: 'Semi-Square',
      imageSrc: '',
      description:
        'When two planets are 45 degrees apart, they are in semi-square. This aspect can create tension and challenges, but it can also be a source of motivation and growth.',
    },
    {
      title: 'Quintile',
      imageSrc: '',
      description:
        'When two planets are 72 degrees apart, they are in quintile. This aspect can indicate creativity and inspiration, and it can be a source of growth and development.',
    },
    {
      title: 'Biquintile',
      imageSrc: '',
      description:
        'When two planets are 144 degrees apart, they are in biquintile. This aspect can indicate creativity and inspiration, and it can be a source of growth and development.',
    },
    {
      title: 'Septile',
      imageSrc: '',
      description:
        'When two planets are 51.4286 degrees apart, they are in septile. This aspect can indicate creativity and inspiration, and it can be a source of growth and development.',
    },
  ];

  return (
    <>
      <PageHeader />
      <AspectsContainer>
        <PageBreadcrumb />
        <h1>Major Aspects</h1>
        <LgDetailCard items={MAJOR_ASPECTS} />
        <Outlet />
        <h1>What are my aspects?</h1>
        <MyForm />

        <h2>Data from API</h2>
        <pre>{JSON.stringify(actionData, null, 2)}</pre>
      </AspectsContainer>
    </>
  );
}

export function MyForm() {
  const actionData = useActionData<typeof action>();

  return (
    <Form method='post'>
      <label htmlFor='full_name'>Full Name:</label>
      <input
        type='text'
        id='full_name'
        name='full_name'
        defaultValue='Adrianna Valdivia'
      />

      <label htmlFor='day'>Day:</label>
      <input type='text' id='day' name='day' defaultValue='04' />

      <label htmlFor='month'>Month:</label>
      <input type='text' id='month' name='month' defaultValue='09' />

      <label htmlFor='year'>Year:</label>
      <input type='text' id='year' name='year' defaultValue='1993' />

      <label htmlFor='hour'>Hour:</label>
      <input type='text' id='hour' name='hour' defaultValue='06' />

      <label htmlFor='min'>Minute:</label>
      <input type='text' id='min' name='min' defaultValue='00' />

      <label htmlFor='sec'>Second:</label>
      <input type='text' id='sec' name='sec' defaultValue='00' />

      <label htmlFor='gender'>Gender:</label>
      <select id='gender' name='gender'>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        <option value='other'>Other</option>
      </select>

      <label htmlFor='place'>Place:</label>
      <input
        type='text'
        id='place'
        name='place'
        defaultValue='Passaic, NJ, USA'
      />

      <label htmlFor='lat'>Latitude:</label>
      <input type='text' id='lat' name='lat' defaultValue='40.8568' />

      <label htmlFor='lon'>Longitude:</label>
      <input type='text' id='lon' name='lon' defaultValue='-74.1285' />

      <label htmlFor='tzone'>Time Zone:</label>
      <input type='text' id='tzone' name='tzone' defaultValue='-5.0' />

      <button type='submit'>Submit</button>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  formData.append('api_key', apiKey as string);
  for (let pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }

  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: formData,
  };

  const response = await fetch(
    `${divineApiEndpoint}/aspect-table`,
    fetchOptions
  );

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    throw new Error('Failed to fetch data from API');
  }

  const data = await response.json();
  return json(data);
}
