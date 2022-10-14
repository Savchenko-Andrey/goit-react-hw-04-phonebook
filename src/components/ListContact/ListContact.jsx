import React from 'react';
import PropTypes from 'prop-types';
import { ItemList, ItemListButton, ItemListParagr } from './ListContact.styled';

export const Renderlist = ({ contact, onRemove }) => {
  return (
    contact.length > 0 &&
    contact.map(item => {
      return (
        <ItemList key={item.id}>
          <ItemListParagr>
            {item.name} {item.number}
          </ItemListParagr>
          <ItemListButton type="button" name={item.id} onClick={onRemove}>
            Delete
          </ItemListButton>
        </ItemList>
      );
    })
  );
};

Renderlist.propTypes = {
  contact: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
