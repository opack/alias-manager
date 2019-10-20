import React from 'react';
import PropTypes from 'prop-types';

const Alias = props => <div />;

Alias.propTypes = {
  alias: PropTypes.string.isRequired,
  delete: PropTypes.func,
};

export default Alias;
