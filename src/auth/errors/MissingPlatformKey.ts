import { BaseError } from "../../errors/BaseError";

export class MissingPlatformKeyError extends BaseError {
  static CODE = "MISSING_PLATFORM_KEY_ERROR";
  static DEFAULT_MESSAGE = "Platform key is missing";

  constructor(message?: string) {
    super(message || MissingPlatformKeyError.DEFAULT_MESSAGE, MissingPlatformKeyError.CODE);
  }

  code: string;
  message: string;
  
}