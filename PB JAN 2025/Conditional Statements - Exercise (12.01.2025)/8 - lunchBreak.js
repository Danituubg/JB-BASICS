function lunchBreak(seriesTitle, episodeDuration, totalBreakDuration) {
    let lunchDuration = (1 / 8) * totalBreakDuration;
    let leisureDuration = (1 / 4) * totalBreakDuration;

    let timeToWatchMovie = totalBreakDuration - lunchDuration - leisureDuration;

    if (timeToWatchMovie >= episodeDuration) {
        let timeLeft = timeToWatchMovie - episodeDuration;
        console.log(`You have enough time to watch ${seriesTitle} and left with ${Math.ceil(timeLeft)} minutes free time.`);    
    } else {
        let timeNeeded = episodeDuration - timeToWatchMovie;
        console.log(`You don't have enough time to watch ${seriesTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}

lunchBreak("Game of Thrones", 60, 96)