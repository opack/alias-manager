import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStore } from '../../reducers/store';
import { addAlias, updateFilter, populateAliases } from '../../reducers/aliases.reducer';

import Filter from '../../components/filter/filter.component';
import AliasList from '../../components/alias-list/alias-list.component';
import AliasCreator from '../../components/alias-creator/alias-creator.component';
import AliasData from '../../services/@data-types/alias-data';
import { fetchRedirections, createRedirection } from '../../services/redirections.service';

const Home = () => {
    const { filter, aliases } = useSelector((state: GlobalStore) => state.aliases);

    const dispatch = useDispatch();
    const handleUpdateFilter = (term: string) => dispatch(updateFilter(term));
    const handleAddAlias = (from: string, to: string) => {
        createRedirection(from, to).then((result: any) => dispatch(addAlias(new AliasData(result.properties.id, from, to))));
    };

    const getVisibleAliases = (aliases: AliasData[], filter: string): AliasData[] => {
        // If there is a filter, then we filter the list of data to only keep the ones matching the filter
        if (filter.trim() !== '') {
            aliases = aliases.filter((data: AliasData) => data.from.includes(filter));
        }

        return aliases;
    };

    const refreshAliases = () => {    
        fetchRedirections().then((fetchedAliases: Array<AliasData>) => {
            dispatch(populateAliases(fetchedAliases));
        });
    }

    //useEffect(() => refreshAliases(), []);

    return (
        <div>
            <Filter initialFilterTerm={filter} filter={handleUpdateFilter} />
            <AliasList aliases={getVisibleAliases(aliases, filter)} />
            <AliasCreator onCreateAliasClick={handleAddAlias} />
            <button onClick={refreshAliases}>Refresh</button>
        </div>
    );
};

export default Home;