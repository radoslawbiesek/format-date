const formatDate = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    timeInSeconds = timeInSeconds - hours * 3600;
    const minutes = Math.floor(timeInSeconds / 60);
    timeInSeconds = timeInSeconds - minutes * 60;
    const seconds = timeInSeconds;
    let toDisplay = ''; 
    
    if (hours > 0) {
        toDisplay += ` ${hours}h`;
    } 
    if (minutes > 0) {
        toDisplay += ` ${minutes}m`;
    } 
    if (seconds > 0) {
        toDisplay += ` ${seconds}s`;
    }
    
    return (toDisplay === '') ? '0s' : toDisplay.slice(1);
}

module.exports = formatDate;