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
    aliases: [],
    filter: ''
}

const aliasesSlice = createSlice({
    name: 'aliases',
    initialState,
    reducers: {
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
export const { populateAliases, addAlias, removeAlias, updateFilter } = actions;
// Export the reducer, either as a default or named export
export default reducer;