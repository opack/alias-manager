import React from 'react';

import AliasCreator from '../../components/alias-creator/alias-creator.component';
import AliasList from '../../components/alias-list/alias-list.component';
import Filter from '../../components/filter/filter.component';

const Home = () => (
  <div>
    <Filter />
    <AliasList />
    <AliasCreator />
  </div>
);

export default Home;
