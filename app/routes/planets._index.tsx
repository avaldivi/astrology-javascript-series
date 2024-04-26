import React from 'react';
import { planets } from '~/utils/planets';
import { DetailCard } from '~/components/DetailCard';

interface PlanetsIndexProps {}

const PlanetsIndex: React.FC<PlanetsIndexProps> = () => {
  return <DetailCard items={planets} path='planets' />;
};

export default PlanetsIndex;
