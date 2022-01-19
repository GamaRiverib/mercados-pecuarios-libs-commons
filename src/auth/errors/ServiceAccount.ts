import { BaseError } from "../../errors/BaseError";

export class ServiceAccountError extends BaseError {

  static CODE = "SERVICE_ACCOUNT_ERROR";
  static DEFAULT_MESSAGE = "Service account error";

  constructor(message?: string) {
    super(message || ServiceAccountError.DEFAULT_MESSAGE, ServiceAccountError.CODE);
  }

  code: string;
  message: string;

}
