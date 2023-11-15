// Classe de base Creature
class Creature {
    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    saysomething() {
        console.log(`I am a mysterious creature named ${this.name}.`);
    }

    identity() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Strength: ${this.strength}`);
    }
}

// Classe Orc héritant de Creature
class Orc extends Creature {
    constructor(name, age, strength, hasRage) {
        super(name, age, strength);
        this.hasRage = hasRage;
    }

    scream() {
        console.log(`${this.name} screams with a powerful rage!`);
    }

    bite() {
        console.log(`${this.name} bites with sharp teeth!`);
    }

    saysomething() {
        console.log(`I am ${this.name} the Orc!`);
    }

    identity() {
        super.identity();
        console.log(`Rage: ${this.hasRage}`);
    }
}

// Classe Urukhai héritant de Orc
class Urukhai extends Orc {
    constructor(name, age, strength) {
        super(name, age, strength + 10);
    }

    kill() {
        console.log(`${this.name} kills its enemies fiercely!`);
    }

    saysomething() {
        console.log(`I am ${this.name}, a mighty Urukhai!`);
    }

    identity() {
        super.identity();
        console.log(`I am an Urukhai.`);
    }
}

// Classe ChiefOrc héritant de Orc
class ChiefOrc extends Orc {
    constructor(name, age, strength) {
        super(name, age, strength + 15);
        this.isChief = true;
    }

    giveOrder() {
        console.log(`${this.name}, the Chief, gives an order!`);
    }

    saysomething() {
        console.log(`I am ${this.name}, the Chief of the Orcs!`);
    }

    identity() {
        super.identity();
        console.log(`Chief: ${this.isChief}`);
    }
}
