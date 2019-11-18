import React, {Fragment} from 'react';
import AliasProps from './alias.props';

const Alias = ({id, from, to, onRemoveAliasClick}: AliasProps) => {
    const strippedFrom = from.substring(0, from.indexOf('@'));

    return (
        <Fragment>
            <td><strong><span className="has-text-primary">{strippedFrom}</span></strong></td>
            <td>{to}</td>
            <td align="center">
                <button className="delete" onClick={() => onRemoveAliasClick(id)} />
            </td>
        </Fragment>
    );
};

export default Alias;
