export default class AdvanceCar {
  #attempts;
  #cars;

  constructor(attempts, cars) {
    this.#attempts = attempts;
    this.#cars = cars;
  }

  advanceCars() {
    for (let i = 0; i < this.#attempts; i += 1) {
      this.#cars.forEach(car => {
        car.advance();
      });
    }
  }
}
