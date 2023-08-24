const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

//getters
//properties are not private, so did not need getters and setters! 
//put an underscore infront of something you want to be private
// e.g. this._manufacturer;

Car.prototype.getManufacturer = function(){return this.manufacturer;}
Car.prototype.getPrice = function(){return this.price;}
Car.prototype.getEngineType = function(){return this.engineType;}

//setters
Car.prototype.setManufacturer = function(newManufacturer) {this.manufacturer = newManufacturer;}
Car.prototype.setPrice = function(newPrice) {this.price = newPrice;}
Car.prototype.setEngineType = function(newEngineType) {this.engineType = newEngineType;}

module.exports = Car;
