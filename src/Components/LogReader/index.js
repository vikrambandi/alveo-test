import React from 'react';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';

import Log from '../Log';
import Counts from '../Counts';
import useLogReader from './useLogReader';

const styles = {
    logReader: {
        margin: 'auto',
        height: '400px',
        width: '500px',
        overflow: 'scroll',
        border: '1px solid grey'
    }
}

const LogReader = () => {

    const { logsData: {
        logs,
        fetchingLogs,
        errorFetchingLogs,
    }, counts } = useLogReader();

    return (<div>
        {!fetchingLogs && errorFetchingLogs && <p> Unable to fetch the Logs. Try again later.</p>}
        {Boolean(!logs.length) ?
            (<CircularProgress color="inherit" />)
            :
            (<>
                <Counts counts={counts} />
                <List dense style={styles.logReader}>
                    {logs.map((log, index) => <Log
                        key={String(index)}
                        log={log}
                    />)}
                </List>
            </>)
        }

    </div>)
}

export default LogReader;