import { response } from "express";

export class Exeptions {
    constructor(){}

    static NotFound(message: string = ""){
        let text = message === ""? "Not found exeption": message
      return  {message: {
        error: text,
        statusCode: 404,
        sucess: false
      }, status: 404}
    }
}