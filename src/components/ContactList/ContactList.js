import { StyledList, StyledItem, StyledDeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <StyledItem key={id}>
          <p>
            {' '}
            {name} : {number}{' '}
          </p>
          <StyledDeleteBtn type="button" onClick={() => onDelete(id)}>
            Delete
          </StyledDeleteBtn>
        </StyledItem>
      ))}
    </StyledList>
  );
};
