import Duck from "./Duck";
import Penguin from "./Penguin";

function MakeBirdFly(bird) {
    bird.Fly()
}

const duck = new Duck();
const penguin = new Penguin();

MakeBirdFly(duck);
MakeBirdFly(penguin);