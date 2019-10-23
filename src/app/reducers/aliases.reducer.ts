import { PayloadAction, createSlice } from "redux-starter-kit";

/**
 * Define how the alias store is shaped
 */
export interface AliasStore {
    aliases: string[],
    filter: string
}

const initialState: AliasStore = {
    aliases: ['fnac@valdera.fr', 'darty@valdera.fr', 'boulanger@valdera.fr', 'amazon@valdera.fr'],
    filter: 'DBG INITIAL FILTER'
}

const aliasesSlice = createSlice({
    name: 'aliases',
    initialState,
    reducers: {
        addAlias(state: AliasStore, action: PayloadAction<string>) {
            state.aliases.push(action.payload);
            console.log('DBG', action.payload);
        },
        removeAlias(state: AliasStore, action: PayloadAction<string>) {
            state.aliases = state.aliases.filter(alias => alias !== action.payload);
        }
    }
})

// Extract the action creators object and the reducer
const { actions, reducer } = aliasesSlice;
// Extract and export each action creator by name
export const { addAlias, removeAlias } = actions;
// Export the reducer, either as a default or named export
export default reducer;