import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { List } from '@material-ui/core';

const styles = {
    error: { backgroundColor: 'indianred' },
    warning: { background: 'lightgoldenrodyellow' },
    info: { background: 'lightskyblue' }
}
const Counts = ({ counts: { info = 0, warning = 0, error = 0 } }) => (
    <List style={{ width: '500px', margin: 'auto' }}>
        <ListItem>
            <ListItemText style={styles.info}
                primary={`Info: ${info}`}
            />
        </ListItem>
        <ListItem>
            <ListItemText style={styles.warning}
                primary={`Warning: ${warning}`}
            />
        </ListItem>
        <ListItem>
            <ListItemText style={styles.error}
                primary={`Error: ${error}`}
            />
        </ListItem>

    </List>
);

export default Counts;