import { BaseError } from "../BaseError";

export class UsernameRegisteredError extends BaseError {
  
  static CODE = "USERNAME_REGISTERED_ERROR";
  static DEFAULT_MESSAGE = "Username already registered";

  constructor(message?: string) {
    super(message || UsernameRegisteredError.DEFAULT_MESSAGE, UsernameRegisteredError.CODE);
  }

  code: string;
  message: string;
  
}

