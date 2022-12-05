import {characters} from './data';


//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name);
//2. Get array of all heights
const heights = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({
  name: character.name,
  height: character.height
}));
//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split("")[0]);


//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
//3. Get total number of characters by eye color
const charactersyByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if(acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
//4. Get total number of characters in all the character names
const totalCharactersByName = characters.reduce((acc, cur) => acc + cur.name.length, 0);


//***FILTER***
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter(
  (character) => character.mass > 100
);
//2. Get characters with height less than 200
const shorterCharacters = characters.filter(
  (character) => character.height < 200
);
//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);


//***SORT***
//1. Sort by mass
const byMass = characters.sort((a,b) => b.mass - a.mass);
//2. Sort by height
 const byHeight = characters.sort((a,b) =>  a.height - b.height);
//3. Sort by name
const byName = characters.sort((a,b) => {
  if(a.name < b.name) return -1;
  return 1;
});
//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if(a.gender === "female") return 1;
  return -1;
});


//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => character.eye_color === "blue");
//2. Does every character have mass more than 40?
const allMassMoreThan40 = characters.every((character) => character.mass > 40);
//3. Is every character shorter than 200?
const allShortherThan200 = characters.every((characters) => characters.height < 200);
//4. Is every character male?
const allMale = characters.every((character) => character.gender === "male");


//***SOME***

//1. Is there at least one male character?
const oneMaleCharacter = characters.some((character) => character.gender === "male");
//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some((character) => character.eye_color === "blue");
//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => character.height > 210);
//4. Is there at least one character that has mass less than 50?
const oneLessThan50 = characters.some((character) => character.mass < 50);