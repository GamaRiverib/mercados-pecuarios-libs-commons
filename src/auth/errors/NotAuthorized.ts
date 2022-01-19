import { BaseError } from "../../errors/BaseError";

export class NotAuthorizedError extends BaseError {
  static CODE = "NOT_AUTHORIZED_ERROR";
  static DEFAULT_MESSAGE = "User not authorized";

  constructor(message?: string) {
    super(message || NotAuthorizedError.DEFAULT_MESSAGE, NotAuthorizedError.CODE);
  }

  code: string;
  message: string;

}