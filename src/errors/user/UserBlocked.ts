import { BaseError } from "../BaseError";

export class UserBlockedError extends BaseError {
  
  static CODE = "USER_BLOCKED_ERROR";
  static DEFAULT_MESSAGE = "User already blocked";

  constructor(message?: string) {
    super(message || UserBlockedError.DEFAULT_MESSAGE, UserBlockedError.CODE);
  }

  code: string;
  message: string;
  
}
