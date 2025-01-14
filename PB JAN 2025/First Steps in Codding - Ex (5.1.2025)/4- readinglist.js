function readinglist(totalPages, pagesPerHour, daysForReading) {
    // Calculate total hours needed to read the book
    let totalHours = totalPages / pagesPerHour;

    // Calculate how many hours PER DAY he will need to read
    let hoursPerDay = totalHours / daysForReading;

    console.log(hoursPerDay);
}

readinglist(212 , 20 , 2)