class Item {
    name = 'dummy_name';
}

class Weapon {
    constructor(name, attack, defence) {
        this.name = name;
        this.attack = attack;
        this.defence = defence;

        console.log(this.attack)
    }
}

export const Weapons = {
    'club': new Weapon('Club', 10, 10),
    'sabre': new Weapon('Sabre', 12, 12)
}

//export const club = new Weapon('club', 10, 10);
//console.log('defence:', club.defence)