function smallShop(product, city, quantity) {
    let money = 0;
    
    switch(town) {
        case "Sofia":
            if (product === "coffee") {
                money = quantity * 0.50;
            } else if (product === "water") {
                money = quantity * 0.80;
            } else if (product === "beer") {
                money = quantity * 1.20;
            } else if (product === "sweets") {
                money = quantity * 1.45;
            } else {
                money = quantity * 1.60;
            }
           break;
        case "Plovdiv":
             if (product === "coffee") {
                money = quantity * 0.40;
             } else if (product === "water") {
                money = quantity * 0.70;
             } else if (product === "beer") {
                money = quantity * 1.15;
             } else if (product === "sweet") {
                money = quantity * 1.30;
             } else {
                money = quantity * 1.50
             }
           break;
        case "Varna":
             if (product === "coffee") {
                money = quantity * 0.45;
             } else if (product === "water") {
                money = quantity * 0.70;
             } else if (product === "beer") {
                money = quantity * 1.10;
             } else if (product === "sweets") {
                money = quantity * 1.35;
             } else {
                money = quantity * 1.55;
             }
           break;
    }
    console.log(money);
}

smallShop("coffee",
    "Varna",
    2)
    
    