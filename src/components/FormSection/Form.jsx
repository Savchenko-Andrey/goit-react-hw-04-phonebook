import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { FormContact, FormLabel, Input, FormButton, Eror } from './Form.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(5).max(30).required(),
});
const initialValue = { name: '', number: '' };

export const Formes = ({ onSubmit }) => {
  const hendleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={hendleSubmit}
      validationSchema={validationSchema}
    >
      <FormContact>
        <div>
          <FormLabel>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />
          </FormLabel>

          <FormLabel>
            Telephone
            <Input type="tel" name="number" />
            <ErrorMessage name="number" render={msg => <Eror>{msg}</Eror>} />
          </FormLabel>

          <FormButton type="submit">Add Contact</FormButton>
        </div>
      </FormContact>
    </Formik>
  );
};

Formes.propTypes = PropTypes.func.isRequired;