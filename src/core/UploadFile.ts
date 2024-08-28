import multer from 'multer'
import {extname} from 'path'
import { Router } from 'express';

export default class UploadFile{
    private storage;
    private upload;
    public uploadRoutes;

    constructor(private dirPath: string, private fileTypesRegex: RegExp) {
        this.uploadRoutes = Router()
         this.storage = multer.diskStorage({
            destination: this.dirPath,
            filename: (req, file, cb) => {
                const uniqueId = Date.now() + '-' + Math.round(Math.random() * 1E9);
                cb(null, uniqueId + extname(file.originalname).toLocaleLowerCase());
            }
        });
        
         this.upload = multer({
            storage: this.storage,
            fileFilter: (req, file, cb) => {
                const fileTypes = this.fileTypesRegex;
                const mimetypes = fileTypes.test(file.mimetype);
                const extnameFile = fileTypes.test(extname(file.originalname));
                if (mimetypes && extnameFile) return cb(null, true);
                cb(null, false)
            }
        });
    }

    uploadRoute(endpoint: string, inputName: string, yourHost: string, folderName: string){
         //validate a format endpoint
         if (!/^\/.*/.test(endpoint))
            throw new Error(
              `The endpoint has a syntaxt error. The format endpoint is: /nameEnpoint`
            );
        this.uploadRoutes.post(endpoint, this.upload.single(inputName),(req, res) => {
            if (!req.file)
                return res.status(400).json({ "message": 'Please, select a file' });
            res.json({ "urlImage": `${yourHost}/${folderName}/${req.file.filename}`});
        });
    }
}