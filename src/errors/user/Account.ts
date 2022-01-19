import { BaseError } from "../BaseError";

export class AccountError extends BaseError {
  
  static CODE = "ACCOUNT_ERROR";
  static DEFAULT_MESSAGE = "Account error";

  constructor(message?: string) {
    super(message || AccountError.DEFAULT_MESSAGE, AccountError.CODE);
  }
}
