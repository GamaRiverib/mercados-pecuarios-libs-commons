import { BaseError } from "../../errors/BaseError";

export class InvalidAccessTokenFormatError extends BaseError {
  static CODE = "INVALID_ACCESS_TOKEN_FORMAT_ERROR";
  static DEFAULT_MESSAGE = "Invalid access token format";

  constructor(message?: string) {
    super(message || InvalidAccessTokenFormatError.DEFAULT_MESSAGE, InvalidAccessTokenFormatError.CODE);
  }

  code: string;
  message: string;
  
}