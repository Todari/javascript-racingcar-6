import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message.js';

export default class InputView {
  static async carName() {
    const carName = await Console.readLineAsync(MESSAGE.inputCarName);

    return carName;
  }

  static async attempts() {
    const attempts = await Console.readLineAsync(MESSAGE.inputAttempts);

    return attempts;
  }
}
