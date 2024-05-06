import { useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import { findAspect } from '~/utils/aspects';
import { BreadcrumbArgs } from '~/components/PageBreadcrumb';

interface AspectShowProps {}

const AspectShowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AspectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 200px;
  margin: 10px;
`;

const AspectDetails = styled.div`
  max-width: 350px;
  margin: 10px;
`;

export const handle = {
  breadcrumbLink: (data: BreadcrumbArgs) => data.params.aspect,
  breadcrumbText: (data: BreadcrumbArgs) => data.params.aspect,
};

export const loader: LoaderFunction = ({ params }) => {
  const aspect = findAspect(params.aspect);
  return json({ aspect });
};

const AspectShow: React.FC<AspectShowProps> = () => {
  const { aspect } = useLoaderData<typeof loader>();

  return (
    <AspectShowContainer id='scroll'>
      <h2>{aspect.title}</h2>
      <AspectDetailsWrapper>
        <img src={aspect.aspectImgSrc} alt={aspect.title} />
        <AspectDetails>
          {aspect.description.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
          {aspect.examples.map((example: string, index: number) => (
            <p key={index}>{example}</p>
          ))}
        </AspectDetails>
      </AspectDetailsWrapper>
    </AspectShowContainer>
  );
};

export default AspectShow;
