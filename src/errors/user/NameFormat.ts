import { BaseError } from "../BaseError";

export class NameFormatError extends BaseError {
  
  static CODE = "BAD_NAME_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad name format";

  constructor(message?: string) {
    super(message || NameFormatError.DEFAULT_MESSAGE, NameFormatError.CODE);
  }

  code: string;
  message: string;
  
}
