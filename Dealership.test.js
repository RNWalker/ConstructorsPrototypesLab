const Dealership = require("./Dealership");
const Car = require("./Car");
const Customer = require("./Customer");

const dealership = new Dealership("Out Of Budget Cars", 4);
const car1 = new Car("Rolls Royce", 400, "vroomvroom");
const car2 = new Car("Lamborghini", 100, "lambovroom");
const car3 = new Car("Porsche", 500, "porschvroom");
const car4 = new Car("Porsche", 1000, "porschvroom");
dealership.addCarToStock(car1);
dealership.addCarToStock(car2);
dealership.addCarToStock(car3);
dealership.addCarToStock(car4);
const customer = new Customer ("Me", 1000);
const customer2 = new Customer ("You", 100);

test('can count cars', () => {
    const expected = 4;
    const actual = dealership.getCurrentStock(); 
    expect(actual).toBe(expected);
  });

  test('cannot add car to full stock', () => {
    const expected = false;
    const actual = dealership.addCarToStock("Porsche", 1000, "porschvroom"); 
    expect(actual).toBe(expected);
  });

  test('can return manufacturers', () => {
    const expected = ["Rolls Royce", "Lamborghini", "Porsche"];
    const actual = dealership.returnManufacturers(); 
    expect(actual).toEqual(expected);
  });

  test('can find cars from a particular manufacturer', () => {
    const expected = [
        new Car("Porsche", 500, "porschvroom"),
        new Car("Porsche", 1000, "porschvroom")
    ];
    const actual = dealership.returnByManufacturer("Porsche"); 
    expect(actual).toEqual(expected);
  });

  test('can fine total value of cars in stock', () => {
    const expected = 2000;
    const actual = dealership.getTotalValueOfCars(); 
    expect(actual).toBe(expected);
  });

test ('can sell a car', () => {
const expected = true;
const actual = dealership.sellCar(customer,car3);
expect(actual).toBe(expected);

})

test ('cannot afford this car', () => {
    const expected = false;
    const actual = dealership.sellCar(customer2,car3);
    expect(actual).toBe(expected);
    
    })