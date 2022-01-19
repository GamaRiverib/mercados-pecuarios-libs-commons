import { BaseError } from "./BaseError";

export class ApiValidationError extends BaseError {

  static CODE = "API_VALIDATION_ERROR";
  static DEFAULT_MESSAGE = "API validation error";

  validations: Array<any>;

  constructor(message?: string, errors?: Array<any>) {
    super(message || ApiValidationError.DEFAULT_MESSAGE, ApiValidationError.CODE);
    this.validations = errors || [];
  }

  code: string;
  message: string;

}