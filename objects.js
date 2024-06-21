// ===  Opdracht 1 ===
// Maak een object met daarin jouw voornaam (string), achternaam (string), leeftijd (getal) en geboortedatum (date object). De datum hoeft niet geformat te worden.
// Log dit in de terminal.
const person = {
  name: "Maarten",
  lastName: "Postma",
  leeftijd: 33,
  geboorteDatum: "30-03-1991"
};

console.log('Opdracht 1');

for (const propertys of Object.keys(person)) {
  console.log(propertys);
}
console.log(`${person.name} ${person.lastName} ${person.leeftijd} ${person.geboorteDatum}`);

// ===  Opdracht 2 ===
// Zorg ervoor dat de volgende string in de terminal wordt gelogd:
// "Hoi! Ik ben <voornaam>, ik ben <leeftijd> jaar oud."
console.log('\nOpdracht 2');
console.log(`Hoi! Ik ben ${person.name}, ik ben ${person.leeftijd} jaar oud.`)

// === Opdracht 3: bekijk het volgende object ===

const product = {
  productName: "Smeg Waterkoker",
  series: "Smeg jaren 50 retro lijn",
  material: ["roestvrijstaal", "kunststof"],
  color: "creme",
  wireless: false,
  "b-h-d": "17 x 24,6 x 22,3 cm",
};

// 3a. Log de naam van de serie in de terminal.
console.log('\nOpdracht 3');
console.log(product.series);

// 3b. Overschrijf de oude waarde van de property color ("creme") naar "roze". Log het object in de terminal om te checken of het gelukt is.
product.color = 'roze';
console.log(product.color);

// 3c. Log de tweede materiaalsoort ("kunststof") in de terminal

product.material.forEach(item => {
  console.log(item);

})

const loopitems = product.material;
let productMaterials = '';
for (let i = 0; i < loopitems.length; i++) {
  console.log(loopitems[i]);
  if (i > 0) {
    productMaterials += ' en ';
  }
  productMaterials += loopitems[i];
}
// 1d. Log de afmetingen (b-h-d) in de terminal

// === Opdracht 4 ===
console.log('\nOpdracht 4');
// Declareer een variabele met daarin een string die het product beschrijft. Gebruik hiervoor de properties productName en material uit het object.
const productName = product.name;
// ---- Verwachte uitkomst:
// "De Smeg Waterkoker is gemaakt van roestvrijstaal en kunststof"
console.log(`De ${productName} is gemaakt van ${productMaterials}`);


