import { BaseError } from "./BaseError";

export class MissingRequiredParametersError extends BaseError {

  static CODE = "MISSING_REQUIRED_PARAMETERS_ERROR";
  static DEFAULT_MESSAGE = "Missing required parameters";

  constructor(message?: string) {
    super(message || MissingRequiredParametersError.DEFAULT_MESSAGE, MissingRequiredParametersError.CODE);
  }

  code: string;
  message: string;
  folio: string;
  
}