function cinemaTicket(day) {
    /*
(["1"]) Monday
(["2"]) Tuesday
(["3"]) Wednesday
(["4"]) Thursday
(["5"]) Friday
(["6"]) Saturday
(["7"]) Sunday
(["-1"])    Error
*/

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        console.log(12);
} else if (day === "Wednesday" || day === "Thursday") {
    console.log(14)
} else {
    console.log(16)
}
} 
