import { connect } from 'react-redux'
import { addAlias } from '../../reducers/aliases.reducer';
import AliasCreator from '../../components/alias-creator/alias-creator.component';

export default connect(
  null,
  {
    onCreateAliasClick: (alias: string) => addAlias(alias)
  }
)(AliasCreator);