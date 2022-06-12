//1


function calcSum(a, b, ...numbers) {
    console.log( numbers ); 
    return a+b;
  }
  
  calcSum(5, 7, 15, 3);



//2

let drivers = ["Dominic", "Brian", "Letty", "Roman"];
let antagonists = ["Deckard", "Luke"];

//spread
//let family = [...drivers, ...antagonists];
//console.log(family);


//push.apply
//drivers.push.apply(drivers, antagonists);
//console.log(drivers);

//concat

//let family = [].concat(drivers, antagonists);
//console.log(family);

//splice

//let family = drivers.splice(0, 0, antagonists);
//console.log(drivers);
//console.log(family);

//forEach

let family = [];

drivers.forEach((item) => {
    family.push(item);
});

antagonists.forEach((item) => {
    family.push(item);
});

console.log(family);


//3

let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];

let uniqueNamesOfCars = [...new Set(cars)];
console.log(uniqueNamesOfCars);


//4
function getLocations(country) {
    return function(city) {
       return [country + ':' + ' ' + city];
    }
}

const locationVisit = getLocations("Belarus");
console.log(locationVisit("Minsk"));

//5

const time = 1654420481877;

let newDate = new Date(time);

console.log(newDate.toString(newDate));

function formatDate(date) {

    let day = date.getDate();
    if (day < 10) day = '0' + day;
  
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
  
    let year = date.getFullYear();
    if (year < 10) year = '0' + year;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;


    return year + '/' + month + '/' + day + ' ' + '('+ minutes + ':' +  seconds + ')';
  }



  console.log( formatDate(newDate) );




