import { BaseError } from "../BaseError";

export class MaxContactError extends BaseError {
  
  static CODE = "MAX_CONTACT_ITEMS_ERROR";
  static DEFAULT_MESSAGE = "Maximum number of contact items allowed";

  constructor(message?: string) {
    super(message || MaxContactError.DEFAULT_MESSAGE, MaxContactError.CODE);
  }

  code: string;
  message: string;
  folio: string;
  
}
