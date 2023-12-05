import MESSAGE from '../constants/Message.js';

export class CarNameInputError extends Error {
  constructor() {
    super(MESSAGE.carNameInputError);
  }
}

export class AttemptInputError extends Error {
  constructor() {
    super(MESSAGE.attemptInputError);
  }
}
