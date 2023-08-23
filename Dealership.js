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

Dealership.prototype.addCarToStock = function(newCar){
    this.currentStock.push(newCar);
}

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

Dealership.prototype.returnByManufacturer = function (manufacturer){
    return this.currentStock.filter(car => car.manufacturer === manufacturer);
}

//can find total value of cars

Dealership.prototype.getTotalValueOfCars = function(){
    return this.currentStock.reduce((totalValue, car) => totalValue + car.price, 0);
}

module.exports = Dealership;

