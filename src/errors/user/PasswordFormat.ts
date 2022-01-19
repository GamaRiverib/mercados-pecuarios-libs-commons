import { BaseError } from "../BaseError";

export class PasswordFormatError extends BaseError {
  
  static CODE = "BAD_PASSWORD_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad password format";

  constructor(message?: string) {
    super(message || PasswordFormatError.DEFAULT_MESSAGE, PasswordFormatError.CODE);
  }

  code: string;
  message: string;
  
}
