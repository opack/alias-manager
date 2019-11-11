import React from 'react';
import AliasListProps from './alias-list.props';
import Alias from '../alias/alias.component';
import AliasListDefaultProps from './alias-list.default-props';
import AliasData from '../../services/@data-types/alias-data';

const AliasList = ({ aliases, onRemoveAliasClick }: AliasListProps) => {
  return (
    <div>
        <table>
          <tbody>
          {
            aliases.map( (alias: AliasData) => {
              const id = alias.id;
              return (
                <tr key={id}>
                  <td><Alias {...alias} /></td>
                  <td><button onClick={() => onRemoveAliasClick(id)}>X</button></td>
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
