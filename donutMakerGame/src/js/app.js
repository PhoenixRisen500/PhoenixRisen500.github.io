// buttons: 
const buyAutoClickerButton = document.getElementById('button--buyAutoClicker');
const buyMultiplierButton = document.getElementById('button--buyMultiplier');
buyAutoClickerButton.disabled = true;
buyMultiplierButton.disabled = true;

// output (counters & labels): 
const donutCounterDisplay = document.getElementById('donutsCounterDisplay');
const donutsPerSecondDisplay = document.getElementById('donutsPerSecondDisplay');
const donutsPerClickDisplay = document.getElementById('donutsPerClickDisplay');
const autoClickersDisplay = document.getElementById('h3--autoclickers');
const multipliersDisplay = document.getElementById('h3--multipliers');

const donutMaker = new DonutMaker();
let autoClickerIsRunning = false; 
let donutsPerSecond = donutMaker.getDonutsPerSecond();

document.getElementById('resetGame').addEventListener('click', resetGame);
function resetGame(){
    if(
        confirm("Are you sure you want to start over? You will lose every hard earned donut in your possession. ")
    ) {
    donutMaker.resetGameToStart();
    updateAllNumbersOnScreen();
    }
} 

autoClickersDisplay.innerText = `Auto-Clickers: ${donutMaker.countOfAutoClickers}`;
autoClickersDisplay.innerText = `Multipliers: ${donutMaker.countOfMultipliers}`;

document.getElementById('bigDonut').addEventListener('mousedown', function(){
    new Audio("./src/sounds/clickb1.mp3").play();
    setDonutCounterDelayedRateOfChange(donutMaker.donutsPerSecond);
    donutMaker.addDonutsWithClick(1);
    checkDonutBalanceForAutoClickerPurchase()
    checkDonutBalanceForDonutMultiplierPurchase()
    updateTotalDonutsDisplay();
    updateDonutsPerSecondDisplay();

})

function startAutoClicker(){
    setInterval(autoClick, 1000);
}
function autoClick(){
    setDonutCounterDelayedRateOfChange(donutMaker.donutsPerSecond);
    donutMaker.addDonutsWithClick(donutMaker.getCountOfAutoClickers());
    checkDonutBalanceForAutoClickerPurchase()
    checkDonutBalanceForDonutMultiplierPurchase()
    updateTotalDonutsDisplay();
    updateDonutsPerSecondDisplay();
}

function updateAllNumbersOnScreen(){
    updateTotalDonutsDisplay();
    updateDonutsPerSecondDisplay();
    updateDonutsPerClickDisplay();
    updateAutoClickersDisplay();
    updateMultipliersDisplay();
}

function updateTotalDonutsDisplay(){
    donutCounterDisplay.style.setProperty('--num', donutMaker.countOfDonuts);
}
function updateDonutsPerSecondDisplay(){
    donutsPerSecond = donutMaker.getDonutsPerSecond();
    let thisOutput = getTwoDecimalsOnly(donutsPerSecond);
    donutsPerSecondDisplay.innerText = `Donuts per second: ${thisOutput}`;
}
function updateDonutsPerClickDisplay(){
    let donutsPerClick = getTwoDecimalsOnly(Math.pow(1.2, donutMaker.countOfMultipliers));
    donutsPerClickDisplay.innerText = `Donuts per click: ${donutsPerClick}`
}
function updateAutoClickersDisplay(){
    autoClickersDisplay.innerText = `Auto-Clickers: ${donutMaker.countOfAutoClickers}`;
    buyAutoClickerButton.innerText = `Purchase 1 for ${donutMaker.costOfAutoClicker} donuts`;
}
function updateMultipliersDisplay(){
    multipliersDisplay.innerText = `Multipliers: ${donutMaker.countOfMultipliers}`;
    buyMultiplierButton.innerText = `Purchase 1 for ${donutMaker.costOfMultiplier} donuts`;
}


buyAutoClickerButton.addEventListener('click', 
    function buyAutoClicker(){
        new Audio("./src/sounds/ka-ching.mp3").play();
        donutMaker.buyAutoClicker();
        updateAllNumbersOnScreen();
        checkDonutBalanceForAutoClickerPurchase();
        checkDonutBalanceForDonutMultiplierPurchase();
        buyAutoClickerButton.innerText = `Purchase 1 for ${donutMaker.costOfAutoClicker} donuts`;
        if(!autoClickerIsRunning) {
            startAutoClicker();
            autoClickerIsRunning = true;
        }
    })
buyMultiplierButton.addEventListener('click', 
    function buyMultiplier(){
        new Audio("./src/sounds/ka-ching.mp3").play();
        donutMaker.buyMultiplier();
        updateAllNumbersOnScreen();
        buyMultiplierButton.innerText = `Purchase 1 for ${donutMaker.costOfMultiplier} donuts`;
        checkDonutBalanceForDonutMultiplierPurchase();
        checkDonutBalanceForAutoClickerPurchase();
    })

function checkDonutBalanceForAutoClickerPurchase(){
    buyAutoClickerButton.disabled = (donutMaker.countOfDonuts < donutMaker.costOfAutoClicker);
}

function checkDonutBalanceForDonutMultiplierPurchase(){
    buyMultiplierButton.disabled = (donutMaker.countOfDonuts < donutMaker.costOfMultiplier);
}

function setDonutCounterDelayedRateOfChange(inDonutsPerSecond){
    if (inDonutsPerSecond <= 5){
        donutCounterDisplay.style.transition = `--num 0.5s`;
    } else if (inDonutsPerSecond <= 10){
        donutCounterDisplay.style.transition = `--num 1s`;
    } else if (inDonutsPerSecond > 10){
        donutCounterDisplay.style.transition = `--num 2s`;
    }
}

function getTwoDecimalsOnly(inValue){
    let x = parseInt(inValue*100);
    let y = x/100;
    return y;
}

updateAllNumbersOnScreen();