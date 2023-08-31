import { StyledInput, FilterContainer, StyledLabel } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <StyledLabel>
        Find contacts by name
        <StyledInput
          type="text"
          placeholder="Search"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </StyledLabel>
    </FilterContainer>
  );
};
