import { BaseError } from "../../errors/BaseError";

export class SchemeAuthorizationError extends BaseError {

  static CODE = "INVALID_SCHEME_AUTHORIZATION_ERROR";
  static DEFAULT_MESSAGE = "Invalid scheme authorization header";

  constructor(message?: string) {
    super(message || SchemeAuthorizationError.DEFAULT_MESSAGE, SchemeAuthorizationError.CODE);
  }

  code: string;
  message: string;

}
