import { BaseError } from "../BaseError";

export class PhoneRegisteredError extends BaseError {
  
  static CODE = "PHONE_REGISTERED_ERROR";
  static DEFAULT_MESSAGE = "Phone already registered";

  constructor(message?: string) {
    super(message || PhoneRegisteredError.DEFAULT_MESSAGE, PhoneRegisteredError.CODE);
  }

  code: string;
  message: string;
  
}
