import info from '../models/infos';
import imagesView from "./images_view";

export default {
    render(info: info){

        return{
            id:           info.id,
            name:         info.name,
            latitude:     info.latitude,
            longitude:    info.longitude,
            about:        info.about,
            instructions: info.instructions,
            opening_hours:info.opening_hours,
            open_on_weekends:info.open_on_weekends,
            images: imagesView.renderManny(info.images)
        };
    },

    renderManny(infos: info[]){

        return infos.map(info => this.render(info));
    },



}