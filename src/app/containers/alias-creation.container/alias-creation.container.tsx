import { connect } from 'react-redux'
import { addAlias } from '../../reducers/aliases.reducer';
import AliasCreator from '../../components/alias-creator/alias-creator.component';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux-starter-kit';

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    onCreateAliasClick: (alias: string) => {
      dispatch(addAlias(alias))
    }
  }
}

const VisibleTodoList = connect(
  () => {},
  mapDispatchToProps
)(AliasCreator)

export default VisibleTodoList