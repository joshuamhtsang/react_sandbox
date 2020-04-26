
class Item {
    constructor(name, picturePath) {
        this.name = name;
        this.picturePath = picturePath;
    }
}

let Items = {};

const mana_potion = new Item('Mana Potion', './itemPictures/Mana_Potion.gif');
Items['mana potion'] = mana_potion

export default Items;