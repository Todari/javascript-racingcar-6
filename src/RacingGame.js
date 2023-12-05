import AdvanceCar from './AdvanceCar.js';
import Car from './Car.js';
import InputView from './view/InputView.js';

export default class RacingGame {
  #cars;

  constructor() {
    this.#cars = [];
  }

  async start() {
    const names = await this.#inputCarName();

    names.forEach(name => {
      this.#cars.push(new Car(name));
    });

    const attempts = await this.#inputAttempts();


  }

  async #inputCarName() {
    const input = await InputView.carName();
    const names = input.split(', ');

    return names;
  }

  async #inputAttempts() {
    const attempts = await InputView.attempts();

    return attempts;
  }
}
