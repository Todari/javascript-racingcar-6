import AdvanceCar from './AdvanceCar.js';
import Car from './Car.js';
import REGEXP from './constants/RegExp.js';
import { AttemptInputError, CarNameInputError } from './error/CustomError.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

export default class RacingGame {
  #cars;

  constructor() {
    this.#cars = [];
    this.#start();
  }

  async #start() {
    const names = await this.#inputCarName();

    names.forEach(name => {
      this.#cars.push(new Car(name));
    });

    const attempts = await this.#inputAttempts();
    const advanceCar = new AdvanceCar(attempts, this.#cars);
  }

  async #inputCarName() {
    while (true) {
      const input = await InputView.carName();

      try {
        this.#validateNames(input);

        return input.split(',');
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  async #inputAttempts() {
    while (true) {
      const input = await InputView.attempts();

      try {
        this.#validateAttempts(input);

        return input.split(',');
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #validateNames(names) {
    if (REGEXP.carNames.test(names)) {
      return true;
    }

    throw new CarNameInputError();
  }

  #validateAttempts(attempts) {
    if (REGEXP.attempts.test(attempts)) {
      return true;
    }

    throw new AttemptInputError();
  }
}
