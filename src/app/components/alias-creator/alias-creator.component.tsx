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
      this.props.onCreateAliasClick(`${node.value}@valdera.fr`, 'marekh.ebony@gmail.com');
    }
  }
  
  render() {
    const { alias } = this.state;
    const { domain } = this.props;

    return (
      <div>
          <input ref={this.input} type="text" defaultValue={alias} /><span>@{domain}</span>
          <button onClick={this.createAlias}>Create</button>
      </div>
    );
  }
}

export default AliasCreator;