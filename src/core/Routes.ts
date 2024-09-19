import { NextFunction, Request, Response, Router } from "express";

export default class MyRouter {
  public router;
  constructor(private pathName: string = "/") {
    if (this.pathName !== "/") {
      if (!/^\/.*/.test(pathName))
        throw new Error(
          `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint 🙀`
        );
    }
    this.pathName = pathName;
    this.router = Router();
  }

  //GET FUNCION
  GET(
    endpoint: string | "/",
    cb: (req: Request, res: Response, next?: NextFunction) => void,
    middleware?: (req: Request, res: Response, next: NextFunction) => void
  ) {
    let params = false;
    if (endpoint !== "/") {
      //validate a param
      if (!/^\/:/.test(endpoint)) {
        //validate a format endpoint
        if (!/^\/.*/.test(endpoint))
          throw new Error(
            `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint 🙀`
          );
      } else params = true;
    }
    //Validate middleware params
    if (!middleware)
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, cb)
        : this.router.get(`${params ? endpoint : this.pathName}`, cb);
    else
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, middleware, cb)
        : this.router.get(
            `${params ? endpoint : this.pathName}`,
            middleware,
            cb
          );
  }

  //POST FUNCTION
  POST(
    endpoint: string | "/",
    cb: (req: Request, res: Response, next?: NextFunction) => void,
    middleware?: (req: Request, res: Response, next: NextFunction) => void
  ) {
    let params = false;
    if (endpoint !== "/") {
      //validate a param
      if (!/^\/:/.test(endpoint)) {
        //validate a format endpoint
        if (!/^\/.*/.test(endpoint))
          throw new Error(
            `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint 🙀`
          );
      } else params = true;
    }
    //Validate middleware params
    if (!middleware)
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, cb)
        : this.router.get(`${params ? endpoint : this.pathName}`, cb);
    else
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, middleware, cb)
        : this.router.get(
            `${params ? endpoint : this.pathName}`,
            middleware,
            cb
          );
  }

  //PUT FUNCTION
  PUT(
    endpoint: string | "/",
    cb: (req: Request, res: Response, next?: NextFunction) => void,
    middleware?: (req: Request, res: Response, next: NextFunction) => void
  ) {
    let params = false;
    if (endpoint !== "/") {
      //validate a param
      if (!/^\/:/.test(endpoint)) {
        //validate a format endpoint
        if (!/^\/.*/.test(endpoint))
          throw new Error(
            `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint 🙀`
          );
      } else params = true;
    }
    //Validate middleware params
    if (!middleware)
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, cb)
        : this.router.get(`${params ? endpoint : this.pathName}`, cb);
    else
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, middleware, cb)
        : this.router.get(
            `${params ? endpoint : this.pathName}`,
            middleware,
            cb
          );
  }

  //DELETE FUNCTION
  DELETE(
    endpoint: string | "/",
    cb: (req: Request, res: Response, next?: NextFunction) => void,
    middleware?: (req: Request, res: Response, next: NextFunction) => void
  ) {
    let params = false;
    if (endpoint !== "/") {
      //validate a param
      if (!/^\/:/.test(endpoint)) {
        //validate a format endpoint
        if (!/^\/.*/.test(endpoint))
          throw new Error(
            `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint 🙀`
          );
      } else params = true;
    }
    //Validate middleware params
    if (!middleware)
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, cb)
        : this.router.get(`${params ? endpoint : this.pathName}`, cb);
    else
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, middleware, cb)
        : this.router.get(
            `${params ? endpoint : this.pathName}`,
            middleware,
            cb
          );
  }

  //PATCH FUNCTION
  PATCH(
    endpoint: string | "/",
    cb: (req: Request, res: Response, next?: NextFunction) => void,
    middleware?: (req: Request, res: Response, next: NextFunction) => void
  ) {
    let params = false;
    if (endpoint !== "/") {
      //validate a param
      if (!/^\/:/.test(endpoint)) {
        //validate a format endpoint
        if (!/^\/.*/.test(endpoint))
          throw new Error(
            `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint 🙀`
          );
      } else params = true;
    }
    //Validate middleware params
    if (!middleware)
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, cb)
        : this.router.get(`${params ? endpoint : this.pathName}`, cb);
    else
      return this.pathName !== "/"
        ? this.router.get(`${this.pathName}${endpoint}`, middleware, cb)
        : this.router.get(
            `${params ? endpoint : this.pathName}`,
            middleware,
            cb
          );
  }
}
