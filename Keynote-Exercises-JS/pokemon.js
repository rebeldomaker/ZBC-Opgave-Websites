console.log(`Welcome to the mini Pokemon console game!\nThis fangame is written purely in JavaScript for learning purposes in school.\n Please Nintendo, don't come for my ass... kthx!`);

// List of Pokemon to choose from. The Pokemon class is introducing OOP in JS
const pokemonListPlayer = [ // List of pokemon to choose from for player, 3 out of 6
    {
        name: "Eevee",
        type: "Normal",
        hp: 55,
        attack: 55,
        defense: 50,
        speed: 55,
        moves: [
            { name: "Tackle", type: "Normal", power: 40 },
            { name: "Sand Attack", type: "Normal", power: 0 }
        ]
    },
    {
        name: "Pikachu",
        type: "Electric",
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90,
        moves: [
            { name: "Thunderbolt", type: "Electric", power: 90 },
            { name: "Quick Attack", type: "Normal", power: 40 }
        ]
    },
    {
        name: "Porygon",
        type: "Normal",
        hp: 65,
        attack: 60,
        defense: 70,
        speed: 40,
        moves: [
            { name: "Psybeam", type: "Psychic", power: 65 },
            { name: "Tackle", type: "Normal", power: 40 }
        ]
    },
    {
        name: "Growlithe",
        type: "Fire",
        hp: 55,
        attack: 70,
        defense: 57,
        speed: 60,
        moves: [
            { name: "Ember", type: "Fire", power: 40 },
            { name: "Bite", type: "Normal", power: 60 }
        ]
    },
    {
        name: "Slowpoke",
        type: "Water",
        hp: 90,
        attack: 65,
        defense: 65,
        speed: 15,
        moves: [
            { name: "Water Gun", type: "Water", power: 40 },
            { name: "Confusion", type: "Psychic", power: 50 }
        ]
    },
    {
        name: "Tauros",
        type: "Normal",
        hp: 75,
        attack: 100,
        defense: 95,
        speed: 111,
        moves: [
            { name: "Horn Drill", type: "Normal", power: 0 },
            { name: "Tackle", type: "Normal", power: 40 }
        ]
    }
];

const pokemonListNPC = [ // list of pokemon the enemy (PC) gets to choose from
    {
        name: "Zubat",
        type: "Poison",
        hp: 40,
        attack: 45,
        defense: 35,
        speed: 55,
        moves: [
            { name: "Bite", type: "Normal", power: 60 },
            { name: "Supersonic", type: "Normal", power: 0 }
        ]
    },
    {
        name: "Rattata",
        type: "Normal",
        hp: 30,
        attack: 56,
        defense: 35,
        speed: 72,
        moves: [
            { name: "Tackle", type: "Normal", power: 40 },
            { name: "Quick Attack", type: "Normal", power: 40 }
        ]
    },
    {
        name: "Spearow",
        type: "Flying",
        hp: 40,
        attack: 60,
        defense: 30,
        speed: 70,
        moves: [
            { name: "Peck", type: "Flying", power: 35 },
            { name: "Fury Attack", type: "Flying", power: 15 }
        ]
    },
    {
        name: "Ekans",
        type: "Poison",
        hp: 35,
        attack: 60,
        defense: 44,
        speed: 55,
        moves: [
            { name: "Bite", type: "Normal", power: 60 },
            { name: "Poison Powder", type: "Poison", power: 0 }
        ]
    },
    {
        name: "Koffing",
        type: "Poison",
        hp: 40,
        attack: 65,
        defense: 95,
        speed: 35,
        moves: [
            { name: "Tackle", type: "Normal", power: 40 },
            { name: "Poison Gas", type: "Poison", power: 0 }
        ]
    },
    {
        name: "Meowth",
        type: "Normal",
        hp: 40,
        attack: 45,
        defense: 35,
        speed: 90,
        moves: [
            { name: "Scratch", type: "Normal", power: 40 },
            { name: "Bite", type: "Normal", power: 60 }
        ]
    }
];

// Introduce pokemon typing advantage, using G1 era logic before fairy type was introduced

const typeAdvantage = {
    "Fire": { strong: ["Grass", "Bug", "Steel"], weak: ["Water", "Ground", "Rock"] },
    "Water": { strong: ["Fire", "Ground", "Rock"], weak: ["Electric", "Grass"] },
    "Electric": { strong: ["Water", "Flying"], weak: ["Ground"] },
    "Grass": { strong: ["Water", "Ground", "Rock"], weak: ["Fire", "Ice", "Poison", "Flying", "Bug"] },
    "Flying": { strong: ["Grass", "Bug", "Fighting"], weak: ["Electric", "Ice", "Rock"] },
    "Poison": { strong: ["Grass", "Bug"], weak: ["Ground", "Psychic"] },
    "Psychic": { strong: ["Fighting", "Poison"], weak: ["Bug", "Ghost"] },
    "Normal": { strong: [], weak: ["Fighting"] }
};

function selectTeam() { /* user picks 3 */
    /*    player_team = []
    print("Choose 3 pokemon:")
    for i, pokemon in enumerate(pokemon_list_player):
        print(f"{i+1}. {pokemon['name']}")

    while len(player_team) < 3:
        choice = int(input("Pick a pokemon number: ")) - 1
        player_team.append(pokemon_list_player[choice])

    return player_team*/

    // JavaScript implementation:
    let playerTeam = [];
    console.log("Choose 3 pokemon:");
    for (let i = 0; i < pokemonListPlayer.length; i++) {
        console.log(`${i+1}. ${pokemonListPlayer[i].name} (${pokemonListPlayer[i].type})`);
    }
    while (playerTeam.length < 3) {
        let choice = parseInt(prompt("Pick a pokemon number: ")) - 1;
        playerTeam.push(pokemonListPlayer[choice]);
    }
    return playerTeam;
}

console.log(`Choose 3 Pokemon you will use.\n You have 6 options to choose from.\nPick wisely!\n`);
console.log(`Pokemon available:\n1.)${pokemonListPlayer[0].name} \n\n`);

function computerTeam() { /* random 3 */
    // import random
    // for i in pokemonListNPC (range(1, 3)):
    //      PC randomly chooses 3 out of 6 pokemon options, it is random each time the game runs so as to not repeat the same pokemon each playthru

    // JavaScript implementation:
    let npcTeam = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * pokemonListNPC.length);
        npcTeam.push(pokemonListNPC[randomIndex]);
    }
    return npcTeam;
}

function calculateDamage() { /* damage logic */
    // todo i will write pseudo-code for this later, TBA
}

function battleLoop() { /* main game loop */
    // todo i will write pseudo-code for this later, TBA
}