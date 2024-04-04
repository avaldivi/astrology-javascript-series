import React from 'react';
import { planets } from '~/utils/planets';
import { DetailCard } from '~/components/DetailCard';

interface PlanetsIndexProps {}

const PlanetsIndex: React.FC<PlanetsIndexProps> = () => {
  return (
    <div>
      <DetailCard items={planets} path='planets' />
    </div>
  );
};

export default PlanetsIndex;
