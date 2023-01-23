import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import {
  AddContactForm,
  FormControls,
  Input,
  Label,
  Error,
  Button,
} from './ContactForm.styled';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  useEffect(() => {
    if (isLoading) {
      toast.success('Contact was added!', {
        style: {
          border: '1px solid #1d976c',
          boxShadow: 'none',
          fontSize: '16px',
        },
        iconTheme: {
          primary: '#1d976c',
          secondary: '#fefefe',
        },
      });
    }
  }, [isLoading]);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required('This field is required'),
    number: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        'Phone number must be digits'
      )
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === values.name.trim().toLowerCase()
      )
    ) {
      alert(`${values.name} is already in your contacts.`);
      resetForm();
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AddContactForm autoComplete="off">
        <Toaster position="top-right" reverseOrder={false} />
        <FormControls>
          <Input
            id={nameId}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
          />
          <Label htmlFor={nameId}>Name</Label>
          <Error component="div" name="name" />
        </FormControls>
        <FormControls>
          <Input
            id={numberId}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
          />
          <Label htmlFor={numberId}>Number</Label>
          <Error component="div" name="number" />
        </FormControls>
        <Button type="submit">Add contact</Button>
      </AddContactForm>
    </Formik>
  );
}