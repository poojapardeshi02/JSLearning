const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is:${arraySeasonalFruits}`);

console.log('==== Step 1 ====');
arraySeasonalFruits[0];
console.log("In given array first element is:",arraySeasonalFruits[0]);
console.log(`In given array last element is:`);
arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(arraySeasonalFruits[arraySeasonalFruits.length-1]);

console.log('==== Step 2 ====');
console.log(`Array after adding "Papaya" before "Banana":`);
arraySeasonalFruits.unshift('Papaya');// Add at Start position
console.log(arraySeasonalFruits);

console.log('==== Step 3 ====');
console.log(`Removing "Mango" from array then array is:`);
arraySeasonalFruits.splice(4,1);
console.log(arraySeasonalFruits);

console.log('==== Step 4 ====');
console.log(`Adding element "Pineapple" at last position:`);
arraySeasonalFruits.push("Pineapple");
console.log(arraySeasonalFruits);

console.log('==== Step 5 ====');
console.log(`Insert "Dragon Fruit" before "Water Melon":`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(arraySeasonalFruits);

console.log('==== Step 6 ====');
console.log(`Replace "Orange" with "Kiwi"`);
arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(arraySeasonalFruits);

console.log('==== Step 7 ====');
console.log(`Elements starting from index 1 to 4 :`);
const subArray = arraySeasonalFruits.slice(1, 5);
console.log(subArray);

console.log('==== Step 8 ====');
console.log(`Last 3 element:`);
const last3Element=arraySeasonalFruits.slice(arraySeasonalFruits.length-3);
console.log(last3Element);
