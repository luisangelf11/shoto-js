import Application from "./core/Application";
import MyRouter from "./core/Routes";
import { Exeptions } from "./errors/Exeptions";

const app = new Application(3000)
const users = new MyRouter('/users')

users.GET('/', (req, res)=>{
    try {
        throw new Error(`adsasd`)
        res.json({message: "hi!"})
    } catch (error) {
        const {message, status} = Exeptions.NotFound('The product is not found')
        res.status(status).json(message)
    }
})

app.runRoute(users.router)
app.listen()
