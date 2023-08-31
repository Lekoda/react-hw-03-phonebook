import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: white;
  font-weight: 900;
`;
export const StyledFieled = styled(Field)`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 3px;
  width: 95%;
  margin-top: 10px;
  cursor: pointer;
  font-size: 15px;
  caret-color: grey;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 5px 15px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: darkgrey;
  color: white;
  font-weight: 900;
  opacity: 0.8;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
