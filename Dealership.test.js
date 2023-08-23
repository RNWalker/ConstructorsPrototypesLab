const Dealership = require("./Dealership");
const Car = require("./Car");

const dealership = new Dealership("Out Of Budget Cars", 100);
const car1 = new Car("Rolls Royce", 400, "vroomvroom");
const car2 = new Car("Lamborghini", 100, "lambovroom");
const car3 = new Car("Porsche", 500, "porschvroom");
const car4 = new Car("Porsche", 1000, "porschvroom");
dealership.addCarToStock(car1);
dealership.addCarToStock(car2);
dealership.addCarToStock(car3);
dealership.addCarToStock(car4);

test('can count cars', () => {
    const expected = 4;
    const actual = dealership.getCurrentStock(); 
    expect(actual).toBe(expected);
  });

//   test('can add car to stock', () => {
//     const expected = "expensiveAF";
//     const actual = car.getPrice(); 
//     expect(actual).toBe(expected);
//   });

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
