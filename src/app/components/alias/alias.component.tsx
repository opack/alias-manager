import React from 'react';
import AliasProps from './alias.props';

const Alias = ({ from, to }: AliasProps) => {
  return (
    <div>
      <span>{from} -> {to}</span>
    </div>
  );
};

export default Alias;
