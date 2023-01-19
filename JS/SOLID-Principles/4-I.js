/*--> Interface Segrigation <--*/
/*   
Segregate your Interface so as the implemetation for iterface do not have an extra properties or 
method avalable there
Insted of having a Interface with the long dependency we can have a seperate methods assign based on the 
requirment
*/

class Entity {
    constructor(name){
        this.name = name;
    }
}

const mover = {
    move(){
        console.log("move...!")
    }
}

const attack = {
    attack(targetEntity){
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage}`)
        targetEntity.takeDamage(this.attackDamage)
    }
}


const hasHealth = {
    takeDamage(amount){
        this.health -= amount;
        console.log(`${this.name} has health ${this.health} remaining`)
    }
}


class Character extends Entity {
    constructor(name,attackDamage,health){
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(Character.prototype,mover)
Object.assign(Character.prototype,attack)
Object.assign(Character.prototype,hasHealth)

class Wall extends Entity {
    constructor(name,health){
        super(name);
        this.health = health ;
    }
}

Object.assign(Wall.prototype,hasHealth)

class Truppet extends Entity {
    constructor(name,attackDamage){
        super(name)
        this.attackDamage = attackDamage
    }
}

Object.assign(Truppet.prototype,attack)


const trup = new Truppet("sidd",5);
const wall = new Wall("sidd",100)
const character = new Character("sidd",10,100)

trup.attack(character)
wall.takeDamage(wall)
// character.move(wall)
// character.attack(wall)
// character.health(wall)