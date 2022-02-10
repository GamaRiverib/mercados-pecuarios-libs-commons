import { ApiError } from "./ApiError";

export class NotFoundError extends ApiError {

  static CODE = "NOT_FOUND_ERROR";
  static DEFAULT_MESSAGE = "Item not found";

  constructor(message?: string) {
    super(message || NotFoundError.DEFAULT_MESSAGE, NotFoundError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}
