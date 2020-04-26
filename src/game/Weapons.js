
class Weapon {
    constructor(name, attack, defence, slot, picturePath) {
        this.name = name;
        this.attack = attack;
        this.defence = defence;
        this.slot = slot;
        this.picturePath = picturePath;
        this.picture;
        this.type = 'Weapon';
    }
}

let Weapons = {};

const club = new Weapon('Club', 8, 8, 'righthand','./itemPictures/Sabre.gif');
Weapons['club'] = club;

const sabre = new Weapon('Sabre', 12, 12, 'righthand', './itemPictures/Sabre.gif');
import sabrePicture from './itemPictures/Sabre.gif';
sabre.picture = sabrePicture;
sabre.action = 'equip';
Weapons['sabre'] = sabre;

export default Weapons;