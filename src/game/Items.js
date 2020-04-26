
class Item {
    constructor(name, picturePath) {
        this.name = name;
        this.picturePath = picturePath;
    }
}

let Items = {};

const mana_potion = new Item('Mana Potion', './itemPictures/Mana_Potion.gif');
import manaPotionPicture from './itemPictures/Mana_Potion.gif';
mana_potion.picture = manaPotionPicture;
Items['mana potion'] = mana_potion

export default Items;