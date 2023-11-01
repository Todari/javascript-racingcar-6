import { DuplicatedError, RacingCarNameError } from "../error/CustomErrors.js";
import { RetryCountError } from "../error/CustomErrors.js";

class RacingCarValidator {
  #isValidName(str) {

    // RacingCar 이름의 타입에 대한 기능 요구사항이 없었지만, 영문 대소문자로 한정
    const regExp = /^[a-zA-Z]{1,5}$/;
    return regExp.test(str);
  }

  isValidNameArray(nameArray) {
    if (!nameArray.every(this.#isValidName)) {
      throw new RacingCarNameError(nameArray);
    }

    if (new Set(nameArray).size !== nameArray.length) {
      throw new DuplicatedError(nameArray);
    }
  }

  isValidCount(str) {
    if (isNaN(str) || str === '0') {
      throw new RetryCountError(str);
    }
  }
}

export default RacingCarValidator;
