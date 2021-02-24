import * as TYPES from './type';

const initialState = {
    logs: [],
    fetchingLogs: true,
    errorFetchingLogs: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCHING_LOGS:
            return { ...state, fetchingLogs: true }
        case TYPES.FETCHING_LOGS_SUCCESS:
            return { ...state, fetchingLogs: false, errorFetchingLogs: false, logs: action.payload }
        case TYPES.FETCHING_LOGS_FAILED:
            return { ...state, fetchingLogs: false, errorFetchingLogs: true }

        default:
            return state;
    }
};

export default reducer;