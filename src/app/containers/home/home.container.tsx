import React, { useState, useEffect } from 'react'

import {fetchAliases} from '../../services/redirections.service';

import Filter from '../../components/filter/filter.component';
import AliasList from '../../components/alias-list/alias-list.component';
import AliasCreator from '../../components/alias-creator/alias-creator.component';
import AliasData from '../../services/@data-types/alias-data';

const Home = () => {
    const [aliases, setAliases] = useState(new Array<AliasData>());
    const [filter, setFilter] = useState('');

    const addAlias = (from: string) => setAliases(aliases.concat(new AliasData('', from, '')));

    const getVisibleAliases = (aliases: AliasData[], filter: string): AliasData[] => {
        // If there is a filter, then we filter the list of data to only keep the ones matching the filter
        if (filter.trim() !== '') {
            aliases = aliases.filter((data: AliasData) => data.from.includes(filter));
        }

        return aliases;
    };

    const refreshAliases = () => {    
        fetchAliases().then((fetchedAliases: Array<AliasData>) => {
            setAliases(fetchedAliases);
        });
    }

    useEffect(() => refreshAliases(), []);

    return (
        <div>
            <Filter initialFilterTerm={filter} filter={setFilter} />
            <AliasList aliases={getVisibleAliases(aliases, filter)} />
            <AliasCreator onCreateAliasClick={addAlias} />
            <button onClick={refreshAliases} >Refresh</button>
        </div>
    );
};

export default Home;