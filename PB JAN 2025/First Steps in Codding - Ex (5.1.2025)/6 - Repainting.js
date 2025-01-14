function repainting(nylon, paint, thinner, hoursPerWork) {
    let pricePerNylon = (nylon + 2) * 1.50;
    let pricePerPaint = (paint + (paint * 0.10)) * 14.50; 
    let pricePerТhinner = thinner * 5; 
    let pricePerBags = 0.40;
    let totalPricePerМaterials = pricePerNylon + pricePerPaint + pricePerТhinner + pricePerBags;
    let totalPricePertotWork = hoursPerWork * (totalPricePerМaterials * 0.30); 
    let totalPriceForAll = totalPricePerМaterials + totalPricePertotWork

    console.log(totalPriceForAll);

}

repainting(10,11,4,8)