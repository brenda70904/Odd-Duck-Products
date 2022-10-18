'use strict';
let container = document.getElementById('imageSection');
let results = document.querySelector('ul');


let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
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
let allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, ducklogo, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];

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
  p1.src = allProducts[p1].src;
  p1.alt = allProducts[p1].name;
  allProducts[p1]++;
  p2.src = allProducts[p2].src;
  p2.alt = allProducts[p2].name;
  allProducts[p2]++;
  p3.src = allProducts[p3].src;
  p3.alt = allProducts[p3].name;
  allProducts[p3]++;
}
console.log(renderImage());

function renderResults() {
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].view} views and ${allProducts[i].score} votes.`;
  }
}

function handleClick(event) {
  if (event.target === container) {
    alert('Check results');
  }
  console.log(event.target.alt);


}

container.addEventListener('click',handleClick);
renderImage();
//4. connect to DOM

//5. add score and view


//6. show result at the end. 
