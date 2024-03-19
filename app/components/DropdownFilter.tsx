import React from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownGroup {
  label: string;
  options: DropdownOption[];
}

interface DropdownFilterProps {
  groups: DropdownGroup[];
  onChange: (value: string) => void;
}

export const DropdownFilter: React.FC<DropdownFilterProps> = ({
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
          <option value='all'> {group.label}</option>
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
