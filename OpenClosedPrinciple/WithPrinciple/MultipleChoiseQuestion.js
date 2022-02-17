export default class MultipleChoiceQuestion {
    constructor(description, options) {
        this.Description = description;
        this.Options = options;
    }

    PrintQuestionChoices() {
        this.Options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}