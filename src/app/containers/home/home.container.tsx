import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStore } from '../../reducers/store';
import { addAlias, updateFilter, populateAliases, removeAlias } from '../../reducers/aliases.reducer';

import Filter from '../../components/filter/filter.component';
import AliasList from '../../components/alias-list/alias-list.component';
import AliasCreator from '../../components/alias-creator/alias-creator.component';
import AliasData from '../../services/@data-types/alias-data';
import { createRedirection, deleteRedirection, fetchRedirections } from '../../services/redirections.service';

const Home = () => {
    const { filter, aliases } = useSelector((state: GlobalStore) => state.aliases);

    const dispatch = useDispatch();
    const handleUpdateFilter = (term: string) => dispatch(updateFilter(term));
    const handleAddAlias = (from: string, to: string) => {
        createRedirection(from, to).then((createdIds: Array<string>) => {
            dispatch(addAlias(new AliasData(createdIds[0], from, to)));
        })
        .catch((reason: any) => console.log(reason));
    };
    const handleRemoveAlias = (id: string) => {
        deleteRedirection(id).then(() => {
            dispatch(removeAlias(id));
        })
        .catch((reason: any) => console.log(reason));
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
    };

    //useEffect(() => refreshAliases(), []);

    const filterComponent = <Filter initialFilterTerm={filter} filter={handleUpdateFilter} />;
    return (
        <div>
            <h1 className="title">Aliases</h1>
            <h2 className="subtitle">Manage your redirections</h2>
            <hr/>
            <AliasCreator domain="valdera.fr" onCreateAliasClick={handleAddAlias} />
            <hr/>
            <AliasList aliases={getVisibleAliases(aliases, filter)} onRemoveAliasClick={handleRemoveAlias} onRefreshList={refreshAliases} filterComponent={filterComponent}/>
        </div>
    );
};

export default Home;