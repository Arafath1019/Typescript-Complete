"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Numbers in Array sorting
const numbersCollection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// String Sorting
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// LinkedList Sorting
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
