import { PayloadAction, createSlice } from "redux-starter-kit";
import AliasData from "../services/@data-types/alias-data";

/**
 * Define how the alias store is shaped
 */
export interface AliasStore {
    aliases: AliasData[],
    filter: string
}

const initialState: AliasStore = {
    aliases: [
        new AliasData('0', 'fnac@valdera.fr'),
        new AliasData('1', 'darty@valdera.fr'),
        new AliasData('2', 'boulanger@valdera.fr'),
        new AliasData('3', 'amazon@valdera.fr'),
        new AliasData('4', 'denver@dernier-dinosaure.com')
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
        populateAliases(state: AliasStore, action: PayloadAction<AliasData[]>) {
            // Clear current alias list
            state.aliases = [];

            // Add fetched aliases
            const data = action.payload;
            data.forEach((alias: AliasData) => state.aliases.push(alias));
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