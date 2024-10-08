import express, { Router } from "express";
import cors from 'cors'
import morgan from 'morgan'

export default class Application {
  private app;
  //Constructor
  constructor(private port: number, private urlEncoded: boolean = false, private hostCore: string = '') {
    this.port = port;
    this.app = express();
    //Cors
    this.hostCore = hostCore
    this.hostCore !== '' ? this.app.use(cors({
        origin: this.hostCore
    })) : this.app.use(cors())
    //Formats
    //JSON
    this.app.use(express.json())
    //URLEncode
    this.app.use(express.urlencoded({extended: this.urlEncoded}))
    //Morgan
    this.app.use(morgan('dev'))
  }

  runRoute(router: Router){
    this.app.use(router)
  }

  getPort(){
    return this.port;
  }

  listen() {
    this.app.listen(this.port)
    console.log(`😸 Server running on port`, this.port)
  }
}
