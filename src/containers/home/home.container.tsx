import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../../app/components/filter/filter.component.jsx.js';
import AliasCreator from '../../app/components/alias-creator/alias-creator.component.jsx.js';
import AliasList from './AliasList.jsx.js.js';

const Home = props => (
  <div>
    <Filter filter={filter} />
    <AliasCreator createAlias={createAlias} />
    <AliasList />
  </div>
);

Home.propTypes = {};

export default Home;
