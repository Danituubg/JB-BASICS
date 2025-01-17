function worldSwimmingRecord (currentRecord, distance, timePerMeter) {
    let timeForDistance = distance * timePerMeter;
    let delayTimes = Math.floor(distance / 15);
    let delayDuration = delayTimes * 12.5;

    let totalTime = timeForDistance + delayDuration;

    if (totalTime < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let secondsNeeded = totalTime - currentRecord
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(10464, 1500, 20)