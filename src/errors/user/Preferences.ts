import { BaseError } from "../BaseError";

export class PreferencesError extends BaseError {
  
  static CODE = "PREFERENCES_ERROR";
  static DEFAULT_MESSAGE = "Preferences error";

  constructor(message?: string) {
    super(message || PreferencesError.DEFAULT_MESSAGE, PreferencesError.CODE);
  }

  code: string;
  message: string;
  folio: string;
  
}
