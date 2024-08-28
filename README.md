# Shoto-JS

Shoto Js is a library for node js created by Luis Angel Fernandez. This library is based on express, and its purpose is create API Rest quickly and easily. It's configuration is very simple, also generate routes foreach HTTP VERBS.

Repository: https://github.com/luisangelf11/shoto-js

> If you want to implement databases, it is advisable to use an ORM as a prisma

Prisma documentation: https://www.prisma.io/docs/getting-started

> This is an example project Shoto-JS with prisma: https://github.com/luisangelf11/app-shoto-example

## Installation

Execute this command in the console for install `Shoto-JS` in a project already exist

```
npm i shoto-js
```

But if you need create a new project with `Shoto-JS`, you can install the `Shoto-CLI` with this command.

```
npm i -g cli-shoto
```

For call the CLI open a terminal and execute:

```
shoto-js
```

The CLI allow us:
- Create a new project
- Create the routers files
- Create the services files

## Create a server

For create a new server with Shoto-JS you need import the Application module. Application receive 3 params when generate the new object in it's constructor.
| Params| Type| Description| Default|
| ------ | ------ |----- | ----- |
|port| number | the port that use the server| required|
|urlEncoded| boolean| active a middleware that only parses urlencoded bodie| false |
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
> The runRoute method is use to call a route object and it's endpoints

## Server Functions

This functions need 3 params: request, response and next. Next is optional.

|Params|Type| isRequried|
| ---- | ---- | ---- |
|req | Request (from express)| true|
|res | Response (from express)| true|
|next| function void | false |

### Example

```
import { Exceptions } from "shoto-js"

export function getHome(req, res) {
    try {
        res.json({ message: 'Say hello' })
    } catch (error) {
       return Exceptions.InternalServerError(res, error.message)
    }
}

export function postHome(req, res) {
    try {
        res.json({ message: 'This is a post' })
    } catch (error) {
       return Exceptions.InternalServerError(res, error.message)
    }
}

export function putHome(req, res) {
    try {
        res.json({ message: 'This is a put' })
    } catch (error) {
       return Exceptions.InternalServerError(res, error.message)
    }
}

export function deleteHome(req, res) {
    try {
        res.json({ message: 'This is a delete' })
    } catch (error) {
      return Exceptions.InternalServerError(res, error.message)
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

Another method for generate custom exceptions is TemplateError. This method receive a object as param, the object need this props:

|Props| Type|
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
        return Exceptions.InternalServerError(res, error.message)
    }
}
```

## Upload Files

Shoto-JS uses multer for file uploads. To configure file uploads you simply have to create an instance of the UploadFile class. You need import this class from Shoto-JS.

```
import { UploadFile } from 'shoto-js'

const fileTypeRegex = /jpg|png|jpeg|gif|JPG|PNG/
const pathFile = join(__dirname, '/uploads')
const uploadFile = new UploadFile(pathFile, fileTypeRegex)
```
> The constructor receive two params: pathFile and fileTypeRegex

|Parms| Description|
| ----- | ----- |
|pathFile| Path where the file is saved|
|fileTypeRegex | Regex for validate a format file|

The next step is use the method uploadRoute. This method is use to generate a route with the `POST` verb.

|Params| Type| Description|
|----|----|----|
|enpoint|string| API route |
|inputName| string| Input file name in the HTML or rest client| 
|yourHost| string| Name of your host (http://localhost:3000 for example)
|folderName| string| Folder where the file is saved|

```
uploadFile.uploadRoute('/upload', 'file', 'localhost:3000', 'upload')

//Routes
app.runRoute(uploadFile.uploadRoutes)//Router for upload a single file with post method
```

### Example completed

```
import {Application, UploadFile } from 'shoto-js'
import home from './routes/homeRoute.js';
import person from './routes/personRoute.js';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';

const app = new Application(3000);

//Upload file
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileTypeRegex = /jpg|png|jpeg|gif|JPG|PNG/
const pathFile = join(__dirname, '/uploads')
const uploadFile = new UploadFile(pathFile, fileTypeRegex)
uploadFile.uploadRoute('/upload', 'file', 'localhost:3000', 'upload')

//Routes
app.runRoute(uploadFile.uploadRoutes)//Router for upload a single file with post method
app.runRoute(person.router)
app.runRoute(home.router) //Home router is the end router for call

//Run server
app.listen()
```

## License

ISC

**By: Luis Angel Fernandez**