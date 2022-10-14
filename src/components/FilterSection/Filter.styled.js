import styled from 'styled-components';

export const ListInput = styled.input`
  width: 250px;
  padding: 4px;
  outline: none;
  border: 1px solid lightseagreen;
  border-radius: 9px;
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    border: 1px solid lightseagreen;
    box-shadow: 2px 2px 3px lightseagreen;
  }
`;
