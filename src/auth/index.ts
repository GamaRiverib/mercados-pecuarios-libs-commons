export * from "./authorizations";
export * from "./errors";

import { decode } from "jsonwebtoken";

import winston = require("winston");

import { API_GATEWAY_AUTHORIZATION_HEADER, DEFAULT_AUTHORIZATION_HEADER, USER_ID_KEY } from "../constants";

const authorization_header = process.env.AUTHORIZATION_HEADER_INFO || "authorization";

import { createLogger, writeLogErr, writeLogWarn } from "../logger";
import { AuthorizationHeaderNotSupportedError, InvalidAccessTokenFormatError,
         InvalidSchemeAuthorizationError, MissingAccessTokenError, VerificationAccessTokenError } from "./errors";

const logger: winston.Logger = createLogger("Auth");

export interface User {
  uid: string;
  roles: string[];
  membership?: {
    type: string;
    expire: number;
  }
}

export function middleware(req: any, res: any, next: any): void {
  try {
    let json: any;
    // logger.debug("HEADERS", { data: { headers: req.headers, authorization_header }});
    if(!req.headers || !req.headers[authorization_header]) {
      const error = new MissingAccessTokenError();
      writeLogErr(req, error);
      res.status(401).send({ error });
      return;
    }
    if (authorization_header === DEFAULT_AUTHORIZATION_HEADER) {
      if(!req.headers[authorization_header].startsWith("Bearer ")) {
        const error = new InvalidSchemeAuthorizationError();
        writeLogErr(req, error);
        res.status(401).send({ error });
        return;
      }
      const token = req.headers[authorization_header].split(" ")[1];
      json = decode(token, { complete: true });
      if (!json || typeof json !== "object" || !json.payload) {
        const error = new InvalidAccessTokenFormatError();
        writeLogErr(req, error);
        res.status(403).send({ error });
        return;
      }
    } else if (authorization_header === API_GATEWAY_AUTHORIZATION_HEADER) {
      let buffer = Buffer.from(req.headers[authorization_header].toString(), "base64");
      const data = buffer.toString("ascii");
      logger.debug("AUTH", { data: { header: data, header_key: authorization_header }});
      json = { payload: JSON.parse(data) };
    } else {
      const error = new AuthorizationHeaderNotSupportedError();
      writeLogWarn(req, error);
      res.status(400).send({ error });
    }
    if (!json) {
      const error = new VerificationAccessTokenError();
      writeLogWarn(req, error, { reason: "Empty payload" });
      res.status(400).send({ error });
      return;
    }
    const payload = json.payload;
    if (!payload) {
      const error = new VerificationAccessTokenError();
      writeLogWarn(req, error, { reason: "Empty payload" });
      res.status(400).send({ error });
      return;
    }
    req[USER_ID_KEY] = {
      uid: payload.sub,
      roles: payload.roles || [],
      membership: payload.membership
    };
    return next();
  } catch(reason: any) {
    const error = new VerificationAccessTokenError();
    writeLogErr(req, error, reason);
    res.status(400).send({ error });
  }
}
