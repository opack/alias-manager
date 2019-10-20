import React from 'react';

import AliasCreator from '../../components/alias-creator/alias-creator.component';
import AliasList from '../../components/alias-list/alias-list.component';
import Filter from '../../components/filter/filter.component';
import { addAlias } from '../../reducers/aliases.reducer';

const Home = () => (
  <div>
    <Filter />
    <AliasList />
    <AliasCreator onCreateAliasClick={alias => addAlias(alias)}/>
  </div>
);

export default Home;
