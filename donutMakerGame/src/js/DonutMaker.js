class DonutMaker {

    constructor() {
        this.countOfDonuts = 0;
        this.countOfAutoClickers = 0;
        this.countOfMultipliers = 0;
        this.costOfAutoClicker = 100;
        this.costOfMultiplier = 10;
        this.donutsEarnedPerClick = 1;
        this.donutsPerSecond = 0;
    }

    addDonutsWithClick(inNumberOfClicks){
        this.countOfDonuts += inNumberOfClicks * parseInt(Math.pow(1.2, this.countOfMultipliers));
    }
    

    getDonutCount(){
        return this.countOfDonuts;
    }
    getCountOfAutoClickers(){
        return this.countOfAutoClickers;
    }
    getCountOfMultipliers(){
        return this.countOfMultipliers;
    }
    getCostOfAutoClicker(){
        return this.costOfAutoClicker;
    }
    getCostOfMultiplier(){
        return this.costOfMultiplier;
    }
    getDonutsEarnedPerClick(){
        return this.donutsEarnedPerClick;
    }
    getDonutsPerSecond(){
        this.donutsPerSecond = Math.pow(1.2, this.countOfMultipliers) * this.countOfAutoClickers*this.donutsEarnedPerClick;
        return this.donutsPerSecond;
    }


    buyAutoClicker(){
        this.countOfDonuts -= this.costOfAutoClicker;
        this.countOfAutoClickers++;
        this.costOfAutoClicker = parseInt(100 * Math.pow(1.1, this.countOfAutoClickers));
    }
    buyMultiplier(){
        this.countOfDonuts -= this.costOfMultiplier;
        this.countOfMultipliers++;
        this.costOfMultiplier = parseInt(10 * Math.pow(1.1, this.countOfMultipliers));
    }


    resetGameToStart(){
        this.countOfDonuts = 0;
        this.countOfAutoClickers = 0;
        this.countOfMultipliers = 0;
        this.costOfAutoClicker = 100;
        this.costOfMultiplier = 10;
        this.donutsEarnedPerClick = 1;
        this.donutsPerSecond = 0;
    }



}