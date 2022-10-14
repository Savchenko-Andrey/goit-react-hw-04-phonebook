import React from 'react';
import PropTypes from 'prop-types';

import { ListInput } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return <ListInput type="text" placeholder="Search" value={value} onChange={onFilter} />;
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
