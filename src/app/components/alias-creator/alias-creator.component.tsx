import React, {useState} from 'react';

import AliasCreatorProps from './alias-creator.props';
import aliasCreatorDefaultProps from './alias-creator.default-props';

const AliasCreator = ({domain, onCreateAliasClick}: AliasCreatorProps) => {
    const [alias, setAlias] = useState<string>('');
    const updateAlias = (event: any) => setAlias(event.target.value);
    const createAlias = () => onCreateAliasClick(`${alias}@${domain}`, 'marekh.ebony@gmail.com');

    return (
        <div>
            <label className="label">Create new alias</label>
            <div className="field has-addons">
                <div className="control">
                    <input className="input has-addons" type="text" value={alias} onChange={updateAlias}
                           placeholder="some-alias"/>
                </div>
                <div className="control">
                    <button className="button" disabled><span>@{domain}</span></button>
                </div>
                <button className="button is-primary" onClick={createAlias}>Create</button>
            </div>

        </div>
    );
};

AliasCreator.defaultProps = aliasCreatorDefaultProps;

export default AliasCreator;