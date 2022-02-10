import { BaseError } from "../BaseError";

export class BirthdayFormatError extends BaseError {
  
  static CODE = "BAD_BIRTHDAY_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad birthday format";

  constructor(message?: string) {
    super(message || BirthdayFormatError.DEFAULT_MESSAGE, BirthdayFormatError.CODE);
  }

  code: string;
  message: string;
  folio: string;
    
}
