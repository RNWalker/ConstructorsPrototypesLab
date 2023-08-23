const Car = require("./Car");

const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

//getters

Customer.prototype.getName = function(){return this.name;}
Customer.prototype.getWallet = function(){return this.wallet;}
Customer.prototype.getCar = function(){return this.car;}

//setters

Customer.prototype.setName = function(newName) {this.name = newName;}
Customer.prototype.setWallet = function(newWallet) {this.wallet = newWallet;}
Customer.prototype.setCar = function(newCar) {this.car = newCar;}


//write a buyCar method which checks the Customer wallet and updates their car property

Customer.prototype.buyCar = function (car){
    const carPrice = car.getPrice();
    if (this.getWallet() >= carPrice){
        this.setCar(car);
        this.setWallet (this.getWallet() - carPrice);
        return true;
    } else { return false }
}

module.exports = Customer;

