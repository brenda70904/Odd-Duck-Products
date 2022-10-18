'use strict';

//1.create image object to store all the info

function Product(name, fileExtenstion = 'jpeg') {
  this.name = name;
  this.fileExtenstion = fileExtenstion;
  this.src = `image/${this.name}.${this.fileExtenstion}`;
  this.score = 0;
  this.view = 0;
}

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulu = new Product('cthulu');
let dogDuck = new Product('dogDuck');
let dragon = new Product('dragon');
let ducklogo = new Product('ducklogo');
let pen = new Product('pen');
let petSweep = new Product('petSweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('watercan');
let wineGlass = new Product('wineGlass');


//2. make object array
let allProducts = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dogDuck', 'dragon', 'ducklogo', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'waterCan', 'wineGlass'];

console.log(allProducts);
//3.randomly select the image
function randomPick() {
  return Math.floor(Math.random() * allProducts.length);
}
function renderImage() {
  let p1 = randomPick();
  let p2 = randomPick();
  let p3 = randomPick();
  while (p1 === p2 || p1 === p3 || p2 === p3) {
    p2 = randomPick();
    console.log(p1, p2, p3);

  }
}
console.log(renderImage());
//4. connect to DOM

//5. add score and view


//6. show result at the end. 
