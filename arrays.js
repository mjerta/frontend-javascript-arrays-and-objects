// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================

const years = ['1992', '1993', '1995', '2024'];
console.log('Opdracht 1');
for (let i = 0; i < years.length; i++) {
  console.log(years[i]);
}

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================

console.log('\n Opdracht 2');
const hobbys = ['gitaar spelen', 'programmeren', 'gamen', 'tv kijken'];
for (let i = 0; i < hobbys.length; i++){
  console.log(hobbys[i]);
}

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2

const numbers = [3, 4, 5, 7, 2];
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================
console.log('\n Opdracht 3');
console.log(numbers[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.

console.log('\n Opdracht 4');
const colors = ['groen', 'geel', 'rood', 'paars', 'blauw', 'oranje'];
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
console.log(colors[4]);
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================
console.log(colors[1]);


// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
console.log('\n Opdracht 5');
const numbers1 = [21, 22, 23, 25, 25];

for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
numbers1[3] = 24;
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
console.log();
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
console.log('\n Opdracht 6');
const  ingredients = ['bladerdeeg', 'knoflook', 'spinazie'];
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
ingredients[0] = 'lasagne bladen';
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
console.log(ingredients.length);