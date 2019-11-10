import { PayloadAction, createSlice } from "redux-starter-kit";
import AliasData from "../services/@data-types/alias-data";

/**
 * Define how the alias store is shaped
 */
export interface AliasStore {
    aliases: any[],
    filter: string
}

const initialState: AliasStore = {
    aliases: [
        {id:'0', from:'fnac@valdera.fr', to: 'marekh.ebony@gmail.com'},
        {id:'1', from:'darty@valdera.fr', to: 'marekh.ebony@gmail.com'},
        {id:'2', from:'boulanger@valdera.fr', to: 'marekh.ebony@gmail.com'},
        {id:'3', from:'amazon@valdera.fr', to: 'marekh.ebony@gmail.com'},
        {id:'4', from:'denver@dernier-dinosaure.com', to: 'marekh.ebony@gmail.com'}
    ],
    filter: ''
}

const aliasesSlice = createSlice({
    name: 'aliases',
    initialState,
    reducers: {
        fetchAliases(state: AliasStore, action: PayloadAction<void>) {
            // Nothing to do. The fetch will be performed in data.service.ts
            console.log('DBG in fetchAliases');
        },
        populateAliases(state: AliasStore, action: PayloadAction<Array<AliasData>>) {
            // Clear current alias list
            state.aliases = [];

            // Add fetched aliases
            const data = action.payload;
            data.forEach((alias:any) => state.aliases.push(alias));
        },
        addAlias(state: AliasStore, action: PayloadAction<AliasData>) {
            state.aliases.push(action.payload);
        },
        removeAlias(state: AliasStore, action: PayloadAction<string>) {
            state.aliases = state.aliases.filter(alias => alias.id !== action.payload);
        },
        updateFilter(state: AliasStore, action: PayloadAction<string>) {
            state.filter = action.payload;
        }
    }
})

// Extract the action creators object and the reducer
const { actions, reducer } = aliasesSlice;
// Extract and export each action creator by name
export const { fetchAliases, populateAliases, addAlias, removeAlias, updateFilter } = actions;
// Export the reducer, either as a default or named export
export default reducer;