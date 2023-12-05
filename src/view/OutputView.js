import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

export default class OutputView {
  static printError(error) {
    Console.print(error.message);
  }

  static printCarDisplacement(name, displacement) {
    let displacements = '';
    for (let i = 1; i < displacement + 1; i += 1) {
      displacements += MESSAGE.unit;
    }
    const result = MESSAGE.carDisplacement(name) + displacements;

    Console.print(result);
  }
}
