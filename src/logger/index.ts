import * as winston from "winston";
// Imports the Google Cloud client library for Winston
import { LoggingWinston } from "@google-cloud/logging-winston";

import { USER_ID_KEY } from "../constants";
import { createError } from "../errors";

const prefix = process.env.LOGGER_PREFIX || "Logger";
const level = (process.env.LOGGER_LEVEL || "debug");
const enable = process.env.ENABLE_CLOUD_LOGGING ?
  process.env.ENABLE_CLOUD_LOGGING.toLowerCase() === "true" : false;

const logger = createLogger(prefix);

// type CONSOLE_LEVELS = "silly" | "input" | "verbose" | "prompt" | "debug" | "info" | "data" | "help" | "warn" | "error";

// Create a Winston logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
export function createLogger(service: string): winston.Logger {
    const loggerOptions: winston.LoggerOptions = { level, format: winston.format.json() };
    loggerOptions.transports = [];
    loggerOptions.transports.push(new winston.transports.Console());
    if (enable) {
      loggerOptions.transports.push(new LoggingWinston({ prefix: service }));
    }
    return winston.createLogger(loggerOptions);
}

export function writeLogWarn (req: any, error?: any, data?: any): void {
  try {
    if (!error) {
      error = createError();
    }
    if (!data) {
      data = {};
    }
    logger.warn(`${error.code}: ${error.message}`, {
      labels: { folio: error.folio },
      data,
      url: req?.url,
      method: req?.method,
      ip: req?.ip,
      user: req ? req[USER_ID_KEY]?.uid : "",
    });
  } catch (err) {
    console.log(err);
  }
}

export function writeLogErr(req: any, error?: any, reason?: any, data?: any): void {
  try {
    if (!error) {
      error = createError();
    }
    if (!data) {
      data = {};
    }
    logger.error(`${error.code}: ${error.message}`, {
      labels: { folio: error.folio },
      error: reason?.toString(),
      data,
      url: req?.url,
      method: req?.method,
      ip: req?.ip,
      user: req ? req[USER_ID_KEY]?.uid : "",
    });
  } catch (err) {
    console.log(err);
  }
}

export function writeLog(req: any, message: any, data: any): void {
  try {
    if (!data) {
      data = {};
    }
    logger.info(message, {
      data,
      url: req?.url,
      method: req?.method,
      ip: req?.ip,
      user: req ? req[USER_ID_KEY]?.uid : "",
    });
  } catch (err) {
    console.log(err);
  }
}