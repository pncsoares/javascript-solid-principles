import BooleanQuestion from "./BooleanQuestion";
import MultipleChoiceQuestion from "./MultipleChoiseQuestion";
import TextQuestion from "./TextQuestion";
import RangeQuestion from "./RangeQuestion";

// now this class only does one thing

// and this method only does one thing too
// also, in code like this, you almost never mess up
function PrintQuiz(questions) {
    questions.forEach(question => {
        console.log(question.Description);
        question.PrintQuestionChoices();
        console.log('');
    });
}

// if we need to add another type, we just need to
// create the class with the rules for that type
// and that's it
const questions = [
    new BooleanQuestion('This code is awesome!'),
    new MultipleChoiceQuestion('What is your favourite language?', [ 'C#', 'SQL', 'Javascript', 'Python' ]),
    new TextQuestion('Describe your favourite JS feature.'),
    new RangeQuestion('What is the speed limit in your city?')
];

// this is the real meaning of open for extension and closed for modification

PrintQuiz(questions);