# Shoto-JS

Shoto Js is a library for node js created by Luis Angel Fernandez. This library is based on express, and its purpose is create API Rest quickly and easily. It's configuration is very simple, also generate routes foreach HTTP VERBS.

Repository: https://github.com/luisangelf11/shoto-js

## Instalation

Execute this command in the console for install

```
npm i shoto-js
```

## Create a server

For create a new server with Shoto-JS you need import the Application module. Application receive two params when generate the new object in it's constructor.
| Params| Type| Description| Default|
| ------ | ------ |----- | ----- |
|port| number | the port that use the server| required|
|hostCore|string| host enabled for cors| all server |

### Example

```
import {Application } from 'shoto-js'

const app = new Application(3000); //All server

//Run server
app.listen()
```

## Rutes

For create routes you need import the MyRouter module and generate a new instance. This object use a `pathName` propertie that is optional. When `pathName`don't have a value, Shoto-js set it's value to `/` for default.

### Example

#### Peoples rutes
```
import { MyRouter } from "shoto-js";
import { createPerson, deletePerson, getPeoples, getPerson, updatePerson } from "../services/personService.js";

const person = new MyRouter('/peoples')

person.GET('/', getPeoples)
person.GET('/:id', getPerson) //-> /:id is a param like express
person.POST('/', createPerson)
person.PUT('/:id', updatePerson)
person.DELETE('/:id', deletePerson)

export default person
```
#### Home routes

```
import { MyRouter } from "shoto-js";
import { deleteHome, getHome, postHome, putHome } from "../services/homeService.js";

const home = new MyRouter()

home.GET('/', getHome)
home.POST('/', postHome)
home.PUT('/', putHome)
home.DELETE('/', deleteHome)

export default home
```

Now for implement this routes:

```
import {Application } from 'shoto-js'
import home from './routes/homeRoute.js';
import person from './routes/personRoute.js';

const app = new Application(3000);

//Routes
app.runRoute(person.router)
app.runRoute(home.router) //Home router is the end router for call

//Run server
app.listen()
```
## Server Functions

This functions need 3 params: request, response and next. Next is optional.

|Params|Type| isRequried|
| ---- | ---- | ---- |
|req | Request (from express)| true|
|res | Response (from express)| true|
|next| function void | true |

### Example

```
import { Exceptions } from "shoto-js"

export function getHome(req, res) {
    try {
        res.json({ message: 'Say hello' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}

export function postHome(req, res) {
    try {
        res.json({ message: 'This is a post' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}

export function putHome(req, res) {
    try {
        res.json({ message: 'This is a put' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}

export function deleteHome(req, res) {
    try {
        res.json({ message: 'This is a delete' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}
```

## Exceptions

Shoto-JS handles exceptions with an exceptions class. Exeptions it's a class with a lot exceptions methods.

|Method| First param |Second param | Status|
|----| -----| -----| ---- |
|NotFound | Response: (from express) | message (optional) | 404|
|Unauthorized | Response: (from express) | message (optional) | 401|
|Forbidden | Response: (from express) | message (optional) | 403|
|BadRequest | Response: (from express) | message (optional) | 400|
|InternalServerError | Response: (from express) | message (optional) | 500|
|BadGateway | Response: (from express) | message (optional) | 502|

Another method for generate custom exceptions is TemplateError.

|Params| Type|
| -----| ---- |
|res | Response (from express)|
|message| string|
|titleCode| string|
|code | number|
|success| boolean|

### Example exceptions

```
import { Exceptions } from "shoto-js"

export function deleteHome(req, res) {
    try {
        res.json({ message: 'This is a delete' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}
```

## License

ISC

**By: Luis Angel Fernandez**