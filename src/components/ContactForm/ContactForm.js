import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  StyledForm,
  Label,
  StyledFieled,
  Button,
  StyledError,
} from './ContactForm.styled';

const phoneRegistr =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;
const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegistr, 'Phone number is not valid')
    .required('Required'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={addContactSchema}
      onSubmit={(values, action) => {
        console.log(values);
        onAdd({ ...values, id: nanoid() });
        action.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledFieled type="text" name="name" />
          <StyledError name="name" component="div" />
        </Label>
        <Label>
          Number
          <StyledFieled type="tel" name="number" />
          <StyledError name="number" component="div" />
        </Label>
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
