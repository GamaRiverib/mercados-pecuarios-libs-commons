import { ApiError } from "./ApiError";

export class StateNotValidError extends ApiError {

  static CODE = "STATE_NOT_VALID_ERROR";
  static DEFAULT_MESSAGE = "Entity invalid state";

  constructor(message?: string) {
    super(message || StateNotValidError.DEFAULT_MESSAGE, StateNotValidError.CODE);
  }

  code: string;
  message: string;

}
