import React from 'react';
import AliasListProps from './alias-list.props';
import Alias from '../alias/alias.component';
import AliasListDefaultProps from './alias-list.default-props';
import AliasData from '../../services/@data-types/alias-data';

const AliasList = ({ aliases }: AliasListProps) => {
  return (
    <div>
        <ul>
        {
          aliases.map( (alias: AliasData) => {
            return (<li key={alias.id}><Alias {...alias} /></li>);
          })
        }
        </ul>
    </div>
  );
};

AliasList.defaultProps = AliasListDefaultProps;

export default AliasList;
