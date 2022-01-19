import { BaseError } from "../BaseError";

export class EmailRegisteredError extends BaseError {
  
  static CODE = "EMAIL_REGISTERED_ERROR";
  static DEFAULT_MESSAGE = "Email already registered";

  constructor(message?: string) {
    super(message || EmailRegisteredError.DEFAULT_MESSAGE, EmailRegisteredError.CODE);
  }

  code: string;
  message: string;
  
}
