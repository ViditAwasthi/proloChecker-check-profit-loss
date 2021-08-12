const purchasePrice = document.querySelector("#purchase-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const resultDiv = document.querySelector("#result-div");


function calculateLoss(sellingPrice, costPrice){
    let loss = costPrice - sellingPrice;
    let lossPercentage = (loss *100)/costPrice;
    return [loss, lossPercentage];
}

function calculateProfit(sellingPrice, costPrice){
    let profit = sellingPrice - costPrice;
    let profitPercentage = (profit *100)/costPrice;
    return [profit, profitPercentage];

}

function calculateProfitLoss(){
    let costPrice = purchasePrice.value * stockQuantity.value;
    let sellingPrice = currentPrice.value * stockQuantity.value;
    if(sellingPrice>costPrice){
        let profitAmount = calculateProfit(sellingPrice,costPrice);
        resultDiv.innerText ="You made a Profit of ₹"+profitAmount[0]+" 🥳 & Your %age gains were: "+profitAmount[1]+"% 📈";
        document.body.style.backgroundImage= url("https://c.tenor.com/ILQPMy8OTbIAAAAC/stock-market-goes-up.gif");
        
    }else{
        let lossAmount = calculateLoss(sellingPrice, costPrice);
        resultDiv.innerText ="You made a Loss of ₹"+lossAmount[0]+" 😥 & Your %age Losses were: "+lossAmount[1]+"% 📉";
    }

    
}

checkButton.addEventListener("click", calculateProfitLoss)