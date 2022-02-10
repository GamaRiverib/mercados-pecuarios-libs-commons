import { BaseError } from "./BaseError";

export class ApiError extends BaseError {

  constructor(message: string, code: string) {
    super(message, code);
  }

}

export class ApiErrorResponse extends BaseError {

  constructor(message: string, code: string) {
    super(message, code);
  }

  code: string;
  message: string;
  folio: string;

}