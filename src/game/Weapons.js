
class Weapon {
    constructor(name, attack, defence, picturePath) {
        this.name = name;
        this.attack = attack;
        this.defence = defence;
        this.picturePath = picturePath;
        this.picture;
    }
}

let Weapons = {};

const club = new Weapon('Club', 8, 8, './itemPictures/Sabre.gif');
Weapons['club'] = club;

const sabre = new Weapon('Sabre', 12, 12, './itemPictures/Sabre.gif');
import sabrePicture from './itemPictures/Sabre.gif';
sabre.picture = sabrePicture;
Weapons['sabre'] = sabre;

export default Weapons;