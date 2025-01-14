function foodDelivery(chickenMenuCount , fishMenuCount , vegMenuCount) {
    let totalMenuPrice = chickenMenuCount * 10.35 + fishMenuCount * 12.40 + vegMenuCount * 8.15;
    let dessertPrice = 0.2 * totalMenuPrice;

    let totalPrice = totalMenuPrice + dessertPrice + 2.50;
    console.log(totalPrice)
}

foodDelivery(2, 4, 3);