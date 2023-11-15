# Les-CLASSES

## Introduction

Dans cet exercice, vous allez créer une hiérarchie de classes en JavaScript pour représenter différentes créatures fantastiques. Chaque classe aura des propriétés communes telles que `name`, `age`, et `strength`, ainsi que des méthodes spécifiques à chaque type de créature.
## Classes à implémenter

1. **Créez une classe `Creature` :**
   - La classe `Creature` devrait avoir des propriétés telles que `name` (le nom de la créature), `age` (l'âge de la créature), et `strength` (la force de la créature).
   - Initialisez ces propriétés dans le constructeur de la classe lors de l'instanciation.
   - Ajoutez une méthode `saysomething()` qui affiche un message de la créature.
   - Ajoutez une méthode `identity()` qui affiche l'identité de la créature.

2. **Créez une classe `Orc` héritant de `Creature` :**
   - La classe `Orc` devrait étendre la classe `Creature` et peut avoir des propriétés spécifiques aux orcs, comme `hasRage` (un attribut propre aux orcs).
   - Ajoutez une méthode `scream()` qui affiche un cri puissant de l'orc.
   - Ajoutez une méthode `bite()` qui affiche que l'orc mord avec ses dents acérées.
   - Surchargez les méthodes `saysomething()` et `identity()` pour les personnaliser pour les orcs.

3. **Créez une classe `Urukhai` héritant de `Orc` :**
   - La classe `Urukhai` devrait étendre la classe `Orc`.
   - La force d'un Urukhai doit être automatiquement augmentée de 10 par rapport à la valeur initiale spécifiée dans le constructeur.
   - Ajoutez une méthode `kill()` qui affiche que l'Urukhai tue ses ennemis.
   - Surchargez les méthodes `saysomething()` et `identity()` pour les personnaliser pour les Urukhai.

4. **Créez une classe `ChiefOrc` héritant de `Orc` :**
   - La classe `ChiefOrc` devrait étendre la classe `Orc`.
   - La force d'un Chef Orc doit être automatiquement augmentée de 15 par rapport à la valeur initiale spécifiée dans le constructeur.
   - Ajoutez une propriété `isChief` qui est toujours `true` pour les instances de `ChiefOrc`.
   - Ajoutez une méthode `giveOrder()` qui affiche un ordre donné par le chef orc.
   - Surchargez les méthodes `saysomething()` et `identity()` pour les personnaliser pour les chefs orcs.
## Exemple d'utilisation


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
orc1.scream();
orc1.bite();
urukhai1.kill();
chiefOrc1.giveOrder();

// Tests des méthodes saysomething et identity
creature1.saysomething();
creature2.identity();

orc1.saysomething();
orc2.identity();

urukhai1.saysomething();
chiefOrc1.identity();