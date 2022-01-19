import { BaseError } from "../../errors/BaseError";

export class MissingCredentialsError extends BaseError {
  static CODE = "MISSING_CREDENTIALS_ERROR";
  static DEFAULT_MESSAGE = "Missing user credentials";

  constructor(message?: string) {
    super(message || MissingCredentialsError.DEFAULT_MESSAGE, MissingCredentialsError.CODE);
  }

  code: string;
  message: string;

}