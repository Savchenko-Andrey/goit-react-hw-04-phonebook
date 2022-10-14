import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Input = styled(Field)`
  position: relative;
  width: 250px;
  padding: 4px;
  outline: none;
  border: 1px solid lightseagreen;
  border-radius: 9px;
  :hover,
  :focus {
    box-shadow: 2px 2px 3px lightseagreen;
  }
`;

export const FormButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  font-size: 15px;
  padding: 5px;
  outline: none;
  border: 1px solid lightseagreen;
  border-radius: 9px;
  color: white;
  background-color: lightseagreen;
  transition: border 250ms, box-shadow 250ms, scale 250ms;

  :hover,
  :focus {
    cursor: pointer;
    box-shadow: 2px 2px 3px lightseagreen;
  }
`;

export const Eror = styled.p`
  color: red;
`;
