// Classe de base Creature
class Creature {
    constructor(name, age, strength) {
        this.name = name;
        this.age = age;
        this.strength = strength;
    }

    saysomething() {
        console.log(`La mystérieuse créature ${this.name}.`);
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
        console.log(` cri puissant de ${this.name}`);
    }

    bite() {
        console.log(`${this.name} mord avec ses dents acérées.`);
    }

    saysomething() {
        console.log(`Je suis ${this.name} the Orc!`);
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
        console.log(`${this.name} tue ses ennemis.`);
    }

    saysomething() {
        console.log(`Je suis ${this.name}`);
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


// Instanciation de créatures
const creature1 = new Creature("Mysterious Being", 1000, 5);
const creature2 = new Creature("Mystical Entity", 500, 8);

// Instanciation d'orcs
const orc1 = new Orc("Grommash", 35, 25, true);
const orc2 = new Orc("Thrall", 32, 22, false);

// Instanciation d'Urukhai
const urukhai1 = new Urukhai("Urukhai 1", 40, 30);
const urukhai2 = new Urukhai("Urukhai 2", 38, 28);

// Instanciation de chefs orcs
const chiefOrc1 = new ChiefOrc("Chief 1", 45, 35);
const chiefOrc2 = new ChiefOrc("Chief 2", 42, 33);

// Tests spécifiques à chaque type de créature
console.log("Tests spécifiques à chaque type de créature:");
orc1.scream();
orc1.bite();
urukhai1.kill();
chiefOrc1.giveOrder();

// Tests des méthodes saysomething et identity
console.log("\nTests des méthodes saysomething et identity:");
creature1.saysomething();
creature2.identity();

orc1.saysomething();
orc2.identity();

urukhai1.saysomething();
chiefOrc1.identity();
