import Duck from "./Duck";
import Penguin from "./Penguin";

function MakeFlyingBirdFly(bird) {
    bird.Fly()
}

function MakeSwimmingBirdSwim(bird) {
    bird.Swim()
}

const duck = new Duck();
const penguin = new Penguin();

MakeFlyingBirdFly(duck);
MakeSwimmingBirdSwim(penguin);

// however this is not the perfect solution
// because a duck can swim and fly
// but in OOP, we can't inherit from multiple classes