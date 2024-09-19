import Application from "./core/Application";
import MyRouter from "./core/Routes";
import UploadFile from "./core/UploadFile";
import Exceptions  from "./errors/Exceptions";
import MyPassword from './core/Password'

export {
    Application,
    MyRouter,
    Exceptions,
    UploadFile,
    MyPassword
}

const myRoute = new MyRouter()

const app = new Application(3000)

myRoute.GET('/', (req, res)=>{
    res.json({message: 'Hola'})
})
app.runRoute(myRoute.router)

app.listen()

