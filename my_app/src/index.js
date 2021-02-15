import foods from "./foods";
import {choice, remove} from './helpers'

// Select randomly a fruit
let fruit = choice(foods);
// L'insérer dans une phrase 
console.log('I\'d like a', fruit,'please'); 
// Réponse 
console.log ('Here you go : ',fruit);
// Remove the fruit of the array 
remove(foods, fruit);
// New array 
console.log('We also have', foods.length , 'to offer');