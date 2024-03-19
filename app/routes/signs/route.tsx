import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Aries } from '~/images';
import { signs } from '~/utils/signs';
import { PageBreadcrumb } from '~/components/PageBreadcrumb';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownGroup {
  label: string;
  options: DropdownOption[];
}

interface GroupedDropdownProps {
  groups: DropdownGroup[];
  onChange: (value: string) => void;
}

const SignsContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  margin-top: 50px;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
`;

const SignsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  button {
    align-self: end;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #d0d7df;
  width: 100px;
  border: none;
  box-shadow: inset -2px -3px 3px #b9b9b9;
`;

const ImageContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 10px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
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
  const groups: DropdownGroup[] = [
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
        <GroupedDropdown groups={groups} onChange={handleDropdownChange} />
      </FilterContainer>
      <SignsWrapper>
        {filteredSigns.map((sign) => {
          return (
            <SignContainer key={sign.title}>
              <h2>{sign.title}</h2>
              <ImageContainer>
                <img src={sign.imageSrc} height='150px' alt={sign.title} />
              </ImageContainer>
              <p>{sign.description}</p>
              <Button>View More</Button>
            </SignContainer>
          );
        })}
      </SignsWrapper>
    </SignsContainer>
  );
};

export default Signs;

const GroupedDropdown: React.FC<GroupedDropdownProps> = ({
  groups,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      {groups.map((group, index) =>
        group.label === 'All' ? (
          <option value={'all'}> {group.label}</option>
        ) : (
          <optgroup key={index} label={group.label}>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        )
      )}
    </select>
  );
};
