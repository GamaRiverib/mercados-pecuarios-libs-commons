import { BaseError } from "../../errors/BaseError";

export class InvalidSchemeAuthorizationError extends BaseError {
  static CODE = "INVALID_SCHEME_AUTHORIZATION_ERROR";
  static DEFAULT_MESSAGE = "Invalid scheme authorization header";
  
  constructor(message?: string) {
    super(message || InvalidSchemeAuthorizationError.DEFAULT_MESSAGE, InvalidSchemeAuthorizationError.CODE);
  }

  code: string;
  message: string;

}