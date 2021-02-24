import * as TYPES from './type';
import getLogs from '../api';

export const fetchLogs = () => dispatch => {
    dispatch({ type: TYPES.FETCHING_LOGS });
    getLogs().then(data => data.json())
        .then(logs => dispatch({ type: TYPES.FETCHING_LOGS_SUCCESS, payload: logs }))
        .catch(err => dispatch({ types: TYPES.FETCHING_LOGS_FAILED, payload: err }));
}
