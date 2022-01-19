import { BaseError } from "../../errors/BaseError";

export class AccessForbiddenError extends BaseError {

  static CODE = "ACCESS_FORBIDDEN_ERROR";
  static DEFAULT_MESSAGE = "User not found in access control list";

  constructor(message?: string) {
    super(message || AccessForbiddenError.DEFAULT_MESSAGE, AccessForbiddenError.CODE);
  }

  code: string;
  message: string;

}
