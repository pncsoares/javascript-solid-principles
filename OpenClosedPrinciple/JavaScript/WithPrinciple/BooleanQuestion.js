export default class BooleanQuestion {
    constructor(description) {
        this.Description = description;
    }

    PrintQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}