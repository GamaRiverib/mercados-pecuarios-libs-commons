import { BaseError } from "../BaseError";

export class DefaultUserRepositoryError extends BaseError {
  
  static CODE = "REPOSITORY_ERROR";
  static DEFAULT_MESSAGE = "There was a problem trying to persist the information in the repository";

  constructor(message?: string) {
    super(message || DefaultUserRepositoryError.DEFAULT_MESSAGE, DefaultUserRepositoryError.CODE);
  }

  code: string;
  message: string;
  
}
