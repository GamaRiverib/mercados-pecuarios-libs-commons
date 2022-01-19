import { BaseError } from "../../errors/BaseError";

export class VerifyingUserPermissionsError extends BaseError {
  static CODE = "VERIFYING_USER_PERMISSIONS_ERROR";
  static DEFAULT_MESSAGE = "Could not verify the user permissions";

  constructor(message?: string) {
    super(message || VerifyingUserPermissionsError.DEFAULT_MESSAGE, VerifyingUserPermissionsError.CODE);
  }

  code: string;
  message: string;

}