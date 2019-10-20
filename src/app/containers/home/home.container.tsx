import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../../components/filter/filter.component.jsx';
import AliasCreator from '../../components/alias-creator/alias-creator.component.jsx';
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
