'use strict';

//let myChart = null;

let container = document.getElementById('imageSection');
//let results = document.querySelector('ul');
let howManyTimesUserHasVoted = 0;
let maxNumberOfVotes = 2;
//let btn = document.querySelector('button');
let product1 = document.getElementById('p1');
let product2 = document.getElementById('p2');
let product3 = document.getElementById('p3');
let indexArr = [];
//1.create image object to store all the info

function Product(name, fileExtenstion = 'jpeg') {
  this.name = name;
  this.fileExtenstion = fileExtenstion;
  this.src = `./images/${this.name}.${this.fileExtenstion}`;
  this.score = 0;
  this.views = 0;
}

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');


//2. make object array
let allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass]; //length 19

//3.randomly select the image
function randomPick() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderImage() {
  while (indexArr.length < 6) {
    let randomNum = randomPick();
    if (!indexArr.includes(randomNum)) {
      indexArr.push(randomNum);
    }
  }
  let p1 = indexArr.shift();
  let p2 = indexArr.shift();
  let p3 = indexArr.shift();

  product1.src = allProducts[p1].src;
  product1.alt = allProducts[p1].name;
  allProducts[p1].views++;

  product2.src = allProducts[p2].src;
  product2.alt = allProducts[p2].name;
  allProducts[p2].views++;

  product3.src = allProducts[p3].src;
  product3.alt = allProducts[p3].name;
  allProducts[p3].views++;

  // let p1 = randomPick();
  // let p2 = randomPick();
  // let p3 = randomPick();
  // while (p1 === p2 || p1 === p3 || p2 === p3) {
  //   p1 = randomPick();
  //   p2 = randomPick();
  //   p3 = randomPick();
  // }
}


// function renderResults() {
//   // for (let i = 0; i < allProducts.length; i++) {
//   //   let li = document.createElement('li');
//   //   li.textContent = `${allProducts[i].name} had ${allProducts[i].view} views and ${allProducts[i].score} votes.`;
//   //   results.appendChild(li);
//   // }
// }

function handleClick(event) {
  if (event.target === container) {
    alert('Please select an image.');
  }
  howManyTimesUserHasVoted++;

  for (let i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      //console.log(allProducts[i]);
      allProducts[i].score++;
      break;
    }
  }
  if (howManyTimesUserHasVoted === maxNumberOfVotes) {
    container.removeEventListener('click', handleClick);
    renderChart();
    // btn.class= 'clicks-allowed';
    // btn.addEventListener('click', renderChart);
  } else {
    renderImage();
  }

}

function renderChart() {

  const productName = [];
  const productViews = [];
  const productScore = [];

  for (let i = 0; i < allProducts.length; i++) {
    console.log(allProducts[i]);
    productName.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productScore.push(allProducts[i].score);
  }

  const data = {
    labels: productName,
    datasets: [
      {
        label: 'Product views',
        data: productViews,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1
      },
      {
        label: 'Product score',
        data: productScore,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'],
        borderColor: [
          'rgb(255, 99, 132)'],
        borderWidth: 1
      }
    ]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  //const ctx = document.getElementById('myChart');
  const myChart = new Chart(
    //ctx,
    document.getElementById('myChart'),
    config
  );
}

container.addEventListener('click', handleClick);
renderImage();
//4. connect to DOM

//5. add score and view


//6. show result at the end.
