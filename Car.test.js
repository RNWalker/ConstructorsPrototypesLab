const Car = require("./Car");

//const car = new Car("Rolls Royce", "expensiveAF", "vroomvroom");

let car;
beforeEach(() => {
  car = new Car("Rolls Royce", "expensiveAF", "vroomvroom");
});

describe('getters for car module', () => {

  test('can get manufacturer', () => {
    const expected = "Rolls Royce";
    const actual = car.getManufacturer(); 
    expect(actual).toBe(expected);
  });

  test('can get price', () => {
    const expected = "expensiveAF";
    const actual = car.getPrice(); 
    expect(actual).toBe(expected);
  });

  test('can get engineType', () => {
    const expected = "vroomvroom";
    const actual = car.getEngineType(); 
    expect(actual).toBe(expected);
  });

});