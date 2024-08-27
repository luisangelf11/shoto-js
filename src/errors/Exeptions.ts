import { Response } from "express";

export default class Exeptions {
    constructor(){}

    static NotFound(res: Response, message: string = ""){
        let text = message === ""? "Not found exeption": message
        res.status(404).json({
            message: text,
            code: 'Not Found😿',
            statusCode: 404,
            sucess: false
          })
    }

    static Unauthorized(res: Response, message: string = ""){
        let text = message === ""? "Unauthorized": message
        res.status(401).json({
          message: text,
          code: 'Unauthorized😿',
          statusCode: 401,
          sucess: false
        })
    }

    static Forbidden(res: Response, message: string = ""){
        let text = message === ""? "Forbidden": message
        res.status(403).json({
          message: text,
          code: 'Forbidden😿',
          statusCode: 403,
          sucess: false
        })
    }

    static BadRequest(res: Response, message: string = ""){
        let text = message === ""? "Bad request": message
      res.status(400).json({
        message: text,
        code: 'Bad Request😿',
        statusCode: 400,
        sucess: false
      })
    }

    static InternalServerError(res: Response, message: string = ""){
        let text = message === ""? "Internal Server Error": message
        res.status(500).json({
          message: text,
          code: 'Internal Server Error😿',
          statusCode: 500,
          sucess: false
        })
    }

    static BadGateway(res: Response, message: string = ""){
        let text = message === ""? "Bad Gateway": message
        res.status(502).json({
          message: text,
          code: 'Bad Gateway😿',
          statusCode: 502,
          sucess: false
        })
    }

    static TemplateError(res: Response, message: string, titleCode: string){
      res.status(502).json({
        message,
        code: titleCode,
        statusCode: 502,
        sucess: false
      })
  }
}