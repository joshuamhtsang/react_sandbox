
class Item {
    constructor(name, picturePath, type='GENERIC_ITEM') {
        this.name = name;
        this.picturePath = picturePath;
        this.type = type;
        this.action;
    }
}

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

let Items = {};

///////////
// Items //
///////////

const mana_potion = new Item(
    'Mana Potion', 
    './itemPictures/Mana_Potion.gif',
    'consumable'
);
import manaPotionPicture from './itemPictures/Mana_Potion.gif';
mana_potion.picture = manaPotionPicture;
mana_potion.action = 'alter_mana';
mana_potion.mana_change = 25;
Items['mana potion'] = mana_potion;

const ultimate_mana_potion = new Item(
    'Ultimate Mana Potion', 
    './itemPictures/Ultimate_Mana_Potion.gif',
    'consumable'
);
import ultimateManaPotionPicture from './itemPictures/Ultimate_Mana_Potion.gif';
ultimate_mana_potion.picture = ultimateManaPotionPicture;
ultimate_mana_potion.action = 'alter_mana';
ultimate_mana_potion.mana_change = 200;
Items['ultimate mana potion'] = ultimate_mana_potion;

/////////////
// Weapons //
/////////////

const sabre = new Weapon('Sabre', 12, 12, 'righthand', './itemPictures/Sabre.gif');
import sabrePicture from './itemPictures/Sabre.gif';
sabre.picture = sabrePicture;
sabre.action = 'equip';
Items['sabre'] = sabre;

export default Items;