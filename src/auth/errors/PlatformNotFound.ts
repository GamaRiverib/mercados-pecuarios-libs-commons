import { BaseError } from "../../errors/BaseError";

export class PlatformNotFoundError extends BaseError {
  static CODE = "PLATFORM_NOT_FOUND_ERROR";
  static DEFAULT_MESSAGE = "Platform not found";

  constructor(message?: string) {
    super(message || PlatformNotFoundError.DEFAULT_MESSAGE, PlatformNotFoundError.CODE);
  }

  code: string;
  message: string;

  platformKey: string;
  
}