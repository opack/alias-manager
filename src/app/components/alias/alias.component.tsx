import React from 'react';
import AliasProps from './alias.props';

const Alias = (props: AliasProps) => {
  const { alias } = props;
  return (
    <div>
      <span>{alias}</span>
    </div>
  );
};

export default Alias;
