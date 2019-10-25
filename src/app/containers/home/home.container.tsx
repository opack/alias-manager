import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStore } from '../../reducers/store';
import { addAlias, updateFilter } from '../../reducers/aliases.reducer';

import Filter from "../../components/filter/filter.component";
import AliasList from "../../components/alias-list/alias-list.component";
import AliasCreator from "../../components/alias-creator/alias-creator.component";

const Home = () => {
    const { filter, aliases } = useSelector((state: GlobalStore) => state.aliases);

    const dispatch = useDispatch();
    const handleUpdateFilter = (term: string) => dispatch(updateFilter(term));
    const handleAddAlias = (alias: string) => dispatch(addAlias(alias));

    const getVisibleAliases = (aliases: string[], filter: string) => {
        if (filter.trim() === '') {
            return aliases;
        }
        return aliases.filter((alias: string) => alias.startsWith(filter));
    };

    return (
        <div>
            <Filter initialFilterTerm={filter} filter={handleUpdateFilter} />
            <AliasList aliases={getVisibleAliases(aliases, filter)} />
            <AliasCreator onCreateAliasClick={handleAddAlias} />
        </div>
    );
};

export default Home;