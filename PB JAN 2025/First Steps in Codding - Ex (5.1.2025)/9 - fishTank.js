function fishTank(lenght, width, height, filledSpacePercent) {
    let volumeInCm = lenght * width * height;
    let volumeInL = volumeInCm / 1000;

    let filledSpaceDecimal = filledSpacePercent / 100;
    let volumeTaken = filledSpaceDecimal * volumeInL;

    let volumeForWater = volumeInL - volumeTaken;
    console.log(volumeForWater);
}

fishTank(85, 75, 47, 17);