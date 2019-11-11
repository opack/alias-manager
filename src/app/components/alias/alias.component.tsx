import React from 'react';
import AliasProps from './alias.props';

const Alias = ({ id, from, to }: AliasProps) => {
  return (
    <div>
      <span>{from} -> {to} ({id})</span>
    </div>
  );
};

export default Alias;
