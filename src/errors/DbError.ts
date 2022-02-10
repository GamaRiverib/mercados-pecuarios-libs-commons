import { BaseError } from "./BaseError";

export class DbError extends BaseError {

  static CODE = "DB_ERROR";
  static DEFAULT_MESSAGE = "Something was wrong with database";

  constructor(message?: string) {
    super(message || DbError.DEFAULT_MESSAGE, DbError.CODE);
  }

  code: string;
  message: string;
  folio: string;

}