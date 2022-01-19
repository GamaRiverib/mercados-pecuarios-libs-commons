import { BaseError } from "../../errors/BaseError";

export class MissingAccessTokenError extends BaseError {

  static CODE = "MISSING_ACCESS_TOKEN_ERROR";
  static DEFAULT_MESSAGE = "Missing access token";

  constructor(message?: string) {
    super(message || MissingAccessTokenError.DEFAULT_MESSAGE, MissingAccessTokenError.CODE);
  }

  code: string;
  message: string;

}
