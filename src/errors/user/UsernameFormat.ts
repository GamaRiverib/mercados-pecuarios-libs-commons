import { BaseError } from "../BaseError";

export class UsernameFormatError extends BaseError {
  
  static CODE = "BAD_USERNAME_FORMAT";
  static DEFAULT_MESSAGE = "Bad username format";

  constructor(message?: string) {
    super(message || UsernameFormatError.DEFAULT_MESSAGE, UsernameFormatError.CODE);
  }

  code: string;
  message: string;
  folio: string;
  
}
