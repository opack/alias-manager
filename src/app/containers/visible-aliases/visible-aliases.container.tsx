import { connect } from 'react-redux'
import AliasList from '../../components/alias-list/alias-list.component';
import { AliasStore } from '../../reducers/aliases.reducer';

const getVisibleAliases = (aliases: string[], filter: string) => {
  return aliases.filter( (alias: string) => alias.startsWith(filter));
}

const mapStateToProps = (state: AliasStore) => {
  return {
    aliases: getVisibleAliases(state.aliases, state.filter)
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  () => {}
)(AliasList)

export default VisibleTodoList