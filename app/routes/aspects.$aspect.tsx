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
  const [searchParams] = useSearchParams();
  const scrollToRef = useRef(null);

  useEffect(() => {
    const shouldScroll = searchParams.get('scrollTo');
    if (shouldScroll === aspect.title.toLowerCase() && scrollToRef.current) {
      const scroll = () => {
        const elementTop = scrollToRef.current.offsetTop;
        const additionalOffset = 100; // Adjust as needed
        window.scrollTo({
          top: elementTop + additionalOffset,
          behavior: 'smooth',
        });
      };
      scroll();

      window.addEventListener('resize', scroll);
      return () => window.removeEventListener('resize', scroll);
    }
  }, [searchParams, aspect.title]);

  return (
    <AspectShowContainer>
      <h2>{aspect.title}</h2>
      <AspectDetailsWrapper id='details'>
        <img ref={scrollToRef} src={aspect.aspectImgSrc} alt={aspect.title} />
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
