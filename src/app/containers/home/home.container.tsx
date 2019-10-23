import { connect } from 'react-redux'
import { addAlias, updateFilter } from '../../reducers/aliases.reducer';
import { GlobalStore } from '../../reducers/store';

import Home from '../../components/home/home.component';

const getVisibleAliases = (aliases: string[], filter: string) => {
  if (filter.trim() === '') {
    return aliases;
  }
  return aliases.filter( (alias: string) => alias.startsWith(filter));
}

const mapStateToProps = (state: GlobalStore) => {
  const { filter, aliases } = state.aliases;
  return {
    initialFilterTerm: filter,
    aliases: getVisibleAliases(aliases, filter)
  }
};

const mapDispatchToProps = {
  addAlias,
  updateFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);