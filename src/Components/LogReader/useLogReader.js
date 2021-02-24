import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCounts, getLogDataFromStore, } from './helper';
import { fetchLogs } from '../../reducers/actions';

const useLogReader = () => {
    const dispatch = useDispatch();
    const logsData = useSelector(getLogDataFromStore);

    useEffect(() => {
        const fetchLogsTimer = () => dispatch(fetchLogs())
        const timer = setInterval(fetchLogsTimer, 5000);
        return () => clearInterval(timer);
    }, [dispatch]);
    return {
        logsData,
        counts: getCounts(logsData.logs)
    }
}

export default useLogReader;