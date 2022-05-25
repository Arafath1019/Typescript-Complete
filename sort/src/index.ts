import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Numbers in Array sorting
const numbersCollection = new NumberCollection([10,3,-5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

// String Sorting
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

// LinkedList Sorting
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

