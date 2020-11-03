import image from '../models/images';

export default {
    render(image: image){

        return{
            id:           image.id,
            url: `http://192.168.0.34:3333/uploads/${image.path}`,
        };
    },

    renderManny(images: image[]){

        return images.map(image => this.render(image));
    },



}