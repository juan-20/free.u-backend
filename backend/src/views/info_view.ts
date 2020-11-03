import info from '../models/infos';
import imagesView from "./images_view";

export default {
    render(info: info){

        return{
            id:           info.id,
            name:         info.nome,
            latitude:     info.bio,
            longitude:    info.adress,
            about:        info.school,
            instructions: info.email,
            opening_hours:info.password,
            images: imagesView.renderManny(info.images)
        };
    },

    renderManny(infos: info[]){

        return infos.map(info => this.render(info));
    },



}