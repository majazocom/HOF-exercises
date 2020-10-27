let characters = [
  {
    name: 'Zelda',
    age: 25
  },
  {
    name: 'Peach',
    age: 32
  },
  {
    name: 'Mew',
    age: 21
  },
  {
    name: 'Samus',
    age: 30
  },
  {
    name: 'Roy',
    age: 16
  },
  {
    name: 'Link',
    age: 36
  },
  {
    name: 'Captain Falcon',
    age: 42
  },
  {
    name: 'Ness',
    age: 12
  }
];


//Del 1 - Bonus = MVG på hela programmet
//Vilket spel?
//SSBM

//Del 2
//Mappa ut alla objekten som är över eller lika med 20

let overTwentyList = [];

let overTwenty = (x) => {
  return x.age >= 20;
};

overTwentyList = characters.filter(overTwenty);

console.log(overTwentyList);

//Del 3
//Mappa ut alla objektens NAMN som är över eller lika med 20

let newArray = [];

for (let objects of characters) {
  if (objects.age >= 20) {
    newArray.push(objects.name);
  }
}
console.log(newArray);

//Del 4
//Skapa en ny lista med bara namnen och en lista med bara åldrarna

let nameArr = [];

let getName = (obj) => {
  return obj.name
}

nameArr = characters.map(getName);

console.log(nameArr);

//Del 5
//Hitta tre karaktärer till från spelet och lägg in dem i listan med
let char1 = {
  name: "Mewtwo",
  age: 109
};
let char2 = {
  name: "Yoshi",
  age: 10
};
let char3 = {
  name: "Kirby",
  age: 11
};

characters.unshift(char1, char2, char3);
console.log(characters);

//Del 6
//Sortera dina karaktärer i namnordning, a - z

characters.sort((a, b) => a.name.localeCompare(b.name));

//Del 7
//Sortera dina karaktärer i åldersordning, 1 - 10000år

characters.sort((a, b) => a.age - b.age);

//Del 8
//Kolla om en karaktär med namnet 'Mew' finns med i listan.

let result = characters.find(obj => {
  if (obj.name === "Mew") {
    return true;
  }
})
console.log(result);

