import { BaseError } from "../BaseError";

export class BirthdayError extends BaseError {
  
  static CODE = "BIRTHDAY_ERROR";
  static DEFAULT_MESSAGE = "Bad birthday";

  constructor(message?: string) {
    super(message || BirthdayError.DEFAULT_MESSAGE, BirthdayError.CODE);
  }

  code: string;
  message: string;
  folio: string;
  
}
