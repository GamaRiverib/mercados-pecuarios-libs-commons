import { BaseError } from "../../errors/BaseError";

export class FormatAccessTokenError extends BaseError {

  static CODE = "INVALID_ACCESS_TOKEN_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Invalid access token format";

  constructor(message?: string) {
    super(message || FormatAccessTokenError.DEFAULT_MESSAGE, FormatAccessTokenError.CODE);
  }

  code: string;
  message: string;

}
