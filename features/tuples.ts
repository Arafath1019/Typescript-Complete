// Tuples in typescript

// regular object
const drink = {
    color: 'brown',
    carbonated: PictureInPictureWindow,
    sugar: 40
};

// Tuple 
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi1: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];