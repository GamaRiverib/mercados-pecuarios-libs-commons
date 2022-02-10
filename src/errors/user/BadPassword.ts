import { BaseError } from "../BaseError";

export class BadPasswordError extends BaseError {
  
  static CODE = "BAD_PASSWORD_ERROR";
  static DEFAULT_MESSAGE = "Bad password";

  constructor(message?: string) {
    super(message || BadPasswordError.DEFAULT_MESSAGE, BadPasswordError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}
