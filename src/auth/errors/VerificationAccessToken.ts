import { BaseError } from "../../errors/BaseError";

export class VerificationAccessTokenError extends BaseError {

  static CODE = "VERIFYING_ACCESS_TOKEN_ERROR";
  static DEFAULT_MESSAGE = "Could not verify the access token";

  constructor(message?: string) {
    super(message || VerificationAccessTokenError.DEFAULT_MESSAGE, VerificationAccessTokenError.CODE);
  }

  code: string;
  message: string;

}
