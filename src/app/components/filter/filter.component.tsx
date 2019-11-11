import React, { Component } from 'react';
import filterDefaultProps from './filter.default-props';
import FilterProps from './filter.props';

interface FilterState {
  // The current term to use for filtering
  term: string;
}

class Filter extends Component<FilterProps, FilterState> {
  public state: FilterState = {
    term: this.props.initialFilterTerm
  };

  static defaultProps = filterDefaultProps;

  startFiltering = (event: any) => {
    const newTerm = event.target.value;
    this.setState( (prevState: FilterState, props: FilterProps) => {
      // Filter on this new term
      this.props.filter(newTerm);

      // Update the state with the new term
      return {
        term: newTerm
      }
    });
  }

  render() {
    const { term } = this.state;
    return (
      <div>
          Filter: <input type="text" value={term} onChange={this.startFiltering} />
      </div>
    );
  }
}

export default Filter;
