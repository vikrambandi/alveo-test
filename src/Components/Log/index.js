import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    warning: { backgroundColor: 'indianred', margin: '5px auto' },
    error: { background: 'lightgoldenrodyellow', margin: '5px auto' },
    info: { background: 'lightskyblue', margin: '5px auto' }
}
const Log = ({ log, forwardedRef }) => {

    const type = log.split(" ")[2].toLowerCase();

    return (
        <ListItem ref={forwardedRef} style={styles[type]}>
            <ListItemText primary={log}
            />
        </ListItem>
    )
};

export default Log;