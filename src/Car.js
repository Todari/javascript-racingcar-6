import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  #displacement;

  constructor(name) {
    this.#name = name;
    this.#displacement = 0;
  }

  advance() {
    if (this.#canAdvance) {
      this.#displacement += 1;
    }
  }

  #canAdvance() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);

    if (random >= 4) {
      return true;
    }

    return false;
  }
}
