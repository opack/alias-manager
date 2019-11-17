import React from 'react';
import AliasProps from './alias.props';

const Alias = ({ id, from, to, onRemoveAliasClick }: AliasProps) => {
  const strippedFrom = from.substring(0, from.indexOf('@'));

  return (
    <article className="message is-info">
      <div className="message-header">
        {strippedFrom}
        <button className="delete" onClick={() => onRemoveAliasClick(id)}></button>
      </div>
      <div className="message-body">
      To: {to}
      </div>
    </article>
  );
};

export default Alias;
