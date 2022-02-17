import Bird from "./Bird";

export default class Penguin extends Bird {
    Fly() {
        throw new Error('I cannot fly');
    }

    Swim() {
        console.log('I can swim');
    }
}