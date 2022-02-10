import { BaseError } from "../BaseError";

export class EmailFormatError extends BaseError {
  
  static CODE = "BAD_EMAIL_FORMAT";
  static DEFAULT_MESSAGE = "Bad email format";

  constructor(message?: string) {
    super(message || EmailFormatError.DEFAULT_MESSAGE, EmailFormatError.CODE);
  }
  

  code: string;
  message: string;
  folio: string;

}
