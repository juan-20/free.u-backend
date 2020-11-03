import { Router } from 'express';
import infosController from './controllers/InfosController';


import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/infos' , infosController.Index);
routes.get('/infos/:id' , infosController.show);
routes.post('/infos' , upload.array('images') ,  infosController.create);

export default routes;