class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0
    }

    trackCalories(calorie) {
        this.currentCalories += calorie;

        if (this.currentCalories > this.maxCalories) {
            this.logCalorieSurplus();
        }
    }

    // this code is violating the single responsability principle
    // because the responsability to log a message is not from CalorieTracker class
    logCalorieSurplus() {
        console.log('Max calories exceeded!');
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);