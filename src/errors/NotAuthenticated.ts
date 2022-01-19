
import { ApiError } from "./ApiError";

export class NotAuthenticatedError extends ApiError {

  static CODE = "NOT_AUTHENTICATED_ERROR";

  static DEFAULT_MESSAGE = "User is not authenticated";

  constructor(message?: string) {
    super(message || NotAuthenticatedError.DEFAULT_MESSAGE, NotAuthenticatedError.CODE);
  }

  code: string;
  message: string;

}
