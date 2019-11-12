import { PayloadAction, createSlice } from "redux-starter-kit";
import OvhCredentialsData from "../services/@data-types/ovh-credentials-data";

/**
 * Define how the alias store is shaped
 */
export interface OVHCredentialsStore {
    credentials: OvhCredentialsData,
    fetchDate: string
}

const initialState: OVHCredentialsStore = {
    fetchDate: '',
    credentials: new OvhCredentialsData ('ovh-eu', '1EslNdW2fvBLdLg5', 'kGISrWhJFj32mSUgnMnlsRGZVes1EXmB', '')
};

const ovhCredentialsSlice = createSlice({
    name: 'ovhCredentials',
    initialState,
    reducers: {
        setConsumerKey(state: OVHCredentialsStore, action: PayloadAction<string>) {
            const consumerKey = action.payload;
            state.credentials = {...state.credentials, consumerKey};
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = ovhCredentialsSlice;
// Extract and export each action creator by name
export const { setConsumerKey } = actions;
// Export the reducer, either as a default or named export
export default reducer;