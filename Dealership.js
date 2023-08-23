const Customer = require("./Customer");

const Dealership = function (name, maximumCars, currentStock){
    this.name = name;
    this.maximumCars = maximumCars;
    this.currentStock = [];
}

//count the number of cars in stock

Dealership.prototype.getCurrentStock = function(){
    return this.currentStock.length;
}

//add a car to stock

Dealership.prototype.addCarToStock = function(Car){
    if(this.currentStock.length >= 4){
        return false
    } else {this.currentStock.push(Car);
}
};

//return an array containing each cars manufacturer

Dealership.prototype.returnManufacturers = function (){
    const uniqueManufacturers = new Set();
    this.currentStock.forEach(car => {
        uniqueManufacturers.add(car.manufacturer);
    });
    return Array.from(uniqueManufacturers);
    // return this.currentStock.map(car => car.manufacturer);
}

//find all the cars from a given manufacturer

// Dealership.prototype.returnByManufacturer = function (manufacturer){
//     return this.currentStock.filter(car => car.manufacturer === manufacturer);
// }


const searchByManufacturer = (criteria) => {
    return this.currentStock.filter(car => car.manufacturer === manufacturer);
}

const searchByPrice = (criteria) => {
    return this.currentStock.filter(car => car.price === price);
}

const searchByEngineType = (criteria) => {
    return this.currentStock.filter(car => car.engineType === engineType);
}


const customerSearch = (searchValue, callback) => { 
    callback(searchValue); 
};


//can find total value of cars

Dealership.prototype.getTotalValueOfCars = function(){
    return this.currentStock.reduce((totalValue, car) => totalValue + car.price, 0);
}

//can sell a car and remove from currentStock

Dealership.prototype.sellCar = function(customer, car){
    if(customer.buyCar(car) == true){
        const remainingCars = this.currentStock.filter( currentCar => currentCar !== car);
        this.currentStock = remainingCars;
        return true;
    } 
    else { return false;}
}
module.exports = Dealership;

