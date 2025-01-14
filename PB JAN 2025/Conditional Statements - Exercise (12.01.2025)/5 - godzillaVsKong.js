function godzillaVsKong(budget, actorCount, singleCostumePrice) {
    let decorPrice = 0.1 * budget;
    let totalCostumePrice = actorCount * singleCostumePrice;

    if (actorCount > 150) {
        totalCostumePrice *= 0.9;
    }

    let expenses = decorPrice + totalCostumePrice; 
    
    if (budget >= expenses) {
        let moneyLeft = budget - expenses;

        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = expenses - budget;

        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(20000, 120, 55.5)