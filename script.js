// total cost => html element
const totalCostElement = document.getElementById("total-cost");

// final total => html element
const finalTotal = document.getElementById("final-total");


// select every configuration button and add event listener
const configurationButtons = document.querySelectorAll(".btn-outline-secondary");
for (const configurationButton of configurationButtons) {
    
    // get specific configuration cost displayed
    configurationButton.addEventListener("click", function (event) {

        // different configuration cost => html element
        const memoryCostElement = document.getElementById("memory-cost");
        const storageCostElement = document.getElementById("storage-cost");
        const deliveryCostElement = document.getElementById("delivery-cost");

        switch (event.target.innerText) {
            case "8GB unified memory":
                memoryCostElement.innerText = 0;
                break;
            case "16GB unified memory":
                memoryCostElement.innerText = 180;
                break;
            case "256GB SSD storage":
                storageCostElement.innerText = 0;
                break;
            case "512GB SSD storage":
                storageCostElement.innerText = 100;
                break;
            case "1TB SSD storage":
                storageCostElement.innerText = 180;
                break;
            case "Aug 25 FREE Prime Delivery":
                deliveryCostElement.innerText = 0;
                break;
            case "Aug 21 Delivery Charge $20":
                deliveryCostElement.innerText = 20;
                break;
        }

        // get total cost and final total cost after setting any configuration
        totalCost();
    })
}

// total after setting any configuration
function totalCost() {
    const configurationCosts = document.querySelectorAll("tbody span");
    let sum = 0;
    for (const configurationCost of configurationCosts) {
        sum += parseFloat(configurationCost.innerText);
    }
    totalCostElement.innerText = sum;
    finalTotalCost(sum);
}

// final total after setting any configuration
function finalTotalCost(sum) {
    finalTotal.innerText = sum;
}

// promo code input and apply button
const promoInput = document.querySelector("input[type='text']");
const promoApplyButton = document.querySelector(".btn-danger");
promoApplyButton.addEventListener("click", function () {
    if (promoInput.value == "stevekaku") {
        const twentyPercent = (parseFloat(totalCostElement.innerText) * 20) / 100;
        finalTotal.innerText = parseFloat(totalCostElement.innerText) - twentyPercent;
    }
    promoInput.value = "";
})