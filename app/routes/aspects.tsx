import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const divineApiEndpoint = process.env.DIVINE_API_URL_V2;
  const authToken = process.env.DIVINE_API_TOKEN;
  const apiKey = process.env.DIVINE_API_KEY;

  // Using FormData to construct the body of the POST request
  const formData = new FormData();
  formData.append('api_key', apiKey);
  formData.append('full_name', 'Adrianna Valdivia');
  formData.append('day', '04');
  formData.append('month', '09');
  formData.append('year', '1993');
  formData.append('hour', '06');
  formData.append('min', '00');
  formData.append('sec', '00');
  formData.append('gender', 'female');
  formData.append('place', 'Passaic, NJ, USA');
  formData.append('lat', '40.8568');
  formData.append('lon', '-74.1285');
  formData.append('tzone', '-5.0');

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
};

export default function Aspects() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Aspects</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
