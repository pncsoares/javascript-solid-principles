function PrintQuiz(questions) {
    questions.forEach(question => {
        console.log(question.Description);

        // when you see a switch, you automacally can assume that the open/closed principle is being violated
        switch (question.Type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;

            case 'multipleChoice':
                question.Options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                });
                break;

            case 'text':
                console.log('Answer: ____________________');
                break;

            case 'range':
                console.log('Minimum: ___________________');
                console.log('Maximum: ___________________');
                break;
        }

        console.log('');
    });
}

const questions = [
    {
        Type: 'boolean',
        Description: 'This code is awesome!'
    },
    {
        Type: 'multipleChoice',
        Description: 'What is your favourite language?',
        Options: [ 'C#', 'SQL', 'Javascript', 'Python' ]
    },
    {
        Type: 'text',
        Description: 'Describe your favourite JS feature.'
    },
    {
        Type: 'range',
        Description: 'What is the speed limit in your city?'
    }
];

// if we need to add a new type, we need to do the following:
// 1. create the type in the questions array
// 2. modify the giant switch statement to have the new type and do the business logic inside it

PrintQuiz(questions);