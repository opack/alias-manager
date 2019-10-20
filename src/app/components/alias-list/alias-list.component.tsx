import React from 'react';
import AliasListProps from './alias-list.props';
import Alias from '../alias/alias.component';
import AliasListDefaultProps from './alias-list.default-props';

const AliasList = (props: AliasListProps) => {
  const { aliases } = props;
  return (
    <div>
        <ul>
        {
          aliases.map( (alias: string) => {
            return (<li key={alias}><Alias alias={alias} /></li>);
          })
        }
        </ul>
    </div>
  );
};

AliasList.defaultProps = AliasListDefaultProps;

export default AliasList;
