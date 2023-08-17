/* 
Link : https://www.youtube.com/watch?v=nnwD5Lwwqdo&t=532s&ab_channel=WebDevSimplified

*/

/* 
    Inheritance : With Inheritance we describe what objects are and how they are related to each other 
                            Monster
                           /       \
                Flying monster    Swimming monster
                
        Now Q. is what if I need a Monster that can fly and swim
    So we can create a FlyingSwimmingMonster but -> we need to duplicate flying or swimming or both logic into new class

    Composition : It simply means what an object can do.
 */

// ----------------------------------------------------- Inheritance ------------------------------------------------------

class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`);
  }

  walk() {
    console.log(`${this.name} walked`);
  }
}

// extends -> inheriting the Monster class
class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`);
  }
}

class SwimmingMonster extends Monster {
  swimming() {
    console.log(`${this.name} swam`);
  }
}

// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------- Composition ----------------------------------------------------------

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function attacker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
  };
}

function walker({ name }) {
  return {
    walk: () => console.log(`${name} walked`),
  };
}

function SwimmingMonsterCreator(name) {
  const monster = { name: name };
  return {
    ...monster,
    ...swimmer(monster),
    ...attacker(monster),
    ...walker(monster),
  };
}

function FlyingSwimmingMonsterCreator(name) {
  const monster = { name: name };
  return {
    ...monster,
    ...swimmer(monster),
    ...flyer(monster),
    ...attacker(monster),
    ...walker(monster),
  };
}

const eagleObj = swimmer({ name: "Eagle" });
eagleObj.swim();

const monsterSwimObj = SwimmingMonsterCreator("Monster");
monsterSwimObj.swim();

console.log("=========================");
const monsterFlyObj = FlyingSwimmingMonsterCreator("Monster");
monsterFlyObj.fly();
monsterFlyObj.walk();
monsterFlyObj.swim();
monsterFlyObj.attack();
