import logMessage from "./Logger";

// now this class only does stuff related to calories

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0
    }

    trackCalories(calorie) {
        this.currentCalories += calorie;

        if (this.currentCalories > this.maxCalories) {
            logMessage('Max calories exceeded!')
        }
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);