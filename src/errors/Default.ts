import { BaseError } from "./BaseError";

export class DefaultError extends BaseError {

  static CODE = "DEFAULT_ERROR";
  static DEFAULT_MESSAGE = "Something was wrong!"

  constructor(message?: string) {
    super(message || DefaultError.DEFAULT_MESSAGE, DefaultError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}