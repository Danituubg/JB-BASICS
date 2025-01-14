function hoursMins(hour, min) {
    let totalMins = hour * 60 + min;
    let minsPlus15 = totalMins + 15;
    let newHour = Math.floor(minsPlus15 / 60);
    let newMin = minsPlus15 % 60;
    if (newHour === 24) {
        newHour = 0;
    }
    if (newMin <10) {
        console.log(`${newHour}:0${newMin}`)
    } else {
        console.log(`${newHour}:${newMin}`)
    }
}

hoursMins(23, 59);