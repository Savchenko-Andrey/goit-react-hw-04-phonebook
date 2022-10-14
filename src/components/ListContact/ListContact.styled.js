import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  gap: 4px;
`;

export const ItemList = styled.li`
  width: 100%;
`;

export const ItemListParagr = styled.p`
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
`;

export const ItemListButton = styled.button`
  font-size: 20px;
  padding: 3px;
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
