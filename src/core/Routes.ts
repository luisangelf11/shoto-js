import { NextFunction, Request, Response, Router } from "express";

export default class MyRouter {
  private router;
  constructor(private pathName: string = "/") {
    this.pathName = pathName;
    this.router = Router();
  }

  GET(
    endpoint: string | "/",
    cb: (req: Request, res: Response, next?: NextFunction) => void
  ) {
    let params = false;
    if (endpoint !== "/") {
      //validate a param
      if (!/^\/:/.test(endpoint)) {
        //validate a format endpoint
        if (!/^\/.*/.test(endpoint))
          throw new Error(
            `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint`
          );
      } else params = true;
    }
    return this.pathName !== "/"
      ? this.router.get(`${this.pathName}${endpoint}`, cb)
      : this.router.get(`${params ? endpoint : this.pathName}`, cb);
  }
}
