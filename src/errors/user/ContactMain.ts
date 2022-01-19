import { BaseError } from "../BaseError";

export class ContactMainError extends BaseError {
  
  static CODE = "MAIN_CONTACT_ERROR";
  static DEFAULT_MESSAGE = "Main contact error";

  constructor(message?: string) {
    super(message || ContactMainError.DEFAULT_MESSAGE, ContactMainError.CODE);
  }
  
  code: string;
  message: string;

}
