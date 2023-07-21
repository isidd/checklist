/*--> Lsikoff Substitution <--*/
/*   
The base class should be completely substitutable with the extended class 
*/

class BirdBad {
  fly() {
    console.log("I can fly");
  }
}

class Eagle extends BirdBad {
  dive() {
    console.log("I can dive");
  }
}

let eg = new Eagle();

eg.fly();
eg.dive();

class Penguin extends BirdBad {
  // but penguins cannot fly even though it is a bird
}

console.log("================================================================");

// ========================================================================================== //
// Specify the class

class Bird {
  layEggs() {
    console.log("I can lay eggs...!");
  }
}

class FlayingBird extends Bird {
  fly() {
    console.log("I can Fly...!");
  }
}

class SwimmingBird extends Bird {
  swim() {
    console.log("I can swim...!");
  }
}

class EagleNew extends FlayingBird {
  dive() {
    console.log("I can dive...!");
  }
}

class PenguinNew extends SwimmingBird {
  drool() {
    console.log("I can drool...!");
  }
}

let eg1 = new EagleNew();
eg1.layEggs();
eg1.fly();
eg1.dive();

let pg1 = new PenguinNew();
pg1.layEggs();
pg1.swim();
pg1.drool();
