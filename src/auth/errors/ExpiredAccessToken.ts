import { BaseError } from "../../errors/BaseError";

export class ExpiredAccessTokenError extends BaseError {

  static CODE = "ACCESS_TOKEN_EXPIRED_ERROR";
  static DEFAULT_MESSAGE = "Access token has expired";

  constructor(message?: string) {
    super(message || ExpiredAccessTokenError.DEFAULT_MESSAGE, ExpiredAccessTokenError.CODE);
  }

  code: string;
  message: string;

}
