import { BaseError } from "./BaseError";

export class UnhandleError extends BaseError {

  static CODE = "UNHANDLE_ERROR";
  static DEFAULT_MESSAGE = "Something was wrong!";

  constructor(message?: string) {
    super(message || UnhandleError.DEFAULT_MESSAGE, UnhandleError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}