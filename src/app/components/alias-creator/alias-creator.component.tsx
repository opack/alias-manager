import React, { useState } from 'react';

import AliasCreatorProps from './alias-creator.props';
import aliasCreatorDefaultProps from './alias-creator.default-props';

const AliasCreator = ({ domain, onCreateAliasClick }: AliasCreatorProps) => {
  const [alias, setAlias] = useState('');
  const updateAlias = (event: any) => setAlias(event.target.value);
  const createAlias = () => onCreateAliasClick(`${alias}@valdera.fr`, 'marekh.ebony@gmail.com');

  return (
      <div>
          <input type="text" value={alias} onChange={updateAlias}/><span>@{domain}</span>
          <button onClick={createAlias}>Create</button>
      </div>
    );
};

AliasCreator.defaultProps = aliasCreatorDefaultProps;

export default AliasCreator;