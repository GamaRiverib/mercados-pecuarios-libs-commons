import { ApiValidationError, createError, UnhandleError } from "./errors";
import { writeLogErr } from "./logger";

export function getISODate(): string {
  const today = new Date();
  today.setHours(today.getHours()-7); // TODO: -7?
  return today.toISOString();
}

export function apiErrorMiddleware(reason: any, req: any, res: any, next: any): void {

  if(Array.isArray(reason.errors) && reason.errors.length >= 1) {
    const errorCodeReplace: string = ".openapi.validation";
    const pathReplaceBody: string = ".body.";
    const pathReplaceQuery: string = ".query.";

    let errors: Array<any> = reason.errors.map((e: { message: string, errorCode: string, path: string })=> {
      let error: { property: string, code: string, message: string } = {
        code: e.errorCode ? e.errorCode.replace(errorCodeReplace, "") : "UNKNOWN",
        property: e.path ? e.path.replace(pathReplaceBody, "").replace(pathReplaceQuery, "") : "UNKNOWN",
        message: e.message
      };
      return error;
    });

    const error = new ApiValidationError("Request validation error", errors);
    writeLogErr(req, error, reason);
    res.status(reason.status || 400).send({ error });
    return;
  }
  const error = createError("", "Not OpenAPI errors");
  writeLogErr(req, error, reason);
  res.status(reason.status || 500).send({ error: new UnhandleError() });
  
}