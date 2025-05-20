import type {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import type { CorsOptions } from "cors";
import type { ParamsDictionary } from "express-serve-static-core";
import type { ParsedQs } from "qs";
import type { SessionOptions } from "express-session";

type Class<T = any> = new (...args: any[]) => T;

export type { Application, Request, Response, NextFunction, Router };

export type RequestHandler<
  Params = ParamsDictionary,
  ResBody = unknown,
  ReqBody = unknown,
  ReqQuery = ParsedQs,
  Locals extends Record<string, unknown> = Record<string, unknown>,
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody>,
  next: NextFunction,
) => void | Promise<void>;

export type RequestMethod =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE";

export type ServerCoreEvents = {
  ping: [timestamp: number];
  listen: [url: string];
};

export interface ServerCoreOptions {
  port: number | string;
  cors: CorsOptions;
  json?: { limit: string };
  urlencoded?: { limit: string };
  session?: SessionOptions;
}

export interface RoutesHandlerOptionsRoute {
  handlerClass: Class;
  prefix: string;
}

export interface RoutesHandlerOptions {
  app: Application;
  routes: RoutesHandlerOptionsRoute[];
}

export type ResponseDTO = {
  code?: number;
  success?: boolean;
  message?: string;
  data?: unknown;
};
