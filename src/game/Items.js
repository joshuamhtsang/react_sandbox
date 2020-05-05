
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
let name = 'PLACEHOLDER';

///////////
// Items //
///////////

// Mana Potion
name = 'Mana Potion';
const mana_potion = new Item(
    name, 
    './itemPictures/Mana_Potion.gif',
    'consumable'
);
import manaPotionPicture from './itemPictures/Mana_Potion.gif';
mana_potion.picture = manaPotionPicture;
mana_potion.action = 'alter_mana';
mana_potion.mana_change = 25;
Items[name] = mana_potion;

// Ultimate Mana Potion
name = 'Ultimate Mana Potion';
const ultimate_mana_potion = new Item(
    name, 
    './itemPictures/Ultimate_Mana_Potion.gif',
    'consumable'
);
import ultimateManaPotionPicture from './itemPictures/Ultimate_Mana_Potion.gif';
ultimate_mana_potion.picture = ultimateManaPotionPicture;
ultimate_mana_potion.action = 'alter_mana';
ultimate_mana_potion.mana_change = 200;
Items[name] = ultimate_mana_potion;

// Slime Potion
name = 'Slime Potion';
const slime_potion = new Item(
    name, 
    './itemPictures/Slime_Potion.gif',
    'consumable'
);
import slimePotionPicture from './itemPictures/Slime_Potion.gif';
slime_potion.picture = slimePotionPicture;
slime_potion.action = 'alter_health';
slime_potion.health_change = -100;
Items[name] = slime_potion;

/////////////
// Weapons //
/////////////
name = 'Sabre';
const sabre = new Weapon(name, 12, 12, 'righthand', './itemPictures/Sabre.gif');
import sabrePicture from './itemPictures/Sabre.gif';
sabre.picture = sabrePicture;
sabre.action = 'equip';
Items[name] = sabre;


export default Items;
