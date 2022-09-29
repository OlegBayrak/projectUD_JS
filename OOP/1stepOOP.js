`use strict`

const human = {
    name: "Name",
    age: "23",
    health: 200,
    armor: 300,
    skills: {
        run: "fast",
        jump: "low"
    },
    healll: function(){
        human.health = health + 100;
        return health;
    }};

    const Oleh ={};
    Object.setPrototypeOf(Oleh, human);
    console.log(Oleh.health);


