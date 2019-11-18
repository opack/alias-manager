import React, { useState } from 'react';
import filterDefaultProps from './filter.default-props';
import FilterProps from './filter.props';

const Filter = ({ initialFilterTerm, filter }: FilterProps) => {
  const [term, setTerm] = useState<string>(initialFilterTerm);
  const updateFilter = (event: any) => {
    const newTerm = event.target.value;
    setTerm(newTerm);
    filter(newTerm);
  };

  return (
    <div className="field">
      <label className="label">Filter</label>
      <div className="control">
        <input className="input" type="text" value={term} onChange={updateFilter} placeholder="Type some text to filter aliases" />
      </div>
    </div>
  );
};

Filter.defaultProps = filterDefaultProps;

export default Filter;
