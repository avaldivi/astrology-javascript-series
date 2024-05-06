import { json } from '@remix-run/node';
import type { ActionFunctionArgs } from '@remix-run/node';
import { Link, Outlet, Form, useActionData } from '@remix-run/react';
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
  return (
    <>
      <PageHeader />
      <AspectsContainer>
        <PageBreadcrumb />
        <h1>Major Aspects</h1>
        <LgDetailCard items={MAJOR_ASPECTS} />
        <Outlet />
      </AspectsContainer>
    </>
  );
}

export function MyForm() {
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
  // for (let pair of formData.entries()) {
  //   console.log(pair[0] + ', ' + pair[1]);
  // }

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
