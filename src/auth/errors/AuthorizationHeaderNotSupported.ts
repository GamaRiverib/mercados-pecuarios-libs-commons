import { BaseError } from "../../errors/BaseError";

export class AuthorizationHeaderNotSupportedError extends BaseError {
  static CODE = "AUTHORIZATION_HEADER_NOT_SUPPORTED_ERROR";
  static DEFAULT_MESSAGE = "Authorization header not supported";

  constructor(message?: string) {
    super(message || AuthorizationHeaderNotSupportedError.DEFAULT_MESSAGE, AuthorizationHeaderNotSupportedError.CODE);
  }

  code: string;
  message: string;

}