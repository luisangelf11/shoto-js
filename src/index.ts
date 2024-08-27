import Application from "./core/Application";
import MyRouter from "./core/Routes";

const app = new Application(3000)
const users = new MyRouter()

app.runRoute(users.GET('/', (req, res)=>{
    res.json({message: "hi!"})
}))

app.runRoute(users.GET('/:id', (req, res)=>{
    res.json({message: "This is a param: " + req.params.id})
}))

app.listen()
