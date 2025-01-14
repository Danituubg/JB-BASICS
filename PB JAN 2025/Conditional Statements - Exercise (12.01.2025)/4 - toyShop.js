function toyShop(tripPrice, puzzleCount, dollCount, bearCount, minionCount, truckCount) {
    let moneyWon = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;
    let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;

    if (toyCount >= 50) {
        moneyWon *= 0.75;
    }

    moneyWon *= 0.9;

    if (moneyWon>=tripPrice) {
        let moneyLeft = moneyWon - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);