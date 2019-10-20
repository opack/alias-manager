import React from 'react';
import Filter from '../../components/filter/filter.component.jsx';
import AliasCreator from '../../components/alias-creator/alias-creator.component.jsx';
import AliasList from './AliasList.jsx.js.js';

const Home = () => (
  <div>
    <Filter />
    <AliasList />
    <AliasCreator />
  </div>
);

export default Home;
