class CalorieTracker {
    constructor(maxCalories) {
        this.MaxCalories = maxCalories;
        this.CurrentCalories = 0
    }

    TrackCalories(calorie) {
        this.CurrentCalories += calorie;

        if (this.CurrentCalories > this.MaxCalories) {
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
calorieTracker.TrackCalories(500);
calorieTracker.TrackCalories(1000);
calorieTracker.TrackCalories(700);