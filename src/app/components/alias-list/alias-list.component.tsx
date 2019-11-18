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
        <table className="table is-striped">
            <thead>
                <th>From</th>
                <th>To</th>
                <th>Actions</th>
            </thead>
            <tbody>
              {
                aliases.map( (alias: AliasData) => {
                  return (
                    <tr key={alias.id}>
                      <Alias {...alias} onRemoveAliasClick={onRemoveAliasClick}/>
                    </tr>
                  );
                })
              }
            </tbody>
        </table>
    </div>
  );
};

AliasList.defaultProps = AliasListDefaultProps;

export default AliasList;
