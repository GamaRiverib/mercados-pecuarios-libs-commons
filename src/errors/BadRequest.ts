import { ApiError } from "./ApiError";

export class BadRequestError extends ApiError {

  static CODE = "BAD_REQUEST";
  static DEFAULT_MESSAGE = "Bad request";

  constructor(message?: string) {
    super(message || BadRequestError.DEFAULT_MESSAGE, BadRequestError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}
