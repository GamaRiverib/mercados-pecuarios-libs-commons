import { BaseError } from "./BaseError";

export class ApiError extends BaseError {

  constructor(message: string, code: string) {
    super(message, code);
  }

}
