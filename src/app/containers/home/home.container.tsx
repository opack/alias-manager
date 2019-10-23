import { connect } from 'react-redux'
import { addAlias } from '../../reducers/aliases.reducer';
import { GlobalStore } from '../../reducers/store';

import Home from '../../components/home/home.component';

const mapStateToProps = (state: GlobalStore) => {
  return {
    initialFilterTerm: state.aliases.filter,
    aliases: state.aliases.aliases
  }
};

const mapDispatchToProps = {
  addAlias
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);