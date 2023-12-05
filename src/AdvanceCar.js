import OutputView from './view/OutputView.js';

export default class AdvanceCar {
  #attempts;
  #cars;

  constructor(attempts, cars) {
    this.#attempts = attempts;
    this.#cars = cars;
    this.#advanceCars();
  }

  #advanceCars() {
    for (let i = 0; i < this.#attempts; i += 1) {
      this.#printResult(i);

      this.#cars.forEach(car => {
        car.advance();
      });
    }

    this.#printWinners();
  }

  #printResult(trial) {
    if (trial === 0) {
      OutputView.printResult();
    } else {
      OutputView.printEmptyLine();
    }
  }

  #printWinners() {
    OutputView.printWinners(this.#getWinner());
  }

  #getWinner() {
    const winners = [];
    let maxDisplacement = 0;
    this.#cars.forEach(car => {
      if (car.getDisplacement() > maxDisplacement) {
        maxDisplacement = car.getDisplacement();
      }
    });
    this.#cars.forEach(car => {
      if (car.getDisplacement() === maxDisplacement) {
        winners.push(car.getName());
      }
    });
    return winners;
  }
}
