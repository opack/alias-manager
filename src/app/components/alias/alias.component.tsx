import React, { Fragment } from 'react';
import AliasProps from './alias.props';

const Alias = ({ id, from, to, onRemoveAliasClick }: AliasProps) => {
  return (
    <Fragment>
      <td><span>{from} -> {to}</span></td>
      <td><button onClick={() => onRemoveAliasClick(id)}>X</button></td>
    </Fragment>
  );
};

export default Alias;
