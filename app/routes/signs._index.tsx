import React, { useState, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';
import { styled } from 'styled-components';
import { DropdownFilter } from '~/components/DropdownFilter';
import { DetailCard } from '~/components/DetailCard';
import { signs } from '~/utils/signs';

interface SignsIndexProps {}

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 100px;
`;

const SignsIndex: React.FC<SignsIndexProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredSigns, setFilteredSigns] = useState(signs);
  const [filteredOption, setFilteredOption] = useState<string>('all');
  const groups = [
    { label: 'All', options: [] },
    {
      label: 'Modality',
      options: [
        { value: 'cardinal', label: 'Cardinal' },
        { value: 'mutable', label: 'Mutable' },
        { value: 'fixed', label: 'Fixed' },
      ],
    },
    {
      label: 'Element',
      options: [
        { value: 'earth', label: 'Earth' },
        { value: 'fire', label: 'Fire' },
        { value: 'water', label: 'Water' },
        { value: 'air', label: 'Air' },
      ],
    },
  ];

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setFilteredSigns(
        signs.filter(
          (sign) =>
            sign.modality.toLowerCase() === filter ||
            sign.element.toLowerCase() === filter
        )
      );
    } else {
      setFilteredSigns(signs);
    }
  }, [signs, searchParams]);

  const handleDropdownChange = (value: string) => {
    setFilteredOption(value);
    if (value === 'all') {
      setFilteredSigns(signs);
      setSearchParams({});
    } else {
      setFilteredSigns(
        signs.filter(
          (sign) => sign.modality === value || sign.element === value
        )
      );
      setSearchParams({ filter: value });
    }
  };
  return (
    <>
      <FilterContainer>
        <DropdownFilter groups={groups} onChange={handleDropdownChange} />
      </FilterContainer>
      <DetailCard filteredSigns={filteredSigns} />
    </>
  );
};

export default SignsIndex;
