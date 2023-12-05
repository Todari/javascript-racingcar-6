import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static printError(error) {
    Console.print(error.message);
  }
}
