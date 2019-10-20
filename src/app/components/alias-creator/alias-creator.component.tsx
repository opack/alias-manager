import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AliasCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { createAlias } = this.props;
    return <div />;
  }
}

AliasCreator.propTypes = {
  createAlias: PropTypes.func,
};

export default AliasCreator;
