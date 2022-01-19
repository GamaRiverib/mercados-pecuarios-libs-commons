import { BaseError } from "../BaseError";

export class ContactFormatError extends BaseError {
  
  static CODE = "BAD_CONTACT_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Bad contact format";

  constructor(message?: string) {
    super(message || ContactFormatError.DEFAULT_MESSAGE, ContactFormatError.CODE);
  }

  code: string;
  message: string;
  
}
