import React from 'react';
import AliasListProps from './alias-list.props';
import Alias from '../alias/alias.component';
import AliasListDefaultProps from './alias-list.default-props';
import AliasData from '../../services/@data-types/alias-data';

const AliasList = ({ aliases, onRemoveAliasClick, onRefreshList, filterComponent }: AliasListProps) => {
  return (
    <div>
        <label className="subtitle">Alias list <span className="tag">{aliases.length}</span></label>
        <button className="button" onClick={onRefreshList}>Refresh</button>
        { filterComponent }
        <div className="columns is-multiline">
          {
            aliases.map( (alias: AliasData) => {
              const id = alias.id;
              return (
                <div className="column is-one-quarter" key={id}>
                  <Alias {...alias} onRemoveAliasClick={onRemoveAliasClick}/>
                </div>
              );
            })
          }
        </div>
    </div>
  );
};

AliasList.defaultProps = AliasListDefaultProps;

export default AliasList;
