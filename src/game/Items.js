
class Item {
    constructor(name, picturePath) {
        this.name = name;
        this.picturePath = picturePath;
        this.action;
    }
}

let Items = {};

const mana_potion = new Item('Mana Potion', './itemPictures/Mana_Potion.gif');
import manaPotionPicture from './itemPictures/Mana_Potion.gif';
mana_potion.picture = manaPotionPicture;
Items['mana potion'] = mana_potion;

const ultimate_mana_potion = new Item('Ultimate Mana Potion', './itemPictures/Ultimate_Mana_Potion.gif');
import ultimateManaPotionPicture from './itemPictures/Ultimate_Mana_Potion.gif';
ultimate_mana_potion.picture = ultimateManaPotionPicture;
ultimate_mana_potion.action = 'replenish_mana';
Items['ultimate mana potion'] = ultimate_mana_potion;

export default Items;