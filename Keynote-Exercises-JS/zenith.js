console.log('Welcome!');

const furryOC = {
    name: "Zenith",
    species: "numbat",
    HP: 100,
    age: 30,
    lvl: 50,
    sex: "male",

    info: function() {
        console.log(`Character summary:\n${this.name} the ${this.sex} ${this.species} is currently ${this.age} y/o and his age shows in his bitter personality.`);
    }
};

furryOC.info();