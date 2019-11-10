import React from 'react';
import AliasProps from './alias.props';

const Alias = ({ id, alias }: AliasProps) => {
  return (
    <div>
      <span>{alias} ({id})</span>
    </div>
  );
};

export default Alias;
