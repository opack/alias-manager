import { PayloadAction, createSlice } from "redux-starter-kit";

/**
 * Define how the alias store is shaped
 */
export interface OVHCredentialsStore {
    endpoint: string,
    appKey: string,
    appSecret: string,
    consumerKey: string
}

const initialState: OVHCredentialsStore = {
    endpoint: 'ovh-eu',
    appKey: '1EslNdW2fvBLdLg5',
    appSecret: 'kGISrWhJFj32mSUgnMnlsRGZVes1EXmB',
    consumerKey: ''
}

const ovhCredentialsSlice = createSlice({
    name: 'ovhCredentials',
    initialState,
    reducers: {
        setConsumerKey(state: OVHCredentialsStore, action: PayloadAction<string>) {
            state.consumerKey = action.payload;
        }
    }
})

// Extract the action creators object and the reducer
const { actions, reducer } = ovhCredentialsSlice;
// Extract and export each action creator by name
export const { setConsumerKey } = actions;
// Export the reducer, either as a default or named export
export default reducer;