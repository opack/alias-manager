import React, { Component, createRef } from 'react';
import AliasCreatorProps from './alias-creator.props';
import aliasCreatorDefaultProps from './alias-creator.default-props';

interface AliasCreatorState {
  // The current name of the alias to create
  alias: string;
}

class AliasCreator extends Component<AliasCreatorProps, AliasCreatorState> {
  static defaultProps = aliasCreatorDefaultProps;

  public state: AliasCreatorState = {
    alias: ''
  };

  private input = createRef<HTMLInputElement>();

  createAlias = () => {
    const node = this.input.current;
    if (node) {
      this.props.onCreateAliasClick(node.value);
    }
  }
  
  render() {
    const { alias } = this.state;

    return (
      <div>
        <fieldset>
          <input ref={this.input} type="text" defaultValue={alias} />
          <button onClick={this.createAlias} >Create</button>
        </fieldset>
      </div>
    );
  }
}

export default AliasCreator;
