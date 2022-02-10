import { ApiError } from "./ApiError";

export class NotAllowedError extends ApiError {

  static CODE = "NOT_ALLOWED_ERROR";
  static DEFAULT_MESSAGE = "Not have permission for this resource";

  constructor(message?: string) {
    super(message || NotAllowedError.DEFAULT_MESSAGE, NotAllowedError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}
