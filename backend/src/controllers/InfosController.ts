import { getRepository, Index } from 'typeorm';
import Info from '../models/infos';
import {Request, Response} from 'express';

import infoView from '../views/info_view';
import * as Yup from 'yup';


export default{
    async Index(request: Request, response: Response){
        const infosRepository = getRepository(Info);

        const infos = await infosRepository.find({
            relations: ['images']
        });

        return response.json(infoView.renderManny(infos));
       
    },
    async show(request: Request, response: Response){
        const { id } = request.params;

        const infosRepository = getRepository(Info);

        const info = await infosRepository.findOneOrFail(id,{
            relations: ['images']
        });

        return response.json(infoView.render(info));
       
    },



    async create(request: Request, response: Response){
        const {
           nome,
           bio, 
           adress,
           school,
           email,
           password,
        } = request.body
    
        const infosRepository = getRepository(Info);

        const requestImages = request.files as Express.Multer.File[] ;
        const images = requestImages.map(image => {

            return {path: image.filename }
        })

        const data = {
            nome,
            bio, 
            adress,
            school,
            email,
            password,
            images
        };

        // validação
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            bio: Yup.string().required(),
            adress: Yup.string().required(),
            school: Yup.string().required().max(300),
            email: Yup.string().required(),
            password: Yup.string().required(),

            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
            }))

        });
        const finalData = schema.cast(data);

        // mostra qual campo não esta valido e cancela tudo
        await schema.validate(data, {
            abortEarly: false,

        });
    
        const info = infosRepository.create(data);
    
        await infosRepository.save(info);
    
    
        return response.status(201).json(info);
    }
}