import { BaseError } from "../BaseError";

export class GenderFormatError extends BaseError {
  
  static CODE = "BAD_GENDER_FORMAT";
  static DEFAULT_MESSAGE = "Bad gender format";

  constructor(message?: string) {
    super(message || GenderFormatError.DEFAULT_MESSAGE, GenderFormatError.CODE);
  }

  code: string;
  message: string;
  folio: string;
  
}
