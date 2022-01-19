import { BaseError } from "./BaseError";

export class AlreadyExistsError extends BaseError {

  static CODE = "ALREADY_EXISTS_ERROR";
  static DEFAULT_MESSAGE = "Already exists item id";

  constructor(message?: string) {
    super(message || AlreadyExistsError.DEFAULT_MESSAGE, AlreadyExistsError.CODE);
  }

  code: string;
  message: string;

}