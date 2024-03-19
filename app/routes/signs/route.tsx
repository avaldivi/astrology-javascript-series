import React, { useState } from 'react';
import { styled } from 'styled-components';
import { signs } from '~/utils/signs';
import { PageBreadcrumb } from '~/components/PageBreadcrumb';
import { DropdownFilter } from '~/components/DropdownFilter';
import { DetailCard } from '~/components/DetailCard';

const SignsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  margin-top: 50px;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 100px;
`;

interface SignsIndexPageProps {}

const Signs = () => {
  const [filteredSigns, setFilteredSigns] = useState(signs);
  const [filteredOption, setFilteredOption] = useState<string>('all');
  const groups = [
    { label: 'All', options: [] },
    {
      label: 'Modality',
      options: [
        { value: 'Cardinal', label: 'Cardinal' },
        { value: 'Mutable', label: 'Mutable' },
        { value: 'Fixed', label: 'Fixed' },
      ],
    },
    {
      label: 'Element',
      options: [
        { value: 'Earth', label: 'Earth' },
        { value: 'Fire', label: 'Fire' },
        { value: 'Water', label: 'Water' },
        { value: 'Air', label: 'Air' },
      ],
    },
  ];

  const handleDropdownChange = (value: string) => {
    setFilteredOption(value);
    if (value === 'all') {
      setFilteredSigns(signs);
    } else {
      setFilteredSigns(
        signs.filter(
          (sign) => sign.modality === value || sign.element === value
        )
      );
    }
  };

  return (
    <SignsContainer>
      <PageBreadcrumb
        items={[
          { text: 'Home', to: '/' },
          { text: 'Signs', to: '/signs' },
        ]}
      />
      <FilterContainer>
        <DropdownFilter groups={groups} onChange={handleDropdownChange} />
      </FilterContainer>
      <DetailCard filteredSigns={filteredSigns} />
    </SignsContainer>
  );
};

export default Signs;
