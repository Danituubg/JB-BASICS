function schoolSuplies(penPacketCount , markerPacketCount, detergentLiters, discountPercent) {
    let totalPenPrice = penPacketCount * 5.80;
    let totalMarkerPrice = markerPacketCount * 7.20;
    let totalDetergentPrice = detergentLiters * 1.20;

    let totalMaterialPrice = totalPenPrice + totalMarkerPrice + totalDetergentPrice;
    let discountDecimal = discountPercent / 100;
    let discount = discountDecimal * totalMaterialPrice;
    let finalPrice = totalMaterialPrice - discount;

    console.log(finalPrice);
}

schoolSuplies(2, 3, 4, 25);