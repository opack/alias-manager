import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { filter } = this.props;
    return <div />;
  }
}

Filter.propTypes = {
  filter: PropTypes.func,
};

export default Filter;
