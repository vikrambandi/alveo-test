export const getLogDataFromStore = state => state;

export const getCounts = logs => {
    const counts = {
        warning: 0,
        info: 0,
        error: 0
    }
    logs.forEach(log => {
        let type = log.split(" ")[2].toLowerCase();
        counts[type] += 1;
    })
    return counts;
}
