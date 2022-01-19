const DEFAULT_ERROR_CODE = process.env.DEFAULT_ERROR_CODE || "DEFAULT_ERROR";
const DEFAULT_ERROR_MESSAGE = process.env.DEFAULT_ERROR_MESSAGE || "Somethings was wrong";

export interface ApiError {
  code: string;
  message: string;
  folio: string;
}

export class ApiErrorImpl implements ApiError {

  code: string;
  message: string;
  folio: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
    this.folio = generateFolio();
  }

}

export function generateFolio(len?: number, charset?: string): string {
  const l = len || 10;
  const c = charset || "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let folio = "";
  for (let i = 0, n = c.length; i < l; ++i) {
    folio += c.charAt(Math.floor(Math.random() * n));
  }
  return folio;
}

export function createError(code?: string, message?: string): ApiError {
  return new ApiErrorImpl(code || DEFAULT_ERROR_CODE, message || DEFAULT_ERROR_MESSAGE);
}
